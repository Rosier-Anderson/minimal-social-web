"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/utils";
import { sideNavTabs } from "@/src/constants";
type SidebarProps = React.HTMLAttributes<HTMLElement>;
const Sidebar = ({ className }: SidebarProps) => {
  const lastTab = 5;
  return (
    <div
      className={cn(
        "flex  justify-center bg-black  sm:py-16",
        className
      )}
    >
      <nav className=" flex items-center justify-between  sm:flex-col text-white p-1 w-sm h-full ">
        <div className="hidden md:block">
          <Logo  />
        </div>
        <div className="flex sm:flex-col justify-between items-center w-sm sm:w-full sm:h-[350px] ">
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
        })}
        <div className="sm:hidden"></div>
        </div>
      
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
