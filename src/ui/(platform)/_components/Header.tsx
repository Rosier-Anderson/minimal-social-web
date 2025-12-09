
import { cn } from "@/src/utils";
import NavLinks from "./nav-links";

type HeaderProps = React.HTMLAttributes<HTMLElement>;
export default function Header({ className }: HeaderProps) {
  return (
    <div className={cn("", className)}>
      <header className="text-sm sm:text-md font-bold ">
        <NavLinks />
      </header>
    </div>
  );
}
