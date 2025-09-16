import React from 'react';
import { APP_NAME } from '@/lib/config';

export default function Footer() {
    return (
        <footer className='w-full h-16 flex items-center justify-center border-t mt-auto'>
            <p>© 2024 {APP_NAME}. All rights reserved.</p>
        </footer>
    )
}