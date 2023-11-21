"use client";

export default function NextBtn({ nextQuestion, currentQuestion, arrayLength, toggleQuiz, postplease }) {
  return (
    <>
    {arrayLength === 3 ?     <button onClick={toggleQuiz} className="bg-rose-500 text-white w-full h-10 font-semibold  rounded flex justify-center items-center">
Se resultat
</button> :     <button onClick={nextQuestion} className="bg-rose-500 text-white w-full h-10 font-semibold  rounded flex justify-center items-center">
Næste
</button> }
    </>
  );
}

