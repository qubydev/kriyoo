import React from 'react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/config';
import NavbarClient from './client';

export default function Navbar() {

    return (
        <nav className='p-4 border-b flex items-center justify-between gap-2'>
            <Link href="/">
                <h1 className='text-xl font-bold'>{APP_NAME}</h1>
            </Link>
            <NavbarClient />
        </nav>
    )
}