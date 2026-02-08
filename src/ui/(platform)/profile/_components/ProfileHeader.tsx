"use client";
import { ProfileRing } from "@/src/ui/components/global/ProfileRing";
import Image from "next/image";
import { useCurrentUser } from "../../_components/global/UserProvider";
import { useState } from "react";

type ProfileHeaderProps = {
  username: string;
  avatar: string | null;
};
type ProfileAvatarProps = Pick<ProfileHeaderProps, "avatar">;
export default function ProfileHeader() {
  const [previewAvatar, setPreviewAvatar] = useState<ProfileAvatarProps | null>(
    null
  );

  const CurrentUser: ProfileHeaderProps = useCurrentUser();
  return (
    <>
      <div className="profile-picture ">
        <ProfileRing ringClassName="bg-gray-200">
          <figure className="relative rounded-full bg-white overflow-hidden  size-16 sm:size-[100px]">
            <Image src={"/images/profile.png"} alt="Profile picture" fill />
          </figure>
        </ProfileRing>
      </div>
      <div className="profile-info  flex justify-center flex-col sm:gap-4 h-[80%] m-auto">
        <p className="font-semibold">{CurrentUser.username}</p>

        <div className="flex gap-2">
          <strong>0</strong>
          <span className="text-text-secondary ">followers</span>
          <strong>1 </strong>
          <span className="text-text-secondary ">following </span>
        </div>

        <p className="text-text-secondary ">
          im just a programmer by day, hacker by night.
        </p>
      </div>
      <div className=" edit-profile-btn flex flex-col justify-between **:cursor-pointer">
        <button className="bg-text-primary  rounded-md p-1.5 text-sm font-semibold text-black">
          Edit profile
        </button>
        burger menu go here
        <button className="text-red-500 bg-text-primary  rounded-md p-1.5 text-sm font-semibold">
          Log out
        </button>
      </div>
    </>
  );
}
