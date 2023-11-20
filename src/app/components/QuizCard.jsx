"use client";
import { useState } from "react";

export default function QuizCard() {
  const [quizToggle, setQuizToggle] = useState(false);
  function toggleQuiz() {
    setQuizToggle((old) => !old);
  }
  return (
    <article className="bg-rose-500 text-white rounded-lg overflow-hidden">
      <img className="object-cover h-[60%]" src="/pics/product.jpg" alt="product" />
      <div className="text-center flex flex-col justify-center items-center  p-1">
        <p className="text-xs uppercase">Find din favorit</p>
        <h3 className="text-lg font-dm">Hvilken [produkt] passer bedst til dig?</h3>
        <button className="text-sm uppercase underline" onClick={toggleQuiz}>
          Tag testen
        </button>
      </div>
    </article>
  );
}
