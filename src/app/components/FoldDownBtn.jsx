import { AiOutlineUp } from "react-icons/ai";

export default function FoldDownBtn({ toggleQuiz }) {
  return (
    <button className="z-30 col-start-2 row-start-1 flex flex-col items-center justify-start text-white leading-3 text-sm sm:text-lg" onClick={toggleQuiz}>
      <AiOutlineUp className="text-3xl" />
      <p>Se resultater</p>
    </button>
  );
}
