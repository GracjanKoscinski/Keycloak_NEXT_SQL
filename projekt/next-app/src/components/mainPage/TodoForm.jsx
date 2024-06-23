import React from 'react';

const TodoForm = ({ newTodoDescription, setNewTodoDescription, handleAddTodo }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
            <input
                type="text"
                value={newTodoDescription}
                onChange={(e) => setNewTodoDescription(e.target.value)}
                placeholder="Enter new todo description"
                className="border p-2 w-full"
            />
            <button
                onClick={handleAddTodo}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Todo
            </button>
        </div>
    );
};

export default TodoForm;
