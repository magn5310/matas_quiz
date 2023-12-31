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

  console.log(
    "TEST",
    props.data.filter((item) => item.Filtergruppe === "Hårtype")
  );
  const newAr = props.data.filter((item) => item.Filtergruppe === "Hårtype");

  console.log("REN FILTER DATA", props.data);
  console.log("Filtrere filter data", newAr);
  const questions = [
    { question: "Hvad beskriver bedst dit hår?", amount: "maksimum 3", answers: props.data.filter((item) => item.Filtergruppe === "Hårtype") },
    { question: "Hvad er din hårlængde?", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Hårlængde") },
    { question: "Hvilket køn identificerer du dig som?", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Køn") },
    { question: "Hvilken finish ønsker du?", amount: "kun 1", answers: props.data.filter((item) => item.Filtergruppe === "Finish") },
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

  function toggleCheckbox(answerindex) {
    console.log("INDEXINDEXINDEXINDEXINDEX", answerindex);

    questions[visible].answers[answerindex].checked = !questions[visible].answers[answerindex].checked;
  }

  function getAnswerAndSend(questionNumber, answerNumber, answerText) {
    const newObject = { ...props.answer };
    console.log("dette er en kopi", newObject);

    newObject[questionNumber] = questions[visible].question;

    newObject[answerNumber].push(answerText);

    props.setAnswer(newObject);

    console.log("dette er det jeg har gang i nu", props.answer);

    console.log("i min funktion spørgsmål", questionNumber, "svar:", answerNumber);
  }

  return (
    <div className="grid bg-white w-full h-[90vh] lg:h-[95vh] absolute bottom-0 mx-auto overflow-hidden rounded-t-2xl drop-shadow-md lg:w-9/12 lg:inset-x-0 lg:bottom-0">
      <HeaderImg toggleIdle={props.toggleIdle} toggleIdleStatus={props.toggleIdleStatus} />
      <ProgressBar questions={questions} currentQuestion={visible} totalQuestions={questions.length} visteProdukter={props.visteProdukter} />

      <section className="w-full px-12 pb-2 pt-2 overflow-hidden mx-auto flex flex-col items-center relative">
        {questions[visible] && (
          <>
            <h3 className="text-center text-rose-500 font-medium font-sans text-2xl">{questions[visible].question}</h3>
            <h4 className="self-start text-zinc-800 text-xs my-2 sm:text-sm font-normal self-center">Vælg {questions[visible].amount}</h4>
            <CheckboxContainer>
              {questions[visible].answers.map((answer) => (
                <Checkbox toggleCheckbox={toggleCheckbox} checked={answer.checked} getAnswerAndSend={getAnswerAndSend} setAnswer={props.setAnswer} key={questions[visible].answers.indexOf(answer)} answerIndex={questions[visible].answers.indexOf(answer)} label={answer.Filterværdi} questionIndex={visible} />
              ))}
            </CheckboxContainer>
            <SecondaryBtn />
          </>
        )}
      </section>
      <NavBtnContainer>
        <BackBtn previousQuestion={previousQuestion} currentQuestion={questions[visible]} />
        <NextBtn filterLess={props.filterLess} postplease={props.postplease} toggleQuiz={props.toggleQuiz} nextQuestion={nextQuestion} currentQuestion={questions[visible]} arrayLength={visible} />
      </NavBtnContainer>
    </div>
  );
}
