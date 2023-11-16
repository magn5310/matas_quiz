"use client";
import { useState } from "react";

import NavBtnContainer from "./NavBtnContainer";
import BackBtn from "./BackBtn";
import NextBtn from "./NextBtn";

function HairQuiz() {
  const [visible, setVisible] = useState(0);
  const views = [<section key="1">Her står der ting</section>, <section key="2">2</section>, <section key="3">3</section>, <section key="4">4</section>];

  function setPreviousView() {
    setVisible((oldValue) => {
      if (oldValue === 0) {
        return views.length - 1;
      }
      console.log(`Previous: The count is ${visible}`);
      return oldValue - 1;
    });
  }

  function setNextView() {
    setVisible((oldValue) => {
      if (oldValue === views.length - 1) {
        return 0;
      }
      console.log(`Next: The count is ${visible}`);
      return oldValue + 1;
    });
  }

  return (
    <>
      {views[visible]}
      <NavBtnContainer>
        <BackBtn onClick={setPreviousView}>Previous</BackBtn>
        <NextBtn onClick={setNextView}>Next</NextBtn>
      </NavBtnContainer>
    </>
  );
}

export default HairQuiz;
