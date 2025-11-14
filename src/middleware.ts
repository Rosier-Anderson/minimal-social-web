import { NextRequest } from "next/server";
import React from "react";
const publicRoutes = ["login", "register", "forgot-password", "reset-password"];
export default function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoutes: boolean = publicRoutes.includes(currentPath);
}
