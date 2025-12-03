import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <div className="relative ">
      <Image
        className="w-10 h-10 rounded-full text-white"
        src="/images/profile2.png"
        width={100}
        height={100}
        alt="avatar profile"
      />
    </div>
  );
}
