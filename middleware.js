import { NextResponse } from "next/server";
import { getSession } from "./auth";

export async function middleware(request) {
    const session = await getSession();
    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};