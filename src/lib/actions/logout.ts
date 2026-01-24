"use server";

import { redirect } from "next/navigation";
import { deleteSession } from "./session";

export default async function logout() {
  await deleteSession();
  redirect("/login");
}
