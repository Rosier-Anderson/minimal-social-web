import { FakeData } from "@/src/fakedata";
import Post from "@/src/ui/(platform)/_components/Post";

export default function Page() {
  const data = FakeData;
  return (
    <main className=" min-w-md sm:w-2xl   border border-gray-300 rounded-xl overflow-auto no-scrollbar scroll-smooth ">
      <div className=" ">
        <section className="flex flex-col justify-between gap-4">
          {data.map((thread) => {
            return <Post key={thread.id} props={thread} />;
          })}
        </section>
      </div>
    </main>
  );
}
