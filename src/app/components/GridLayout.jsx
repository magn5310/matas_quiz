"use client";
import ProductCard from "./ProductCard";
import Quiz from "./Quiz";
import QuizCard from "./QuizCard";
import { useState, useEffect } from "react";
export default function GridLayout({ data, data2 }) {
  console.log("Det her er min NYE data.", data);
  const [toggleQuiz, setToggleQuiz] = useState(false);
  function toggleHandler() {
    setToggleQuiz((old) => !old);
  }
  return (
    <>
      {!toggleQuiz ? (
        <div className="grid grid-cols-mainGrid gap-4 p-32 items-stretch relative">
          <QuizCard toggleQuiz={toggleHandler} />

          {data2.map((item) => (
            <ProductCard name={item.name} image={item.image} brand={item.brand} id={item.id} price={item.price} key={item.id} />
          ))}
        </div>
      ) : (
        <Quiz toggleQuiz={toggleHandler} data={data}></Quiz>
      )}
    </>
  );
}
