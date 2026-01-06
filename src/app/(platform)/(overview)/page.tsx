import {FakeData} from "@/src/fakedata";
import Post from "@/src/ui/(platform)/_components/Post";
import {Suspense} from "react";

export default function Page() {
  const data = FakeData;
  return (
    <main className=" min-w-md sm:w-2xl   border border-gray-300 bg-white rounded-xl overflow-auto no-scrollbar scroll-smooth ">
      <section className="flex flex-col justify-between gap-4">
        {data.map((thread) => (
          <Post key={thread.id} props={thread} />
        ))}
      </section>
    </main>
  );
}
