export default function QuizCard() {
  return (
    <article className="bg-rose-500 text-white ">
      <img className="object-cover h-[60%]" src="/pics/product.jpg" alt="product" />
      <div className="text-center p-1">
        <p className="text-xs uppercase">Find din favorit</p>
        <h3 className="text-lg">Hvilken [produkt] passer bedst til dig?</h3>
        <p className="text-sm uppercase underline">Tag testen</p>
      </div>
    </article>
  );
}
