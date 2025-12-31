"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/utils";

import { GoHome, GoPerson, GoPlus } from "react-icons/go";
import { BsSendPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { LiaSearchSolid } from "react-icons/lia";


type SidebarProps = React.HTMLAttributes<HTMLElement>;
const Sidebar = ({ className }: SidebarProps) => {
   const pathname = usePathname()
  const sideNavTabs = [
    { id: 1, name: "Home", href: "/", icon: GoHome  },
    {
      id: 2,
      name: "Conversation",
      href: "/conversation",
      icon: GoPlus,
    },
    { id: 3, name: "Plus", href: "/search", icon:   LiaSearchSolid },
    { id: 4, name: "Like", href: "/like", icon: FaRegHeart  },
  ];

  return (
    <div className={cn("flex  justify-center bg-black  sm:py-16", className)}>
      {" "}
      <aside>
        <nav className=" flex items-center justify-between  sm:flex-col text-white p-1 w-sm h-full ">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="flex sm:flex-col justify-between items-center w-sm sm:w-full gap-10">
            {sideNavTabs.map((tab) => {
              const TabIcon = tab.icon;
             const isActive = pathname == tab.href;
          
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={cn(
                    "flex items-center  justify-center cursor-pointer"
                  )}
                >
                  <TabIcon className={cn("size-6", {
                  "text-red-400": isActive 
                  })}/>
                </Link>
              );
            })}
            <div className="sm:hidden"></div>
          </div>

          <div className="">
            <Profile />
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
const Profile = ({user}) => {
  return (
    <Link href="/profile" className="">
      <span className="">
         <GoPerson  className="size-6"/>
      </span>
     
    </Link>
  );
};

export default Sidebar;
