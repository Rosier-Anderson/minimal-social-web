import React from "react";
import {ProfileRing} from "../../../components/global/ProfileRing";
import Image from "next/image";

export default function ThreadAuthor() {
  return (
    <div className="">
      <div className="flex items-start justify-between  ">
        <ProfileRing innerInnerClassName="bg-white">
          <figure className="rounded-full overflow-hidden">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=sjfg"
              width={45}
              height={45}
              alt="User picture"
              loading="lazy"
              className=""
            />
          </figure>
        </ProfileRing>
      </div>
      {/*  */}
      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <span className="  bg-neutral-200 w-0.5 h-8"></span>
        <div className="flex items-start justify-between  ">
          <ProfileRing innerInnerClassName="bg-white">
            <figure className="rounded-full overflow-hidden">
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=sjfg"
                width={20}
                height={20}
                alt="User picture"
                loading="lazy"
                className=""
              />
            </figure>
          </ProfileRing>
        </div>
      </div>
    </div>
  );
}
