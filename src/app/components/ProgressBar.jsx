import React, { useState } from "react";
import Image from "next/image";

export default function ProgressBar() {
  const myArray = ["0", "1/4", "1/2", "9/12", "full"];
  const [fraction, setFraction] = useState(myArray[2]);

  function changeFraction() {
    setFraction((currentFraction) => {
      const currentIndex = myArray.indexOf(currentFraction);
      const nextIndex = (currentIndex + 1) % myArray.length;
      return myArray[nextIndex];
    });
  }

  return (
    <div className="px-2 w-full">
      <button onClick={changeFraction}>Næste</button>
      <div className="flex justify-between">
        <p className="text-xs font-bold text-rose-500">31%</p>
        <p className="text-xs font-bold text-rose-500">209 produkter fundet</p>
      </div>
      <div className="bg-rose-200 w-full h-3 rounded overflow-hidden mt-1">
        {/* <div className={`h-full w-[$]`}> */}
        <Image className={`h-full w-${fraction} object-cover`} src="/pics/bar-bg.svg" width={0} height={10} alt="Quiz Progress" />
        {/* </div> */}
      </div>
    </div>
  );
}
