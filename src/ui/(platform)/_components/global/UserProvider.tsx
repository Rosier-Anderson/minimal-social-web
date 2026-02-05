// components/UserProvider.tsx
"use client";

import {createContext, ReactNode, useContext} from "react";


type CurrentUserProps = {
  userId: string;
  username: string;
  avatar: string | null;
};

const UserContext = createContext<CurrentUserProps | undefined>(undefined);
export default function UserProvider({
  currentUser,
  children,
}: {
  currentUser: CurrentUserProps;
  children: ReactNode;
}) {
  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}

export function useCurrentUser() {
  return useContext(UserContext);
}
