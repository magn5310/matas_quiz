import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard({ name, id, image, brand, price, isBestMatch }) {
  const priceOnlyNumber = parseFloat(price);

  return (
    <article className="flex flex-col p-2 lg:p-4 bg-white max-w-xs rounded-lg overflow-hidden gap-1">
      <p className={`${isBestMatch ? "bg-rose-500 text-white" : "bg-slate-200"} p-1 font-inter rounded-lg self-start`}>{isBestMatch ? "Bedste match" : `Spar ${(priceOnlyNumber * 0.1).toFixed(0)}%`}</p>
      <img className="object-cover h-40	flex justify-center align-middle mx-auto py-4 w-max" src={image} alt="product" />
      <div className="flex gap-1 items-center">
        <span className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
        <p>{Math.floor(id / 1000 - 600)}</p>
      </div>
      <div>
        <p className="lg:block hidden font-bold">{brand}</p>
        <p>{name}</p>
      </div>
      <p className="font-bold">{price}</p>
      <div className="flex gap-2">
        <button className="bg-slate-500 font-bold text-white lg:text-base text-sm grow rounded-lg p-2">Læg i kurv</button>
        <button className="bg-slate-200 rounded-lg p-2 lg:px-4 lg:text-base text-sm">
          <AiFillHeart />
        </button>
      </div>
    </article>
  );
}
