import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { headers } from "next/headers";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    pages: {
        signIn: '/login',
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    },
});

export const getSession = async () => auth.api.getSession({
    headers: await headers()
});