"use client";

import {
  ConversationIcon,
  HeartIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
} from "@/src/assets/icons";
import Image from "next/image";
import Profile from "../profile/fake-profile";
import { useDeviceCheck } from "@/src/hooks/useDeviceCheck";
const sideNavIcons = [
  {
    id: 1,
    name: <HomeIcon />,
  },
  { id: 2, name: <ConversationIcon /> },
  { id: 3, name: <PlusIcon /> },
  { id: 4, name: <HeartIcon /> },
];
const Sidebar = () => {
  const isMobile = useDeviceCheck();
  return (
    <div className="bg-black ">
      <div className="flex justify-center sm:justify-between pl-1.5 sm:pl-auto p-2">
        {isMobile ? null : <Logo />}

        <nav className=" text-white my-auto w-sm ">
          <ul className="flex items-center justify-between ">
            {sideNavIcons.map((icon) => (
              <li className="cursor-pointer" key={icon.id}>
                {icon.name}
              </li>
            ))}{" "}
            {isMobile ? <div></div> : null}
          </ul>
        </nav>

        <Profile />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <figure className="relative w-10 h-10">
      <Image
        className="rounded "
        src="/images/logo-dark.png"
        alt="App logo"
        fill
      />
    </figure>
  );
};
export default Sidebar;
