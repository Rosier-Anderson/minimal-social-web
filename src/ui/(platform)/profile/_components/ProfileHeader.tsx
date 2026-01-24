import { deleteSession } from "@/src/lib/actions/session";
import { ProfileRing } from "@/src/ui/components/global/ProfileRing";
import Image from "next/image";
import { redirect } from "next/navigation";
type ProfileHeaderProps = {
  username: string;
};
export default function ProfileHeader() {
  return (
    <>
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
        <p className="font-semibold">Anderson Rosier</p>

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
