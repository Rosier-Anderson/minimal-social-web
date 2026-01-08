import {FakeData} from "@/src/fakedata";
import Post from "@/src/ui/(platform)/_components/Post";

export default function Profile() {
  const data = FakeData;
  return (
    <>
      {data.map((thread) => (
        <Post key={thread.id} props={thread} />
      ))}
    </>
  );
}
