"use client";
import ThreadActions from "@/src/ui/(platform)/create_thread/_components/ThreadActions";
import ThreadAuthor from "@/src/ui/(platform)/create_thread/_components/ThreadAuthor";
import {FormEvent, useRef} from "react";
import z from "zod";

const FormDataSchema = z.object({
  thread_content: z.string(),
  thread_emoji: z.string(),
  thread_image: z.instanceof(File),
  thread_localisation: z.string(),
});
export default function ThreadForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formResult = FormDataSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    const currentThread = localStorage.getItem("threads");
    if (!currentThread) {
      localStorage.setItem("threads", JSON.stringify(formResult.data));
    } else {
      const threadData = localStorage.getItem("threads");
      console.log(threadData);
    }
  };

  return (
    <div className="flex-1 flex flex-col  rounded-2xl ">
      <form onSubmit={(e) => handleSubmit(e)} className="h-full m-4">
        {/* content info */}
        <div className="flex gap-2  ">
          <ThreadAuthor />

          <div className="flex flex-col justify-between w-full">
            <strong>Anderson</strong>
            <div className="w-full ">
              <textarea
                className="h-6 text-sm outline-none resize-none"
                name="thread_content"
                id="thread_content"
                placeholder="What's new"></textarea>
            </div>{" "}
            {/* thread actions icons */}
            <ThreadActions />
            {/* Add more Thread  */}
            <textarea
              className="h-6 text-sm outline-none resize-none"
              name="thread_localisation"
              id="thread_localisation"
              placeholder="Add to thread"></textarea>
          </div>
        </div>
        <CreatePostButton />
      </form>
    </div>
  );
}
const CreatePostButton = () => {
  return (
    <button
      type="submit"
      className="ml-auto mb-2 mr-2  block w-16 text-center rounded-lg font-semibold border border-text-primary p-1 cursor-pointer">
      Post
    </button>
  );
};
