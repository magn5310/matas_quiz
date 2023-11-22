import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard({ name, id, image, brand, price }) {
  const priceOnlyNumber = parseFloat(price);
  return (
    <article className="flex flex-col p-4 bg-white max-w-xs rounded-lg overflow-hidden">
      <p className="bg-slate-200 p-1 font-inter rounded-lg self-start">Spar {(priceOnlyNumber * 0.1).toFixed(0)}%</p>
      <img className="object-cover h-40	flex justify-center align-middle mx-auto py-4 w-max" src={image} alt="product" />
      <div className="flex items-center">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <p>(30)</p>
      </div>
      <div>
        <p className="font-bold">{brand}</p>
        <p>{name}</p>
      </div>
      <p className="font-bold">{price}</p>
      <div className="flex gap-2">
        <button className="bg-slate-500 font-bold text-white grow rounded-lg p-4">Læg i kurv</button>
        <button className="bg-slate-200 rounded-lg p-4">
          <AiFillHeart />
        </button>
      </div>
    </article>
  );
}
