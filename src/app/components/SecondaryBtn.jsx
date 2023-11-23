import Link from "next/link";

export default function SecondaryBtn() {
  return (
    <button className="text-rose-500 lg:mt-auto justify-items-center col-span-full sticky bottom-0 self-center pt-4">
      <Link target="_blank" href={"https://www.matas.dk/det-sker"}>
        <h3 className="text-xl font-semibold">Er du i tvivl?</h3>
        <p className="text-xs">Book en tid hos en ekspert</p>
      </Link>
    </button>
  );
}
