import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

export default function Post({ props }) {
  const { id, avatar, username, time, content } = props;
  return (
    <>
      <article key={id} className="  border-b border-gray-300 w-full  min-h-20">
        <div className="flex w-sm sm:w-xl mx-auto">
          <PostProfile avatar={avatar} />

          <div className="flex flex-col items-start justify-between w-full ">
            <PostInfo username={username} time={time} />

            <div className="">
              <p className="">{content}</p>
            </div>

            <PostStats />
          </div>
        </div>
      </article>
    </>
  );
}

const PostProfile = ({ avatar }) => {
  return (
    <div className="flex items-start justify-between gap-4 h-full ">
      <figure className="rounded-full overflow-hidden bg-gray-500">
        <Link className="" href="">
          <Image
            src={avatar}
            width={48}
            height={48}
            alt="User picture"
            loading="lazy"
            className=""
          />
        </Link>
      </figure>{" "}
    </div>
  );
};

const PostInfo = ({ username, time }) => {
  return (
    <div className="flex flex-col items-start justify-between w-full ">
      <div className="flex justify-between items-start w-full gap-1 mr-auto ">
        <p className="font-semibold">{username}</p>
        <span className="mr-auto text-gray-400/80 ">{time}</span>{" "}
        <span className="cursor-pointer">
          <BsThreeDots />
        </span>
      </div>
    </div>
  );
};

const PostStats = () => {
  return (
    <div className="flex w-60 justify-between items-center my-2  **:size-4  *:cursor-pointer">
      <span>
        <FaRegHeart />
      </span>
      <span>
        <FaRegComment />
      </span>
      <span>
        <BiRepost />
      </span>
    </div>
  );
};
