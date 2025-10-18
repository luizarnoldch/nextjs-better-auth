import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  console.log("✅ middleware disparado en:", request.nextUrl.pathname);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { pathname } = request.nextUrl;
  if (session && (pathname === "/sign-in" || pathname === "/sign-up")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!session && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/sign-in", "/sign-up", "/dashboard/:path*"],
};
