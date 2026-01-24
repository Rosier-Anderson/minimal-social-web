

// import { cookies } from "next/headers";
// import { decrypt } from "../lib/actions/session";
// import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
// import { JWTPayload } from "jose";
// type SessionPayload = {
//   userId: string;
//   username: string;
//   expiresAt: number;
//   iat: number;
//   exp: number;
// };
// type cookieProps = {
//   cookie: RequestCookie;
// };
// export async function useSession() {
//   const cookie = (await cookies()).get("session")?.value;
//   const session = await decrypt(cookie);
//   return session;
// }
