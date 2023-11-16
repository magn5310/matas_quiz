import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard() {
  return (
    <article className="flex flex-col bg-slate-100 max-w-xs ">
      <p className="bg-slate-200 p-1 rounded-lg self-start">Værdi 880,-</p>
      <img className="object-cover max-w-full" src="/pics/prodpic.jpg" alt="product" />
      <div className="flex items-center">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <p>(30)</p>
      </div>
      <div>
        <p className="font-bold">Njord</p>
        <p>Beard Starter Kit</p>
      </div>
      <p className="font-bold">349,95 kr.</p>
      <div className="flex gap-2">
        <button className="bg-slate-500 font-bold text-white grow rounded-lg p-4">Læg i kurv</button>
        <button className="bg-slate-200 rounded-lg p-4">
          <AiFillHeart />
        </button>
      </div>
    </article>
  );
}
