"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import { sideNavTabs } from "@/src/constants";
type SidebarProps = React.HTMLAttributes<HTMLElement>;
const Sidebar = ({ className }: SidebarProps) => {
  const lastTab = 5;
  return (
    <div
      className={cn(
        "flex items-center justify-center h-12 sm:h-full bg-black",
        className
      )}
    >
      <nav className=" flex items-center justify-between sm:flex-col text-white p-1 sm:min-h-96">
        <div className="hidden md:block">
          <Logo  />
        </div>
        {sideNavTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link
              href={tab.href}
              className={cn(
                "flex items-center  justify-center cursor-pointer",
                {
                  hidden: tab.id == lastTab,
                }
              )}
              key={tab.id}
            >
              <Icon />
            </Link>
          );
        })}{" "}
        <div className="">
          <Profile />
        </div>
      </nav>
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
const Profile = () => {
  const Icon = sideNavTabs[4].icon;
  return (
    <Link href="/profile">
      <Icon className="" />
    </Link>
  );
};

export default Sidebar;
