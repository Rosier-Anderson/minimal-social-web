"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/utils";
import { usePathname } from "next/navigation";
import { sideNavTabs } from "@/src/constants";
import { ProfileRing } from "../../components/global/ProfileRing";
import { useCurrentUser } from "./global/UserProvider";

type SidebarProps = React.HTMLAttributes<HTMLElement>;

const Sidebar = ({ className }: SidebarProps) => {
  const CurrentUser = useCurrentUser();
  const pathname = usePathname();
  const isProfileActive = pathname === "/profile";
  return (
    <aside
      className={cn(
        "flex justify-center bg-black sm:py-16 w-[50px]",
        className
      )}
    >
      <nav className="flex items-center justify-between sm:flex-col text-white p-1 w-sm sm:w-auto  h-full ">
        <Logo />

        <div className="flex  sm:flex-col justify-between items-center w-sm sm:w-full gap-10">
          {sideNavTabs.map((tab) => {
            const isActive = pathname === tab.href;
            const TabIcon = isActive ? tab.activeIcon : tab.icon;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={cn(
                  "flex items-center justify-center cursor-pointer text-text-secondary w-full"
                )}
              >
                <TabIcon
                  className={cn("size-6", {
                    "text-white ": isActive,
                    "bg-neutral-800  rounded ": tab.name === "CreateThread",
                  })}
                />
              </Link>
            );
          })}
          <div className="sm:hidden"></div>
        </div>

        <Link href="/profile" className="">
          <ProfileRing
            ringClassName={cn("bg-text-secondary", {
              "bg-white": isProfileActive,
            })}
          >
            <figure>
              <Image
                src={CurrentUser.avatar ?? "/images/profile.png"}
                alt={` ${CurrentUser.username}' profile image`}
                width={30}
                height={30}
              />
            </figure>
          </ProfileRing>
        </Link>
      </nav>
    </aside>
  );
};

const Logo = () => {
  return (
    <>
      {" "}
      <figure className="relative w-10 h-10 hidden md:block">
        <Link href="/" className="">
          <Image
            className="rounded absolute"
            src={`/images/logo-dark.png`}
            alt="App logo"
            fill
            sizes="auto"
          />
        </Link>
      </figure>
    </>
  );
};

export default Sidebar;
