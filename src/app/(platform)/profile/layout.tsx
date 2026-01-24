import { getSession } from "@/src/lib/actions/session";
import ProfileLinks from "@/src/ui/(platform)/profile/_components/profile-links";
import ProfileHeader from "@/src/ui/(platform)/profile/_components/ProfileHeader";
import React from "react";
type PageProps = {
  params: Promise<{ profile_username: string }>;
};
export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: PageProps;
}) {
  const session = "@anderson";
  // const sessionUser = await getSession();

  return (
    <div className="flex flex-col gap-6 pt-4">
      <section className="profile flex ">
        <ProfileHeader />
      </section>

      <section className="w-full ">
        <ProfileLinks />
      </section>
      <section className="overflow-auto no-scrollbar scroll-smooth border border-background-primary bg-white rounded-2xl">
        {children}
      </section>
    </div>
  );
}
