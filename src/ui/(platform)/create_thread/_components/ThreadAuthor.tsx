"use client";
import { ProfileRing } from "../../../components/global/ProfileRing";
import Image from "next/image";
import { useCurrentUser } from "../../_components/global/UserProvider";
type ThreadAuthorProps =
  | {
      avatar: string | null;
    }
  | undefined;
export default function ThreadAuthor() {
  const currentUser: ThreadAuthorProps = useCurrentUser();
  const isAvatar = `${currentUser?.avatar}`;

  // const [previewAvatar, setPreviewAvatar] = useState();

  return (
    <div className="">
      <div className="flex items-start justify-between  ">
        <ProfileRing contentClassName="bg-white">
          <figure className="rounded-full overflow-hidden">
            <Image
              src={`/images/profile2.png`}
              width={45}
              height={45}
              alt="User picture"
              loading="lazy"
              className=""
            />
          </figure>
        </ProfileRing>
      </div>
      {/*  */}
      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <span className="  bg-neutral-200 w-0.5 h-8"></span>
        <div className="flex items-start justify-between  ">
          <ProfileRing contentClassName="bg-white">
            <figure className="rounded-full overflow-hidden">
              <Image
                src={`/images/profile2.png`}
                width={20}
                height={20}
                alt="User picture"
                loading="lazy"
                className=""
              />
            </figure>
          </ProfileRing>
        </div>
      </div>
    </div>
  );
}
