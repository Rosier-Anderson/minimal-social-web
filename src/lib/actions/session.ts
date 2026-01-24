"use server";

import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
if (!process.env.SESSION_SECRET) {
  throw new Error("env SESSION_SECRET is not defined");
}

const encodedKey = new TextEncoder().encode(secretKey);

type CreateSessionPayload = {
  userId: string;
  username: string;
  avatar: string;
  expiresAt: number;
};
type PublicSession = Omit<CreateSessionPayload, "expiresAt">;

export default async function createSession(
  userId: string,
  username: string,
  avatar: string
) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const session = await encrypt({ userId, username, avatar, expiresAt });
  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}
export async function getSession() {
  const cookie = (await cookies()).get("session")?.value;
  const payload = (await decrypt(cookie)) as PublicSession | undefined;
  if (!payload) return null;
  const { userId, username, avatar } = payload;
  return { userId, username, avatar };
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
export async function encrypt(payload: CreateSessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session?: string) {
  if (!session) {
    throw new Error("No session token provided");
  }
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session", error);
  }
}
