"use client";

import { profileLinksTabs } from "@/src/constants";
import { cn } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLinks() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between gap-2 border-b border-border-primary text-text-secondary">
      {profileLinksTabs.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              "gap-2 pb-2 relative",
              isActive && "font-semibold text-black"
            )}
          >
            {link.name}
            {isActive && (
              <span className="absolute left-0 -bottom-px h-0.5 w-full bg-black" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
