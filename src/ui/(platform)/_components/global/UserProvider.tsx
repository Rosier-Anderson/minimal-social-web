// components/UserProvider.tsx
"use client";

import { createContext, ReactNode, useContext } from "react";
import z from "zod";

export const CurrentUserSchema = z.object({
  userId: z.string(),
  username: z.string(),
  avatar: z.string().nullable(),
});

export type CurrentUserProps = z.infer<typeof CurrentUserSchema>;

const UserContext = createContext<CurrentUserProps>({
  userId: "",
  username: "",
  avatar: "",
});
export default function UserProvider({
  currentUser,
  children,
}: {
  currentUser: CurrentUserProps;
  children: ReactNode;
}) {
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(UserContext);
}
