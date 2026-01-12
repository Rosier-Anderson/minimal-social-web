import ProfileLinks from "@/src/ui/(platform)/profile/_components/profile-links";
import ProfileHeader from "@/src/ui/(platform)/profile/_components/ProfileHeader";
import React from "react";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data.rows);
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
