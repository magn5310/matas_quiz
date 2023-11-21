"use client";
import ProductCard from "./ProductCard";
import Quiz from "./Quiz";
import QuizCard from "./QuizCard";
import { useState, useEffect } from "react";
export default function GridLayout({ data, data2}) {
  console.log("Det her er min NYE data.", data);
  const [toggleQuiz, setToggleQuiz] = useState(false);
 



  
  const [answer, setAnswer] = useState({
    name:"",
    q1:"",
    a1:[],
    q2:"",
    a2:[],
    q3:"",
    a3:[],
    q4:"",
    a4:[],
    q5:"",
    a5:[]
    });

    function toggleHandler() {
      setToggleQuiz((old) => !old);
      postplease(answer)
    }

    async function postAnswer(answer){
      console.log(answer)
      let headersList = {
        "Accept": "*/*",
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify(answer);
       
       let response = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/quizAnswers", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log("NU ER DER FANDEME PUSHET");
      }
      
function postplease(answer){
  console.log("dette er min state", answer)
  postAnswer(answer);
}



  return (
    <>
      {!toggleQuiz ? (
        <div className="grid grid-cols-mainGrid gap-4 p-32 items-stretch">
          <QuizCard toggleQuiz={toggleHandler} />

          {data2.map((item) => (
            <ProductCard name={item.name} image={item.image} brand={item.brand} id={item.id} price={item.price} key={item.id} />
          ))}
        </div>
      ) : (
        <Quiz postplease={postplease} answer={answer} setAnswer={setAnswer} toggleQuiz={toggleHandler} data={data}></Quiz>
      )}
    </>
  );
}
