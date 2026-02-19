import getDatabaseClient from "@/src/db/turso";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await getDatabaseClient();
  const Threads = await client.execute("SELECT * FROM threads");
 const data  = await client.executeMultiple("SELECT * FROM threads");
 console.log(data)
  return NextResponse.json(Threads.rows);
}

export async function POST(request: Request) {}
