"use client";

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { IoLogOutOutline } from "react-icons/io5";

export default function LogoutButton() {
    const router = useRouter();

    const logOut = async () => await authClient.signOut({
        fetchOptions: {
            onSuccess: () => router.push('/login'),
        }
    })

    return (
        <Button className="w-full" variant="destructive" onClick={logOut}>
            <IoLogOutOutline className='text-background' />
            Logout
        </Button>
    )
}