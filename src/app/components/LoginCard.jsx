"use client";

export default function LoginCard({ toggleQuiz }) {
  return (
    <article className="flex flex-col p-4 bg-white max-w-xs justify-center items-center rounded-lg overflow-hidden cursor-pointer">
    <h3>Login</h3>
    <p>for at gemme dine resultater</p>
    <label htmlFor="">
    <input type="text" />
    <button></button>
    </label>
    </article>
  );
}
