import React from 'react';
import axios from 'axios';

const AdminTodoItem = ({ todo, setTodos, todos, session, setError }) => {
    const handleDeleteTodo = async (todo_id) => {
        try {
            const token = session.accessToken;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.delete(`http://localhost:5000/admin/todos/${todo_id}`, config);

            // Remove the deleted todo from the local state
            setTodos(todos.filter(t => t.todo_id !== todo_id));
            setError(null);
        } catch (error) {
            setError('Error: ' + (error.response ? error.response.statusText : error.message));
        }
    };

    return (
        <li className="p-4 mb-2 rounded shadow-md bg-blue-200">
            <p>Description: {todo.description}</p>
            <p>Added on: {new Date(todo.addingDate).toLocaleDateString()}</p>
            <p>Status: {todo.achieved ? 'Achieved' : 'Not Achieved'}</p>
            <p>Submitted by: {todo.userID}</p>
            <button
                onClick={() => handleDeleteTodo(todo.todo_id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
                Delete
            </button>
        </li>
    );
};

export default AdminTodoItem;
