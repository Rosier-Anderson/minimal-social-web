"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/utils";
import { usePathname } from "next/navigation";
import { sideNavTabs } from "@/src/constants";
import { GoPerson } from "react-icons/go";
import { ProfileRing } from "../../components/global/ProfileRing";

type SidebarProps = React.HTMLAttributes<HTMLElement>;

const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();
  const isProfileActive = pathname === "/profile";
  return (
    <div
      className={cn(
        "flex justify-center bg-black sm:py-16 w-[50px]",
        className
      )}
    >
      {" "}
      <aside>
        <nav className=" flex items-center justify-between sm:flex-col text-white p-1 w-sm sm:w-auto  h-full ">
          <div className="hidden md:block">
            <Logo />
          </div>
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
                    "bg-neutral-800  rounded ":
                        tab.name === "CreateThread",
                    })}
                  />
                </Link>
              );
            })}
            <div className="sm:hidden"></div>
          </div>

          <div className="  ">
            <Link href="/profile" className="">
              <ProfileRing
                innerClassName={cn("bg-text-secondary", {
                  "bg-white": isProfileActive,
                })}
              >
                <GoPerson className="size-6" />
              </ProfileRing>
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
};

const Logo = () => {
  return (
    <>
      {" "}
      <figure className="relative w-10 h-10">
        <Link href="/" className="">
          <Image
            className="rounded"
            src={`/images/logo-dark.png`}
            alt="App logo"
            fill
          />
        </Link>
      </figure>
    </>
  );
};

export default Sidebar;
