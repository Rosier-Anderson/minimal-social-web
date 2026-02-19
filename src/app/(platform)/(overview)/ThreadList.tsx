import { fetchThread } from "@/src/lib/data/threads-data";
import Post from "@/src/ui/(platform)/_components/Post";

export default async function ThreadList() {
  const data = await fetchThread();

  return (
    <section className="flex flex-col justify-between gap-4">
      {data.map((thread) => (
        console.log(thread.images),
        <Post key={thread.id} {...thread} />
      ))}
    </section>
  );
}
