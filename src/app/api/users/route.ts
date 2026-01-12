// src/app/api/users/route.ts

import { turso } from "@/src/db/turso";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await turso.execute("SELECT * FROM users");
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  await turso.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [body.username, body.email, body.password]
  );
  return NextResponse.json({ success: true });
}
