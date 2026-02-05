import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/actions/session";

const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

export default async function proxy(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const isPublicRoutes: boolean = publicRoutes.includes(currentPath);
  const cookie = req.cookies.get("session")?.value;

  const session = await decrypt(cookie);
  if (!isPublicRoutes && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (isPublicRoutes && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next\public|login|register|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css)).*)",
  ],
};
