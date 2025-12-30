import Image from "next/image";
import React from "react";

export default function ProfileHeader() {
  return (
    <>
      {" "}
      <div className="profile-picture">
        <figure className=" relative rounded-full overflow-hidden bg-gray-200  size-16 sm:size-[120px]">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=re"
            alt="Profile picture"
            fill
          />
        </figure>
      </div>
      <div className="profile-info flex justify-center flex-col sm:gap-4 ">
        <div className="font-semibold">
          <p>Anderson Rosier</p>
        </div>
        <div className="flex gap-2">
          <span>0 followers</span>
          <span>0 following</span>
        </div>
        <div className="">
          <p>im just a programmer by day, hacker by night.</p>
        </div>
      </div>
      <div className="edit-profile-btn flex flex-col items-start  sm:py-2 **:cursor-pointer">
        <span>
          <button>Edit profile</button>
        </span>
      </div>
    </>
  );
}
