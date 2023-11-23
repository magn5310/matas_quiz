"use client";
import ProductCard from "./ProductCard";
import Quiz from "./Quiz";
import QuizCard from "./QuizCard";
import LoginCard from "./LoginCard";
import styles from "./GridLayout.module.css";
import { useState, useEffect } from "react";
export default function GridLayout({ data, data2 }) {
  console.log("Det her er min NYE data.", data);
  const [toggleQuiz, setToggleQuiz] = useState(false);
  const [toggleIdle, setToggleIdle] = useState(false);
  const [visteProdukter, setVisteProdukter] = useState(data2.slice(0, 50));
  const [answer, setAnswer] = useState({
    name: "",
    q1: "",
    a1: [],
    q2: "",
    a2: [],
    q3: "",
    a3: [],
    q4: "",
    a4: [],
    q5: "",
    a5: [],
  });

  function toggleHandler() {
    setToggleQuiz((old) => !old);
    postplease(answer);
  }
  function toggleIdleHandler() {
    setToggleIdle((old) => !old);
  }
  const filterLess = () => {
    const aktuelLængde = visteProdukter.length;
    const nyeProdukter = visteProdukter.slice(aktuelLængde / 2);
    setVisteProdukter(nyeProdukter);
  };

  async function postAnswer() {
    console.log("JEG POSTER DET HER NU", answer);
    let headersList = {
      Accept: "*/*",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(answer);

    let response = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/quizAnswers", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    console.log("NU ER DER FANDEME PUSHET");
  }

  function postplease(answer) {
    console.log("dette er min state", answer);
    postAnswer(answer);
  }

  return (
    <article className="relative">
      <div className={`grid grid-cols-mainGrid gap-4 p-32 items-stretch relative ${visteProdukter.length < 25 ? styles.bestMatch : ""}`}>
        {visteProdukter.length < 50 ? <LoginCard postAnswer={postAnswer} setAnswer={setAnswer} answer={answer} /> : <QuizCard toggleQuiz={toggleHandler} />}

        {visteProdukter.map((item, index) => (
          <ProductCard name={item.name} image={item.image} brand={item.brand} id={item.id} price={item.price} key={item.id} isBestMatch={visteProdukter.length < 25 && index === 0} />
        ))}
      </div>

      {toggleQuiz && (
        <div className={`fixed transition-all ease-linear duration-250 top-0 left-0 w-full h-full flex items-center content-center z-100 ${toggleIdle && "top-[85%] "}`}>
          <Quiz filterLess={filterLess} postplease={postplease} answer={answer} setAnswer={setAnswer} toggleIdle={toggleIdleHandler} toggleQuiz={toggleHandler} data={data} visteProdukter={visteProdukter}></Quiz>
        </div>
      )}
    </article>
  );
}
