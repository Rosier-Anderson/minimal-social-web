"use client"
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavLinks() {   
    const linksTab = [
    { id: 1, name: "Feed", href: "/feed" },
    { id: 2, name: "Following", href: "/following" },
    { id: 3, name: "Like", href: "/like" },
    
  ];
  const pathname = usePathname();
  return (
<nav className=" flex items-center justify-center gap-6 bg-gray-100 rounded-lg max-w-[250px] mx-auto h-8  ">
      {linksTab.map((link) => {
     const isActive = pathname.includes(link.name.toLocaleLowerCase());
        return (
           
          <Link
            key={link.name}
            href={link.href}
             className={cn("flex items-center justify-center cursor-pointer h-6 p-2 rounded-xl", {
          "bg-white": isActive
             })}
          >
            <p className="">{link.name}</p>
          </Link>
         
        );
      })}
</nav>
  );
}