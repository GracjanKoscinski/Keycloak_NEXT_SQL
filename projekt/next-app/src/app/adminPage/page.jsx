"use client";
import { useSession } from 'next-auth/react';
import AdminPage from '@/components/adminPage/AdminPage';
export default function Public() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
        <div>Loading...</div>
      </div>
    );
  }

  if (session && session.roles.includes('admin')) {
    return (
      <AdminPage />
  );
  }

  return (
    <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
      <div>You are unauthorized to see contents of this page</div>
    </div>
  );
}
