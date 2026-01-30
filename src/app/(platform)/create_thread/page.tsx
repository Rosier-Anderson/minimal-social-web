import { TbMessageMinus } from "react-icons/tb";
import ThreadForm from "./thread_form";
import { CgMoreO } from "react-icons/cg";
import { getSession } from "@/src/lib/actions/session";

async function CreateThread() {
  const payload = await getSession();
  if (!payload) return null;

  return (
    <div className="size-screen flex items-center justify-center bg-neutral-600">
      <div className="flex flex-col  my-auto w-xl rounded-xl h-auto bg-white ">
        <ThreadHeader />
        <ThreadForm session={payload} />
      </div>
    </div>
  ); 
}

const ThreadHeader = () => {
  return (
    <div className="flex p-4 justify-between items-center  border-b border-b-background-primary  ">
      <button className="cursor-pointer">Cancel</button>
      <strong>New thread</strong>
      <div className="flex justify-center items-center gap-4">
        <button className="cursor-pointer">
          <TbMessageMinus className="size-5" />
        </button>
        <button className="cursor-pointer">
          <CgMoreO className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CreateThread;
