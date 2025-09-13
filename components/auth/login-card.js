"use client";

import React from 'react';
import { authClient } from '@/lib/auth-client';

export default function LoginCard() {
    const signinWithGithub = async () => await authClient.signIn.social({
        callbackURL: "/dashboard",
        provider: "github",
    });

    const signinWithGoogle = async () => await authClient.signIn.social({
        callbackURL: "/dashboard",
        provider: "google",
    });

    return (
        <div>
            <h1>Login</h1>
            <button onClick={signinWithGithub}>Sign in with GitHub</button>
            <button onClick={signinWithGoogle}>Sign in with Google</button>
        </div>
    )
}