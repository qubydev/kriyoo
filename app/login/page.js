import React from 'react';
import { getSession } from '@/auth';
import LoginCard from '@/components/auth/login-card';

export default async function Page() {
    const session = await getSession();

    if (session) redirect('/dashboard');


    return (
        <div>
            <LoginCard />
        </div>
    )
}