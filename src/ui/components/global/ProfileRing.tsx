import { cn } from "@/src/utils";
import React from "react";
type ProfileRingPorops = {
  children: React.ReactNode;
  ringClassName?: string;
  contentClassName?: string;
};
export const ProfileRing = ({
  children,
  ringClassName,
  contentClassName,
}: ProfileRingPorops) => {
  return (
    <div className={cn("bg-text-primary rounded-full p-0.5  ", ringClassName)}>
      <span
        className={cn(
          " bg-black rounded-full block overflow-hidden",
          contentClassName
        )}
      >
        {children}
      </span>
    </div>
  );
};
