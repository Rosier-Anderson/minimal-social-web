"use client";
import { cn } from "@/src/utils";
import { usePathname } from "next/navigation";
import { headerLinksTab } from "@/src/constants";
import Link from "next/link";

type HeaderProps = React.HTMLAttributes<HTMLElement>;
export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const Routes = ["/", "/following", "/like"];
  const showHeader = Routes.some((r) => pathname === r);
  if (!showHeader) return null;
  return (
    <div className={cn("", className)}>
      <header className="text-sm sm:text-md font-semibold ">
        <nav className=" flex items-center justify-center gap-4 bg-text-primary rounded-lg w-xs mx-auto h-12 p-2 ">
          {headerLinksTab.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-center cursor-pointer h-10 w-72 p-2 rounded-lg",
                  {
                    "bg-white": isActive,
                  }
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}
