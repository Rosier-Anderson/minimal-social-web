import type { Metadata } from "next";
import "../styles/globals.css";
import { poppins } from "../ui/fonts/fonts";
export const metadata: Metadata = {
  title: "Minimal-social",
  description: "A mini social app inspired by Instagram",

  icons: [
    {
      url: "/logo-light.png",
      href: "/public/logo-light.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //  // ${poppins.className}
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
