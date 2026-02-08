"use client";

import Image from "next/image";
import Link from "next/link";
import { ProfileRing } from "../../components/global/ProfileRing";
import { useCurrentUser } from "./global/UserProvider";

export const ThreadProfile = () => {
  const CurrentUser = useCurrentUser();
  return (
    <div className="flex items-start justify-between gap-4 h-full ">
      <ProfileRing contentClassName="bg-white">
        <figure className="rounded-full overflow-hidden">
          <Link className="" href="">
            <Image
              src={CurrentUser.avatar ?? "/images/profile.png"}
              width={45}
              height={45}
              alt="User picture"
              loading="lazy"
              className=""
            />
          </Link>
        </figure>{" "}
      </ProfileRing>
    </div>
  );
};
