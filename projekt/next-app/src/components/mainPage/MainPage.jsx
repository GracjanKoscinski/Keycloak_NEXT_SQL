"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const MainPage = () => {
    const { data: session, status } = useSession();
    const [todos, setTodos] = useState([]);
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            if (session && session.accessToken) {
                const token = session.accessToken;
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                try {
                    const response = await axios.get('http://localhost:5000/todosOfUser', config);
                    setTodos(response.data.todos);
                } catch (error) {
                    setError('Error: ' + (error.response ? error.response.statusText : error.message));
                }
            }
        };

        fetchTodos();
    }, [session]);

    const handleAddTodo = async () => {
        if (!newTodoDescription.trim()) {
            setError('Todo description is required');
            return;
        }

        try {
            const token = session.accessToken;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.post('http://localhost:5000/todos', { description: newTodoDescription }, config);
            // Fetch updated todos after adding a new one
            const response = await axios.get('http://localhost:5000/todosOfUser', config);
            setTodos(response.data.todos);
            // Clear the description field after adding the todo
            setNewTodoDescription('');
            setError(null);
        } catch (error) {
            setError('Error: ' + (error.response ? error.response.statusText : error.message));
        }
    };

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <TodoForm
                newTodoDescription={newTodoDescription}
                setNewTodoDescription={setNewTodoDescription}
                handleAddTodo={handleAddTodo}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                session={session}
                setError={setError}
            />
        </div>
    );
};

export default MainPage;
