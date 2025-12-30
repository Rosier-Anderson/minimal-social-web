import { linksProfileTabs } from "@/src/constants";
import Link from "next/link";

export default function ProfileLinks() {
  return (
    <div className=" flex justify-between gap-2 border-b border-gray-400">
      {linksProfileTabs.map((link) => {
        return (
          <Link key={link.id} className=" gap-2" href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
