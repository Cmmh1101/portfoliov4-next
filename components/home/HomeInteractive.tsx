import React, { ChangeEvent, useEffect, useState } from "react";
import WelcomeInteractive from "./WelcomeInteractive";

const HomeInteractive = () => {
  let inputVal = "";
  const [inputName, setInputName] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("inputName");
        const initialValue = saved ? JSON.parse(saved) : "";
        return initialValue;
    } else {
      return "";
    }
  });

  const [welcome, setWelcome] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && inputName !== "") {
      localStorage.setItem("inputName", JSON.stringify(inputName));
      setWelcome(true);
    }
  }, [inputName]);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    inputVal = name;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputName(inputVal);
    setWelcome(true);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {!welcome || inputName === "" ? (
        <form onSubmit={handleSubmit}>
          <div className="w-90 flex flex-col mx-auto text-center">
            <h1 className="text-4xl hero-title md:text-6xl font-bold mb-5">
              Hey there, I'm Carla!
            </h1>
            <p className="text-1xl mb-8">
              Software Engineer | Mom | Wife | Lifelong Learner | Latina |
              Advocate
            </p>
            <label htmlFor="name" className="text-3xl">
              What is your name?
            </label>
            <input
              className="my-5 w-60 mx-auto py-2 bg-transparent text-3xl border-b-2 border-blue-300 text-center focus:bg-transparent"
              id="name"
              name="name"
              type="text"
              placeholder="your name here"
              onChange={(e) => handleNameInputChange(e)}
            />
            <input
              type="submit"
              className="px-5 mt-2 mx-auto py-2 text-2xl font-semibold w-70 cursor-pointer border-t-2 border-r-2 border-b-2 border-l-2 rounded-md border-t-black border-r-black border-blue-200 opacity-75 hover:border-t-blue-200 hover:border-r-blue-200 hover:opacity-100 transition ease-in-out duration-1000 hover:border-t-2 focus:outline-none"
              value="Enter name to begin"
            />
          </div>
        </form>
      ) : (
        <WelcomeInteractive inputName={inputName} />
      )}
    </div>
  );
};

export default HomeInteractive;
