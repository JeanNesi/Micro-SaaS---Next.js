import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES } from "./lib/routes";

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const token = cookies.get("authjs.session-token");
  const pathname = nextUrl.pathname;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
  }

  if (pathname.includes("/home") && !token) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], nextUrl));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|service-worker.js).*)",
  ],
};
