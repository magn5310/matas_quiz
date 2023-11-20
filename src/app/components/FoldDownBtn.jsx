"use client";
import { AiOutlineUp } from "react-icons/ai";
import { useState } from "react";

export default function FoldDownBtn() {
  const [quizToggle, setQuizToggle] = useState(false);
  function toggleQuiz() {
    setQuizToggle((old) => !old);
  }
  return (
    <button className="z-30 col-start-2 row-start-1  top-0 flex flex-col items-center justify-center text-white leading-3">
      <AiOutlineUp className="text-3xl" onClick={toggleQuiz} />
      <p>Se resultater</p>
    </button>
  );
}
