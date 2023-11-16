"use client";

import { useState } from "react";

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
  const [visible, setVisible] = useState(0);
  const views = [<section key="1">Spørgsmål 1</section>, <section key="2">Spørgsmål 2</section>, <section key="3">Spørgsmål 3</section>, <section key="4">Spørgsmål 4</section>];

  function previousQuestion() {
    setVisible((oldValue) => {
      if (oldValue === 0) {
        return views.length - 1;
      }
      console.log(`Previous: The count is ${visible}`);
      return oldValue - 1;
    });
  }

  function nextQuestion() {
    setVisible((oldValue) => {
      if (oldValue === views.length - 1) {
        return 0;
      }
      console.log(`Next: The count is ${visible}`);
      return oldValue + 1;
    });
  }

  return (
    <div className="w-9/12 mx-auto my-2 overflow-hidden rounded-lg drop-shadow-md ">
      <HeaderImg />

      <section className=" bg-white gap-y-2  px-12 pb-10 pt-5 overflow-hidden  mx-auto   flex flex-col items-center">
        <ProgressBar />

        <h3 className="text-center text-rose-500 font-medium mt-5	 font-sans text-2xl">Hvilken hårtype har du?</h3>
        <h4 className="text-center text-rose-500 text-sm font-normal">Vælg min 2</h4>

        <CheckboxContainer />

        <NavBtnContainer>
          <BackBtn onClick={previousQuestion} />
          <NextBtn onClick={nextQuestion} />
        </NavBtnContainer>

        <SecondaryBtn />
      </section>
      <button onClick={previousQuestion}>Previous</button>
      <button onClick={nextQuestion}>Next</button>
      {views[visible]}
    </div>
  );
}
