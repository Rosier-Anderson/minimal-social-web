import { TbMessageMinus } from "react-icons/tb";
import ThreadForm from "./thread_form";
import { CgMoreO } from "react-icons/cg";

function CreateThread() {
  return (
    <div className="size-screen flex items-center justify-center bg-neutral-600">
       <div className="flex flex-col  my-auto w-xl rounded-xl h-auto bg-white ">
      <ThreadHeader />
      <ThreadForm />
     
    </div>
    </div>
   
  );
}

const ThreadHeader = () => {
  return (
    <div className="flex p-4 justify-between items-center  border-b border-b-background-primary  ">
      <div className="">
        <button className="cursor-pointer">Cancel</button>
      </div>
      <div className="">
        <strong>New thread</strong>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="cursor-pointer">
          <span>
            <TbMessageMinus className="size-5" />
          </span>
        </button>

        <button className="cursor-pointer">
          {" "}
          <span>
            <CgMoreO className="size-5" />{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreateThread;
