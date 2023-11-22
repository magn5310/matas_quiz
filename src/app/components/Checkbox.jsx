"use client";
import { stringify } from "postcss";
import { useState } from "react";



export default function Checkbox(props) {




  const toggleCheckbox = () => {
    props.toggleCheckbox(props.answerIndex);

    

const number = (props.questionIndex+1).toString();
const qIndex = "q" + number;
const aIndex = "a" + number;

props.getAnswerAndSend(qIndex, aIndex, props.label)

console.log("mit index", qIndex)


    
  };

  return (
    <label
      className={`flex justify-between border border-solid py-1 font px-2 max-h-[34px] rounded border-rose-500 cursor-pointer only-after:bg-[#ff4f6b] hover:bg-red-50 ${props.checked ? "bg-rose-500 text-white  hover:bg-red-300" : "text-rose-500"}`}
      htmlFor={props.label}>
      {props.label}
      <input className="rounded-full  accent-rose-500 border border-solid border-white outline-rose-500" id={props.label} type="checkbox" checked={props.checked} onChange={toggleCheckbox} />

      

    </label>
  );
}
