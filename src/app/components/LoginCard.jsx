import React, { useState } from "react";

export default function LoginCard(props) {
  const [name, setName] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    const newObject = { ...props.answer, name: event.target.value };
    setName(event.target.value);
    props.setAnswer(newObject);
    console.log("dette er det jeg har gang i nu", props.answer);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setLoggedIn(true);
    props.postAnswer();
  };

  return (
    <article className="flex flex-col bg-white  max-w-xs justify-center items-center rounded-lg overflow-hidden">
      {loggedIn ? (
        <>
          <h3 className="font-bold">Velkommen tilbage {name}</h3>
          <p>Se dine resultater her</p>
          <button className="cursor-pointer text-white mt-2 bg-rose-500 px-4 py-2 rounded-sm">Din side</button>
        </>
      ) : (
        <form className="flex flex-col justify-center items-center w-24 sm:w-full" onSubmit={handleSubmit}>
          <h3 className="font-bold">Login</h3>
          <p className="text-center font-light text-slate-600 text-sm">for at gemme dine resultater</p>
          <label className="mt-5 text-center" htmlFor="username">
            Brugernavn
            <input className=" flex flex-col bg-slate-200 mt-2 py-1 rounded px-1 w-32 sm:w-52" id="username" name="username" type="text" onChange={handleUsernameChange} />
          </label>
          <button type="submit" className="cursor-pointer text-white mt-2 bg-rose-500 px-4 py-2 rounded-sm">
            Login
          </button>
        </form>
      )}
    </article>
  );
}
