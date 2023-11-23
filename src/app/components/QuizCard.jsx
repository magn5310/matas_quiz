"use client";

export default function QuizCard({ toggleQuiz }) {
  return (
    <article className="bg-rose-500 flex flex-col lg:justify-normal justify-between text-white rounded-lg overflow-hidden cursor-pointer" onClick={toggleQuiz}>
      <img className="object-cover h-[60%]" src="/pics/product.jpg" alt="product" />
      <div className="text-center flex flex-col items-center lg:mb-0 mb-4 lg:p-4 p-1">
        <p className="text-xs uppercase">Find din favorit</p>
        <h3 className="text-lg font-dm">Hvilket hårprodukt passer bedst til dig?</h3>
        <button className="text-sm uppercase underline">Tag testen</button>
      </div>
    </article>
  );
}
