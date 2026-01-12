"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
type SessionPayload = {
  sessionUserId: number;
  expiresAt: number;
};
export default async function createSession(sessionUserId: number) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const session = await encrypt({ sessionUserId, expiresAt });
  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session?: string) {
  if (!session) {
    return null;
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
