import React, { useState } from "react";
import Image from "next/image";

export default function ProgressBar() {
  const myArray = ["0", "1/4", "2/4", "3/4", "full"];
  const [fraction, setFraction] = useState(myArray[0]);

  function changeFraction() {
    setFraction((currentFraction) => {
      const currentIndex = myArray.indexOf(currentFraction);
      const nextIndex = (currentIndex + 1) % myArray.length;
      return myArray[nextIndex];
    });
  }

  return (
    <div className="px-2 w-full">
      <button onClick={changeFraction}>hey</button>
      <div className="flex justify-between">
        <p className="text-xs font-bold text-rose-500">31%</p>
        <p className="text-xs font-bold text-rose-500">209 produkter fundet</p>
      </div>
      <div className="bg-rose-200 w-full h-3 rounded overflow-hidden mt-1">
        <div className={`h-full w-${fraction}`}>
          <Image className="h-full w-full object-cover" src="/pics/bar-bg.svg" width={400} height={10} alt="Quiz Progress" />
        </div>
      </div>
    </div>
  );
}
