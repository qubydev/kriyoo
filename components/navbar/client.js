"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import LogoutButton from '../auth/logout-button';

export default function NavbarClient() {
    const { data } = authClient.useSession();
    const session = data?.session;
    const user = data?.user;
    const pathname = usePathname();

    const isAuthenticated = !!session;

    return isAuthenticated ? (
        <>
            {pathname === '/' ? (
                <Link href="/dashboard">
                    <Button>Dashboard</Button>
                </Link>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger className="rounded-full">
                        <Avatar>
                            <AvatarImage src={user?.image || undefined} />
                            <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="p-2">
                            <h2 className="font-semibold">{user?.name || user?.email}</h2>
                            <p className="text-xs text-muted-foreground max-w-42 truncate">
                                {user.email}
                            </p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="p-0 m-0">
                            <LogoutButton />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </>
    ) : (
        <>
            {pathname === '/' && (
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            )}
        </>
    )
}