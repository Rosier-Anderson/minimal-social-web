import { HomeIcon } from "@/src/assets/icons";
import Image from "next/image";

export default function MainLayout() {
  return (
    <div className="">
      <main className="">
        <HomeIcon isFilled={true} />
      </main>
    </div>
  );
}
