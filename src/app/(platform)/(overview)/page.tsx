import { FakeData } from "@/src/fakedata";
import { fetchThread } from "@/src/lib/data/threads-data";
import Post from "@/src/ui/(platform)/_components/Post";

export default async function Page() {
const thread = await fetchThread();
console.log(thread)
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
