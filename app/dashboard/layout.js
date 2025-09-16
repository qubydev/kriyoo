import React from 'react';
import { getSession } from '@/auth';

export default async function Layout({ children }) {
    const session = await getSession();

    if (!session) redirect('/login');

    return (
        <>
            {children}
        </>
    )
}