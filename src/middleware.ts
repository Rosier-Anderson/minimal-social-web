import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/actions/session";

const publicRoutes = ["login", "register", "forgot-password", "reset-password"];
const protectedRoutes = ["/", "notifications"];

export default async function middleware(req: NextRequest) {
  // const currentPath = req.nextUrl.pathname;
  // const isProtectedRoutes: boolean = protectedRoutes.includes(currentPath);
  // const isPublicRoutes: boolean = publicRoutes.includes(currentPath);
  // const cookie = (await cookies()).get("session")?.value;
  // const session = await decrypt(cookie);
  // if (isProtectedRoutes && !session?.userId) {
  //   return NextResponse.redirect(new URL("/login", req.nextUrl));
  // }
  // if (isPublicRoutes && session?.userId) {
  //   return NextResponse.redirect(new URL("/", req.nextUrl));
  // }
  // return NextResponse.next();
}
