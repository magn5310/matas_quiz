import { AiOutlineUp } from "react-icons/ai";

export default function FoldDownBtn({ toggleIdle, toggleIdleStatus }) {
  return (
    <button className="z-30 col-start-2 row-start-1 flex flex-col items-center justify-start text-white leading-3 text-sm sm:text-lg" onClick={toggleIdle}>
      <AiOutlineUp className="text-3xl" />
      <p>{toggleIdleStatus === false ? "Se resultater" : "Fortsæt quiz"}</p>
    </button>
  );
}
