import type {Metadata} from "next";
import "../styles/globals.css";
import {poppins} from "../ui/fonts";
import UserProvider from "../ui/(platform)/_components/global/UserProvider";
import {createCurrentUser} from "../lib/actions/session";

export const metadata: Metadata = {
  title: "Minimal-social",
  description: "A mini social app inspired by Instagram",

  icons: [
    {
      url: "/logo-light.png",
      href: "/public/images/logo-light.png",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await createCurrentUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-background`}>
        <UserProvider currentUser={user}>{children}</UserProvider>
      </body>
    </html>
  );
}
