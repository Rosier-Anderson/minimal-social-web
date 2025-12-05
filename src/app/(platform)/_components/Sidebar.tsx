"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import { sideNavTabs } from "@/src/constants";

const Sidebar = () => {
  return (
    <div className="bg-black ">
      <div className="flex justify-center sm:justify-between pl-1.5 sm:pl-auto p-2 bg-amber-200">
        <nav className=" flex items-center justify-between text-white my-auto w-sm ">
          <Logo className="hidden md:block" />
          {sideNavTabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Link
                href={tab.href}
                className="flex items-center justify-center cursor-pointer"
                key={tab.id}
              >
               <Icon/>
              </Link>
            );
          })}{" "}
        </nav>
      </div>
    </div>
  );
};
type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>;
const Logo = ({ className }: LogoProps) => {
  return (
    <figure className="relative w-10 h-10">
      <Link href="/">
      <Image
        className={cn("rounded", className)}
        src="/images/logo-dark.png"
        alt="App logo"
        fill
      />
      </Link>
      
    </figure>
  );
};
export default Sidebar;
