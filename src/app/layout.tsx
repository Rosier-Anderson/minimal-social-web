import type { Metadata } from "next";
import "../styles/globals.css";
import { poppins } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Minimal-social",
  description: "A mini social app inspired by Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
