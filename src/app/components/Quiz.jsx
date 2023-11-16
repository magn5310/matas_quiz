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



    
  return <div className="w-9/12 mx-auto my-2 overflow-hidden rounded-lg drop-shadow-md "> 
  
  <HeaderImg/>
  
  <section className=" bg-white gap-y-2  px-12 pb-10 pt-5 overflow-hidden  mx-auto   flex flex-col items-center" >


<ProgressBar/>

<h3 className="text-center text-rose-500 font-medium mt-5	 font-sans text-2xl">
    Hvilken hårtype har du?
  </h3>
  <h4 className="text-center text-rose-500 text-sm font-normal">Vælg min 2</h4>



  <CheckboxContainer/>
 
  <NavBtnContainer>
  <BackBtn/>
  <NextBtn/>
  </NavBtnContainer>

<SecondaryBtn/>
  
  </section>
</div>;
}
