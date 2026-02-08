import { FakeData } from "@/src/fakedata";
import Post from "@/src/ui/(platform)/_components/Post";
type PageProps = {
  params: Promise<{ profile_username: string }>;
};
export default function Profile({ params }: PageProps) {
  const session = "@anderson";
  const data = FakeData;
  return (
    <>
      {data.map((thread) => (
        <Post key={thread.id} {...thread} />
      ))}
    </>
  );
}
