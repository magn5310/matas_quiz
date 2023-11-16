import { AiOutlineUp } from "react-icons/ai";

export default function FoldDownBtn() {
  return (
    <button className="z-30 col-start-2 row-start-1  top-0 flex flex-col items-center justify-center text-white leading-3">
      <AiOutlineUp className="text-3xl" />
      <p>Se resultater</p>
    </button>
  );
}
