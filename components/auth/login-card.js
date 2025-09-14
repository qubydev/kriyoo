"use client"

import React from "react";
import { authClient } from "@/lib/auth-client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { APP_NAME } from "@/lib/config";
import { Separator } from "../ui/separator";

export default function LoginCard() {
    const signinWithGithub = async () =>
        await authClient.signIn.social({
            callbackURL: "/dashboard",
            provider: "github",
        });

    const signinWithGoogle = async () =>
        await authClient.signIn.social({
            callbackURL: "/dashboard",
            provider: "google",
        });

    return (
        <Card className="w-full max-w-sm rounded-lg border border-border bg-card shadow-lg">
            <CardHeader>
                <CardTitle className="text-pretty text-2xl font-semibold leading-snug">
                    <span className="block text-muted-foreground">
                        Welcome back to {APP_NAME}!
                    </span>
                    Sign in to continue
                </CardTitle>
                <CardDescription className="hidden">
                    Choose one of the following sign-in methods to login.
                </CardDescription>
            </CardHeader>

            <CardContent className="mt-4 space-y-3 px-8">
                <Button
                    onClick={signinWithGoogle}
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full flex items-center gap-3"
                >
                    <FaGoogle className="h-4 w-4 text-red-500" />
                    <span>Continue with Google</span>
                </Button>

                <Button
                    onClick={signinWithGithub}
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full flex items-center gap-3"
                >
                    <FaGithub className="h-4 w-4" />
                    <span>Continue with GitHub</span>
                </Button>
            </CardContent>
            <Separator />
            <CardFooter>
                <p className="text-sm text-muted-foreground">
                    By signing in, you agree to our Terms & Privacy Policy.
                </p>
            </CardFooter>
        </Card>
    );
}
