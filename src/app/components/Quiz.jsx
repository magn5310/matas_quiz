"use client"


import Image from "next/image";
import BackBtn from "./BackBtn";
import Checkbox from "./Checkbox";
import CheckboxContainer from "./CheckboxContainer";
import FoldDownBtn from "./FoldDownBtn";
import HeaderImg from "./HeaderImg";
import NavBtnContainer from "./NavBtnContainer";
import NextBtn from "./NextBtn";

import ProgressBar from "./ProgressBar";
import SecondaryBtn from "./SecondaryBtn";

export default function Quiz() {
  return <section className=" bg-white gap-y-2 drop-shadow-md w-96 overflow-hidden  mx-auto my-2 rounded-lg flex flex-col items-center" >
<HeaderImg/>
  <h3 className="text-center text-[#FF4F6B] font-medium mt-5	 text-2xl">
    Hvilken hårtype har du?
  </h3>
  <h4 className="text-center text-[#FF4F6B] text-sm font-normal">Vælg min 2</h4>

  <CheckboxContainer/>
 
  <NavBtnContainer>
  <BackBtn/>
  <NextBtn/>
  </NavBtnContainer>

<SecondaryBtn/>
  
  </section>;
}
