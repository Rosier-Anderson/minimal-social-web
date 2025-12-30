import { revalidatePath } from "next/cache";
import React from "react";

export default async function ProfileLayout({
  children,
  tabs,
}: // posts,
// likedpost,
// repost,
{
  children: React.ReactNode;
  tabs: React.ReactNode;
  // posts: React.ReactNode;
  // likedpost: React.ReactNode;

  // repost: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{tabs}</div>
    </div>
  );
}
