"use client";

import { cn } from "@/src/utils";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";

type HeaderProps = React.HTMLAttributes<HTMLElement>;
export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const hiddenRoutes = ["profile", "search", "like"];
  const hideHeader = hiddenRoutes.some((r) => pathname.includes(r));
  if (hideHeader) return null;
  return (
    <div className={cn("", className)}>
      <header className="text-sm sm:text-md font-bold ">
        <NavLinks />
      </header>
    </div>
  );
}
