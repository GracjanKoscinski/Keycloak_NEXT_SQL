from flask import Flask, request, jsonify
from keycloak import KeycloakOpenID
from flask_cors import CORS
import psycopg2
from datetime import datetime
from functools import wraps
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 


# Konfiguracja Keycloak
keycloak_openid = KeycloakOpenID(
    server_url=os.getenv('KEYCLOAK_SERVER_URL'),
    client_id=os.getenv('KEYCLOAK_CLIENT_ID'),
    realm_name=os.getenv('KEYCLOAK_REALM_NAME'),
    client_secret_key=os.getenv('KEYCLOAK_CLIENT_SECRET')
)

def token_required(required_roles=None):
    required_roles = required_roles or []

    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            auth_header = request.headers.get('Authorization')
            if not auth_header:
                return jsonify({"error": "Missing authorization header"}), 401
            try:
                token = auth_header.split()[1]
                user_info = keycloak_openid.introspect(token)
               
                if not user_info['active']:
                    # Wyświetl też cały token
                    return jsonify({"error": "Token is not active"}), 401

                if required_roles:
                    if 'realm_access' not in user_info or 'roles' not in user_info['realm_access']:
                        return jsonify({"error": "User does not have the required roles"}), 403

                    user_roles = user_info['realm_access']['roles']
                    if not any(role in user_roles for role in required_roles):
                        return jsonify({"error": "User does not have the required roles"}), 403

                return f(user_info, *args, **kwargs)
            except Exception as e:
                return jsonify({"error": str(e)}), 401
        return decorated
    return decorator

def admin_required(f):
    return token_required(required_roles=['admin'])(f)

# Połączenie z bazą danych
def connect_to_db():
    try:
        connection = psycopg2.connect(
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            host=os.getenv('DB_HOST'),
            port=os.getenv('DB_PORT'),
            database=os.getenv('DB_NAME')
        )
        return connection
    except psycopg2.Error as e:
        print("Error while connecting to PostgreSQL:", e)
        return None


# Endpoint dodający nowe todo
@app.route('/todos', methods=['POST'])
@token_required()
def add_todo(user_info):
    data = request.get_json()
    description = data.get('description')
    if not description:
        return jsonify({"error": "Description is required"}), 400

    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        adding_date = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
        user_id = user_info['sub']

        cursor.execute("INSERT INTO todo_app (userID, description, addingDate, achieved) VALUES (%s, %s, %s, %s)",
                       (user_id, description, adding_date, False))
        connection.commit()
        return jsonify({"message": "Todo added successfully"}), 201

    except psycopg2.Error as e:
        print("Error while adding todo:", e)
        return jsonify({"error": "Failed to add todo"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()

# Endpoint pobierający wszystkie todo dla określonego userID
@app.route('/todosOfUser', methods=['GET'])
@token_required()
def get_todos(user_info):
    user_id = user_info['sub']

    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM todo_app WHERE userID = %s", (user_id,))
        todos = cursor.fetchall()

        if not todos:
            return jsonify({"message": "No todos from you yet"}), 200

        todos_list = []
        for todo in todos:
            todo_dict = {
                "todo_id": todo[0],
                "userID": todo[1],
                "description": todo[2],
                "addingDate": todo[3].strftime('%Y-%m-%d'),
                "achieved": todo[4]
            }
            todos_list.append(todo_dict)

        return jsonify({"todos": todos_list}), 200

    except psycopg2.Error as e:
        print("Error while getting todos:", e)
        return jsonify({"error": "Failed to get todos"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()
# Endpoint do zmiany stanu todo
@app.route('/todos/<int:todo_id>/toggle', methods=['PATCH'])
@token_required()
def toggle_todo_status(user_info, todo_id):
    user_id = user_info['sub']

    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        # Check if the todo item belongs to the authenticated user
        cursor.execute("SELECT achieved, userID FROM todo_app WHERE id = %s", (todo_id,))
        todo = cursor.fetchone()

        if not todo:
            return jsonify({"error": "Todo not found"}), 404

        if todo[1] != user_id:
            return jsonify({"error": "You do not have permission to change this todo"}), 403

        # Toggle the achieved status
        new_status = not todo[0]
        cursor.execute("UPDATE todo_app SET achieved = %s WHERE id = %s", (new_status, todo_id))
        connection.commit()

        return jsonify({"message": "Todo status updated successfully", "new_status": new_status}), 200

    except psycopg2.Error as e:
        print("Error while toggling todo status:", e)
        return jsonify({"error": "Failed to update todo status"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()

#Endpoin do usuwania todo
@app.route('/todos/<int:todo_id>', methods=['DELETE'])
@token_required()
def delete_todo(user_info, todo_id):
    user_id = user_info['sub']

    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        # Check if the todo item belongs to the authenticated user
        cursor.execute("SELECT userID FROM todo_app WHERE id = %s", (todo_id,))
        todo = cursor.fetchone()

        if not todo:
            return jsonify({"error": "Todo not found"}), 404

        if todo[0] != user_id:
            return jsonify({"error": "You do not have permission to delete this todo"}), 403

        # Delete the todo item
        cursor.execute("DELETE FROM todo_app WHERE id = %s", (todo_id,))
        connection.commit()

        return jsonify({"message": "Todo deleted successfully"}), 200

    except psycopg2.Error as e:
        print("Error while deleting todo:", e)
        return jsonify({"error": "Failed to delete todo"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()
            
# Admin-only endpoint
@app.route('/admin', methods=['GET'])
@admin_required
def admin_endpoint(user_info):
    return jsonify({"message": "Welcome, admin!"}), 200

@app.route("/test", methods=["GET"])
def test():
    return jsonify({"message": "Test successful"}), 200
# get all todos by admin
@app.route('/admin/todos', methods=['GET'])
@admin_required
def get_all_todos(user_info):
    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM todo_app")
        todos = cursor.fetchall()

        todos_list = []
        for todo in todos:
            todo_dict = {
                "todo_id": todo[0],
                "userID": todo[1],
                "description": todo[2],
                "addingDate": todo[3].strftime('%Y-%m-%d'),
                "achieved": todo[4]
            }
            todos_list.append(todo_dict)

        return jsonify({"todos": todos_list}), 200

    except psycopg2.Error as e:
        print("Error while getting todos:", e)
        return jsonify({"error": "Failed to get todos"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()
# delete any todo by admin by id
@app.route('/admin/todos/<int:todo_id>', methods=['DELETE'])
@admin_required
def admin_delete_todo(user_info, todo_id):
    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        cursor.execute("SELECT id FROM todo_app WHERE id = %s", (todo_id,))
        todo = cursor.fetchone()

        if not todo:
            return jsonify({"error": "Todo not found"}), 404

        cursor.execute("DELETE FROM todo_app WHERE id = %s", (todo_id,))
        connection.commit()

        return jsonify({"message": "Todo deleted successfully"}), 200

    except psycopg2.Error as e:
        print("Error while deleting todo:", e)
        return jsonify({"error": "Failed to delete todo"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
