import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicPath = path === "/login" || path === "/signup" || path === "/"
    const tokenValue = request.cookies.get("token")?.value || ""
    const adminPath = path === "/dashboard"
    const userPath = path === "/profile"
    const userTokenValue = request.cookies.get("userToken")?.value || ""

    if (adminPath && !tokenValue && userTokenValue) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }

    if (publicPath && userTokenValue) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }

    if (publicPath && tokenValue) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    // if (!publicPath && !tokenValue) {
    //     return NextResponse.redirect(new URL('/', request.nextUrl))
    // }

    if (adminPath && !tokenValue) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (userPath && !userTokenValue) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/dashboard",
        "/login",
        "/signup",
        "/profile"
    ]
}