"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import AdminTodoList from './AdminTodoList';

const AdminPage = () => {
    const { data: session, status } = useSession();
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            if (session && session.accessToken) {
                const token = session.accessToken;
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                try {
                    const response = await axios.get('http://localhost:5000/admin/todos', config);
                    setTodos(response.data.todos);
                } catch (error) {
                    setError('Error: ' + (error.response ? error.response.statusText : error.message));
                }
            }
        };

        fetchTodos();
    }, [session]);

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <AdminTodoList
                todos={todos}
                setTodos={setTodos}
                session={session}
                setError={setError}
            />
        </div>
    );
};

export default AdminPage;
