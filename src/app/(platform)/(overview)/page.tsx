import { FakeData } from "@/src/fakedata";
import { getSession } from "@/src/lib/actions/session";
import { fetchUserById } from "@/src/lib/data/users-data";

import Post from "@/src/ui/(platform)/_components/Post";

export default async function Page() {
  const sessionUser = getSession();
  if (!sessionUser) return null;
  const data2 = await fetchUserById(8);
  console.log(data2);
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
