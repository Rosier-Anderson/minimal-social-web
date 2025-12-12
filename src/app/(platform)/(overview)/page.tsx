import { FakeData } from "@/src/fakedata";
import { DotsIcon } from "../../../assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const data = FakeData;
  return (
    <>
      <main className=" min-w-md sm:w-2xl  mx-2 h-full border rounded-xl ">
        <div className=" w-sm sm:w-xl mx-auto">
          <section className="">
            {data.map((thread) => {
              return (
                <article key={thread.id} className="bg-amber-50 ">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-4">
                      <figure className="rounded-full overflow-hidden bg-red-200">
                        <Link className="" href="">
                          <Image
                            src={thread.avatar}
                            width={48}
                            height={48}
                            alt="User picture"
                            loading="lazy"
                            className=""
                          />
                        </Link>
                      </figure>
                      <p>{thread.username}</p>
                    </div>

                    <div className="flex gap-4">
                      <span>{thread.time}</span>
                      <span>
                        <DotsIcon />
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <p>{thread.content}</p>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
