"use client"

import { useState } from "react";
import Quiz from "./components/Quiz";




export default function Home() {
  const [answer, setAnswer] = useState({
    name:"Simon juhl",
    q1:"",
    a1:"",
    q2:"",
    a2:"",
    q3:"",
    a3:"",
    q4:"",
    a4:"",
    q5:"",
    a5:""
    });

  async function postAnswer(){
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
   console.log(data);
  }


  return (
    <main className="bg-slate-100">
      <Quiz setAnswer={setAnswer}/>
    </main>
  );
}
