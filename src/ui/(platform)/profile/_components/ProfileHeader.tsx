import { ProfileRing } from "@/src/ui/components/global/ProfileRing";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <>
      {" "}
      <div className="profile-picture ">
        <ProfileRing innerClassName="bg-gray-200">
          <figure className="relative rounded-full bg-white overflow-hidden  size-16 sm:size-[100px]">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=re"
              alt="Profile picture"
              fill
            />
          </figure>
        </ProfileRing>
      </div>
      <div className="profile-info  flex justify-center flex-col sm:gap-4 h-[80%] m-auto">
        <div className="font-semibold">
          <p>Anderson Rosier</p>
        </div>
        <div className="flex gap-2">
          <strong>0</strong>{" "}
          <span className="text-text-secondary ">followers</span>
          <strong>1 </strong>{" "}
          <span className="text-text-secondary ">following </span>
        </div>
        <div className="">
          <p className="text-text-secondary ">im just a programmer by day, hacker by night.</p>
        </div>
      </div>
      <div className="edit-profile-btn flex flex-col items-start **:cursor-pointer">
        <span className="bg-text-primary  rounded-md p-1.5 text-sm">
          <button className="font-semibold text-black" >Edit profile</button>
        </span>
      </div>
    </>
  );
}
