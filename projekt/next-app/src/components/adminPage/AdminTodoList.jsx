import React from 'react';
import AdminTodoItem from './AdminTodoItem';

const AdminTodoList = ({ todos, setTodos, session, setError }) => {
    return (
        <div className="w-full max-w-md mt-4">
            {todos && todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <AdminTodoItem
                            key={todo.todo_id}
                            todo={todo}
                            setTodos={setTodos}
                            todos={todos}
                            session={session}
                            setError={setError}
                        />
                    ))}
                </ul>
            ) : (
                <div className="text-center">No todos found</div>
            )}
        </div>
    );
};

export default AdminTodoList;
