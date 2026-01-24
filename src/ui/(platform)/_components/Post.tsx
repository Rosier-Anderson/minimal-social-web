import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { ProfileRing } from "../../components/global/ProfileRing";
type PostProps = {
  props: {
    id: number;
    avatar: string;
    username: string;
    time: string;
    content: string;
    image: string;
  };
};
export default function Post(props: PostProps) {
  const { avatar, username, time, content, image } = props.props;
  return (
    <>
      <article className="border-b border-background-primary  w-full mt-2  ">
        <div className="flex w-sm sm:w-xl h-[200px] mx-auto ">
          <PostProfile avatar={avatar} />
          <div className="flex flex-col items-start   w-full ">
            <PostInfo username={username} time={time} />
            <PostContent image={image} content={content} />
            <div className="mt-auto">
              <PostStats />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
const PostContent = ({
  image,
  content,
}: {
  image: string;
  content: string;
}) => {
  return (
    <div className="">
      <p className="">{content}</p>

      <figure className="relative w-56 h-28 ">
        <Image
          src={image}
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
const PostProfile = ({ avatar }: { avatar: string }) => {
  return (
    <div className="flex items-start justify-between gap-4 h-full ">
      <ProfileRing innerInnerClassName="bg-white">
        <figure className="rounded-full overflow-hidden">
          <Link className="" href="">
            <Image
              src={avatar}
              width={45}
              height={45}
              alt="User picture"
              loading="lazy"
              className=""
            />
          </Link>
        </figure>{" "}
      </ProfileRing>
    </div>
  );
};

const PostInfo = ({ username, time }: { username: string; time: string }) => {
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
