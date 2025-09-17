import React from 'react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/config';
import UserProfile from './user-profile';
import Image from 'next/image';
import AutoShadow from './auto-shadow';

export default function Navbar() {

    return (
        <>
            <AutoShadow />
            <nav className="flex items-center gap-2 h-14 px-4 fixed top-0 left-0 w-full bg-background transition-shadow duration-200 z-10">
                <Link href="/" className='flex items-center justify-center gap-2'>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="size-8"
                    />
                    <h1 className='text-2xl font-bold text-primary'>{APP_NAME}</h1>
                </Link>
                <div className='flex-1' />
                <UserProfile />
            </nav>
        </>
    )
}