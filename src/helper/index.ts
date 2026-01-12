import bcrypt from "bcrypt";

export async function HashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}
//
export async function VerifyPassword(password: string, hashPassword: string) {
  return await bcrypt.compare(password, hashPassword);
}
