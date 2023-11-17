"use client";

export default function NextBtn({ nextQuestion, currentQuestion }) {
  return (
    <button onClick={nextQuestion} className="bg-rose-500 text-white w-full h-10 font-semibold  rounded flex justify-center items-center">
      Næste
    </button>
  );
}
