import { HomeIcon } from "@/src/assets/icons";
import Image from "next/image";
import Sidebar from "../_components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
            Coming Soon
          </h1>
          <p className="text-white text-lg mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </main>
    </div>
  );
}
