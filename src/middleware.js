import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const middleware = async (req) => {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET, secureCookie: process.env.NODE_ENV === "production" ? true : false });

    const { pathname } = req.nextUrl;

    // Protect dashboard and add-products routes
    if ((pathname.startsWith("/dashboard") || pathname.startsWith("/dashboard/add-products")) && !token) {
        const loginUrl = new URL("/login", req.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
};
