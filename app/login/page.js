import React from 'react';
import { getSession } from '@/auth';
import LoginCard from '@/components/auth/login-card';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getSession();

    if (session) redirect('/dashboard');

    return (
        <div className='w-screen flex items-center justify-center mt-16 p-2'>
            <LoginCard />
        </div>
    )
}