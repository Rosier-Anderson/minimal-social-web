import { cn } from "@/src/utils";
import React from "react";
type ProfileRingPorops = {
  children: React.ReactNode;
  innerClassName?: string;
  innerInnerClassName?: string;
};
export const ProfileRing = ({
  children,
  innerClassName,
  innerInnerClassName
}: ProfileRingPorops) => {
  return (
    <div className={cn("bg-text-primary rounded-full p-0.5  " , innerClassName)}>
      <span className={cn(" bg-black rounded-full block overflow-hidden", innerInnerClassName)}>
        {children}
      </span>
    </div>
  );
};
