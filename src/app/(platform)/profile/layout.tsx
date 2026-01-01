import ProfileLinks from "@/src/ui/(platform)/profile/_components/profile-links";
import ProfileHeader from "@/src/ui/(platform)/profile/_components/ProfileHeader";
import { revalidatePath } from "next/cache";
import React from "react";

export default async function ProfileLayout({
  children,
  tabs,
}: 
{
  children: React.ReactNode;
  tabs: React.ReactNode;
 
}) {
  return (
     <div className="flex flex-col gap-6">
          <section className="profile flex ">
            <ProfileHeader />
          </section>
    
          <section className="w-full ">
            <ProfileLinks />
          </section>
      <section className="overflow-auto no-scrollbar scroll-smooth">
        {children}
      </section>
        </div>
  );
}
