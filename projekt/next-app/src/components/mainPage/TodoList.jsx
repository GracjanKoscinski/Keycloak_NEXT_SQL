import React from 'react';
import axios from 'axios';

const TodoList = ({ todos, setTodos, session, setError }) => {
    const handleToggleStatus = async (todo_id) => {
        try {
            const token = session.accessToken;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const response = await axios.patch(`http://localhost:5000/todos/${todo_id}/toggle`, {}, config);

            // Update the local state with the new status
            setTodos(todos.map(todo =>
                todo.todo_id === todo_id ? { ...todo, achieved: response.data.new_status } : todo
            ));
            setError(null);
        } catch (error) {
            setError('Error: ' + (error.response ? error.response.statusText : error.message));
        }
    };

    const handleDeleteTodo = async (todo_id) => {
        try {
            const token = session.accessToken;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.delete(`http://localhost:5000/todos/${todo_id}`, config);

            // Remove the deleted todo from the local state
            setTodos(todos.filter(todo => todo.todo_id !== todo_id));
            setError(null);
        } catch (error) {
            setError('Error: ' + (error.response ? error.response.statusText : error.message));
        }
    };

    return (
        <div className="w-full max-w-md mt-4">
            {todos && todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <li
                            key={todo.todo_id}
                            className={`p-4 mb-2 rounded shadow-md ${
                                todo.achieved ? 'bg-green-200' : 'bg-yellow-200'
                            }`}
                        >
                            <p>{todo.description}</p>
                            <p>Added on: {new Date(todo.addingDate).toLocaleDateString()}</p>
                            <p>Status: {todo.achieved ? 'Achieved' : 'Not Achieved'}</p>
                            <div className="flex mt-2 space-x-2">
                                <button
                                    onClick={() => handleToggleStatus(todo.todo_id)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Toggle Status
                                </button>
                                <button
                                    onClick={() => handleDeleteTodo(todo.todo_id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No todos found</div>
            )}
        </div>
    );
};

export default TodoList;
