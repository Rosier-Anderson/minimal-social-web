"use client";

import { linksProfileTabs } from "@/src/constants";
import { cn } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLinks() {
  const pathname = usePathname();

  return (
    <div className=" flex justify-between gap-2 border-b  border-gray-100">
      {linksProfileTabs.map((link) => {
        const isActive = pathname == link.href;
        return (
          <Link
            key={link.id}
            className={cn("gap-2", {
              "font-bold border-b": isActive,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
