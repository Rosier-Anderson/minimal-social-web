import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { ThreadProfile } from "./ThreadProfile";

type PostProps = {
  id: number;
  avatar: string;
  username: string;
  time: string;
  content: string;
  images: string;
};
type PostContentProps = Pick<PostProps, "images" | "content">;
type PostInfoProps = Pick<PostProps, "username" | "time">;
export default function Post({
  avatar,
  username,
  time,
  content,
  images,
}: PostProps) {
  console.log(images);
  return (
    <>
      <article className="border-b border-background-primary  w-full mt-2  ">
        <div className="flex w-sm sm:w-xl h-[200px] mx-auto ">
          <ThreadProfile />
          <div className="flex flex-col items-start   w-full ">
            <PostInfo username={username} time={time} />
            <PostContent images={images} content={content} />
            <div className="mt-auto">
              <PostStats />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
const PostContent = ({ images, content }: PostContentProps) => {
  return (
    <div className="">
      <p className="">{content}</p>

      <figure className="relative w-56 h-28 ">
        <Image
          src={images}
          alt="User picture"
          loading="lazy"
          className=""
          fill
          sizes="120px"
        />
      </figure>
    </div>
  );
};

const PostInfo = ({ username, time }: PostInfoProps) => {
  return (
    <div className="flex flex-col items-start justify-between w-full ">
      <div className="flex justify-between items-start w-full gap-1 mr-auto ">
        <p className="font-semibold">{username}</p>
        <span className="mr-auto text-gray-400/80 ">{time}</span>{" "}
        <BsThreeDots className="cursor-pointer" />
      </div>
    </div>
  );
};

const PostStats = () => {
  return (
    <div className="flex w-60 justify-between items-center my-2  **:size-4  *:cursor-pointer">
      <FaRegHeart />
      <FaRegComment />
      <BiRepost />
    </div>
  );
};
