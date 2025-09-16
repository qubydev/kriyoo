import React from 'react';
import { getSession } from '@/auth';
import { redirect } from 'next/navigation';
import { APP_NAME } from '@/lib/config';
import LoginButtons from '@/components/auth/login-buttons';
import Footer from '@/components/footer';
import Image from 'next/image';

export default async function Page() {
    const session = await getSession();

    if (session) redirect('/dashboard');

    return (
        <div className='h-[calc(100dvh-var(--spacing)*14)] w-screen flex flex-col'>
            <div className='flex-1 flex gap-12 pt-18 md:pt-24'>
                <div className='flex-1 justify-end hidden md:flex'>
                    <Image
                        alt="Login Illustration"
                        height={500}
                        width={500}
                        src="/login-illustration.png"
                        className='size-82 lg:size-100 mb-14'
                    />
                </div>
                <div className='flex-1 flex justify-center md:justify-start'>
                    <div className='max-w-sm flex flex-col gap-2 items-center'>
                        <h1 className='text-5xl font-bold text-primary text-center mb-8'>{APP_NAME}</h1>
                        <ul className='text-sm flex flex-col gap-2 italic'>
                            <li className='font-semibold text-muted-foreground'>&rarr; Uploaded images are never stored.</li>
                            <li className='font-semibold text-muted-foreground'>&rarr; Use only images that belong to you.</li>
                            <li className='font-semibold text-muted-foreground'>&rarr; No sensitive data should be included.</li>
                        </ul>
                        <LoginButtons />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}