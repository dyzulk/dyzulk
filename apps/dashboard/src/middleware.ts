import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Fast cookie check in middleware (real validation happens in Server Component)
  const hasSession = request.cookies.has("session_id");

  const isAuthPage = path === "/login" || path === "/verify";

  if (!hasSession && !isAuthPage) {
    // Redirect to login page if unauthenticated
    const loginUrl = new URL("/login", request.nextUrl.origin);
    // Keep target path for redirect after login if desired, or just redirect
    return NextResponse.redirect(loginUrl);
  }

  if (hasSession && isAuthPage) {
    // Redirect authenticated users trying to access login/verify to homepage
    return NextResponse.redirect(new URL("/", request.nextUrl.origin));
  }

  return NextResponse.next();
}

// Protect all paths except static files, api routes, and public assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
