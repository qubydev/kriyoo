"use client";

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LoginButtons() {
    const [agreed, setAgreed] = useState(false);

    const handleSignin = (provider) => {
        authClient.signIn.social({
            provider,
            callbackURL: "/dashboard",
        });
    };

    return (
        <>
            <div className="flex items-center gap-2 my-4">
                <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked)}
                />
                <Label htmlFor="terms" className="font-bold">I understood and agree.</Label>
            </div>
            <Button size="lg" onClick={() => handleSignin("google")} disabled={!agreed} className="w-52 bg-red-500 hover:bg-red-400">
                <FaGoogle className="h-4 w-4" />
                Continue with Google
            </Button>
            <Button size="lg" onClick={() => handleSignin("github")} disabled={!agreed} className="w-52">
                <FaGithub className="h-4 w-4" />
                Continue with GitHub
            </Button>
        </>
    )
}