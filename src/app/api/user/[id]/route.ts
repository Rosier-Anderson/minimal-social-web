import getDatabaseClient from "@/src/db/turso";
import { NextRequest, NextResponse } from "next/server";
type PageProps = {
  params: Promise<{ id: string }>;
};
export async function GET(req: NextRequest, { params }: PageProps) {
  const { id } = await params;
  const client = await getDatabaseClient();
  const { rows } = await client.execute("SELECT * FROM users WHERE id = ?", [
    id,
  ]);
  if (rows.length < 0) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const user = rows;
  return NextResponse.json(user);
}
