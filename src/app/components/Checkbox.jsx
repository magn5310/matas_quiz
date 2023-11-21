"use client";
import { useState } from "react";

export default function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`flex justify-between border border-solid py-1 font px-2 rounded border-rose-500 cursor-pointer only-after:bg-[#ff4f6b] hover:bg-red-50 ${isChecked ? "bg-rose-500 text-white  hover:bg-red-300" : "text-rose-500"}`}
      htmlFor={props.label}>
      {props.label}
      <input className="rounded-full  accent-rose-500 border border-solid border-white outline-rose-500" id={props.label} type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
    </label>
  );
}
