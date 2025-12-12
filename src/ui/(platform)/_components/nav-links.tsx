"use client";
import { linksTab } from "@/src/constants";
import { cn } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className=" flex items-center justify-center gap-4 bg-gray-200 rounded-lg w-xs mx-auto h-12 p-2 ">
      {linksTab.map((link) => {
        const isActive =
          pathname.includes(link.name.toLocaleLowerCase()) 

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
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
