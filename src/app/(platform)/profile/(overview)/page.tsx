import { FakeData } from "@/src/fakedata";
import ProfileHeader from "@/src/ui/(platform)/profile/_components/ProfileHeader";
import ProfileLinks from "@/src/ui/(platform)/profile/_components/profile-links";

import Image from "next/image";

export default function Profile() {
  const data = FakeData;
  return (
    <div className="flex flex-col gap-16">
      <section className="profile flex ">
        <ProfileHeader />
      </section>

      <section className="w-full ">
        <ProfileLinks />
      </section>
    </div>
  );
}
