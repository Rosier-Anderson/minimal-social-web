"use client";

import { notificationLinksTabs } from "@/src/constants";
import { cn } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NotificationHeader = () => {
  const pathname = usePathname();
  return (
    <header className=" ">
      <strong className=" w-full text-center">Notification</strong>
      <nav className="flex items-center justify-center gap-4  bg-text-primary rounded-xl m-2 py-2 px-4">
        {notificationLinksTabs.map((link) => {
          const ActiveLink = pathname === link.href;
          const TabIcon = pathname === link.href ? link.activeIcon : link.icon;

          return (
            <Link
              className={cn(
                "flex items-center justify-center gap-0.5 text-text-secondary",
                {
                  "text-black font-semibold": ActiveLink,
                }
              )}
              key={link.id}
              href={link.href}
            >
              {TabIcon && (
                <TabIcon
                  className={cn("", {
                    "text-black ": ActiveLink,
                  })}
                />
              )}
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
