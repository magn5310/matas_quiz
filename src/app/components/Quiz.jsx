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

export default function Quiz(props) {
  console.log(props.data);

  const [visible, setVisible] = useState(0);

  const hårtypeArray = [];

  {
    props.data.filter((item) => item.Filtergruppe === "Hårtype").map((item) => hårtypeArray.concat(item.Filterværdi));
  }

  console.log(props.data.filter((item) => item.Filtergruppe === "Hårtype"));

  const questions = [
    { question: "Har du en udfordring med dit hår?", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Hårtype") },
    { question: "Hvad er din hårlængde?", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Hårlængde") },
    { question: "Hvilket køn identificerer du dig som?", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Køn") },
    { question: "!Fjerde spørgsmåls-test!", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Køn") },
  ];

  function previousQuestion() {
    setVisible((oldValue) => {
      if (oldValue === 0) {
        return questions.length - 1;
      }
      console.log(`Previous: The count is ${visible}`);
      return oldValue - 1;
    });
  }

  function nextQuestion() {
    setVisible((oldValue) => {
      if (oldValue === questions.length - 1) {
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
        <ProgressBar questions={questions} currentQuestion={visible} totalQuestions={questions.length} />
        {questions[visible] && (
          <>
            <h3 className="text-center text-rose-500 font-medium mt-5	 font-sans text-2xl">{questions[visible].question}</h3>
            <h4 className="text-center text-rose-500 text-sm font-normal">Vælg {questions[visible].amount}</h4>
            <CheckboxContainer>
              {questions[visible].answers.map((answer) => (
                <Checkbox key={questions[visible].answers.indexOf(answer)} label={answer.Filterværdi} />
              ))}
            </CheckboxContainer>
          </>
        )}

        <NavBtnContainer>
          <BackBtn previousQuestion={previousQuestion} currentQuestion={questions[visible]} />
          <NextBtn nextQuestion={nextQuestion} currentQuestion={questions[visible]} />
        </NavBtnContainer>

        <SecondaryBtn />
      </section>
    </div>
  );
}
