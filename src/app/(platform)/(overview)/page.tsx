import { Suspense } from "react";
import ThreadList from "./ThreadList";

export default async function Page() {
  return (
    <main className=" min-w-md sm:w-2xl   border border-gray-300 bg-white rounded-xl overflow-auto no-scrollbar scroll-smooth ">
      <section className="flex flex-col justify-between gap-4">
        <Suspense fallback={<div className="p-4">Loading threads...</div>}>
          <ThreadList />
        </Suspense>
      </section>
    </main>
  );
}
