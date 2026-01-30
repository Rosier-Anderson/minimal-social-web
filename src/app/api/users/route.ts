import getDatabaseClient from "@/src/db/turso";
import {NextResponse} from "next/server";

export async function GET() {
  const client = await getDatabaseClient();
  const users = await client.execute(
    `SELECT id, username,email, avatar  FROM users`,
  );
  return NextResponse.json(users.rows);
}

export async function POST(request: Request) {
  const client = await getDatabaseClient();
  const body = await request.json();
  await client.execute(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [body.username, body.email, body.password],
  );
  return NextResponse.json({success: true});
}
