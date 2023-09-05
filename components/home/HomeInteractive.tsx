import React, { ChangeEvent, useState } from "react";
import WelcomeInteractive from "./WelcomeInteractive";

const HomeInteractive = () => {
    const [inputName, setInputName] = useState<string>('')
    const [welcome, setWelcome] = useState<boolean>(false)

    const handleNameInputChange = (e:ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        const name = e.target.value
        setInputName(name)
    }

    const handleSubmit = (event: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
        setWelcome(true)
    }

    return (
        <div className="flex items-center justify-center w-full h-screen">
            {!welcome ? <div className="w-90 flex flex-col mx-auto text-center">
        <h1 className="text-4xl hero-title md:text-6xl font-bold mb-5">
          Hey there, I'm Carla!
                </h1>
                <p className="text-1xl mb-8">Software Engineer | Mom | Wife | Lifelong Learner | Latina | Advocate</p>
        <label htmlFor="name" className="text-3xl">What is your name?</label>
        <input className="my-5 w-60 mx-auto py-2 bg-transparent text-3xl border-b-2 border-blue-300 text-center focus:bg-transparent" id="name" name="name" type="text" placeholder="your name here" onChange={(e) => handleNameInputChange(e)} />
        <input type="button" className="px-5 mt-2 mx-auto py-2 text-2xl  font-semibold w-60 cursor-pointer border-t-2 border-r-2 border-b-2 border-l-2 rounded-md border-t-black border-r-black border-blue-200 opacity-75 hover:border-t-blue-200 hover:border-r-blue-200 hover:opacity-100 transition ease-in-out duration-1000 hover:border-t-2 focus:outline-none" onClick={(event) => handleSubmit(event) } value="Let's go" />
            </div> : <WelcomeInteractive inputName={inputName} />}
      
    </div>
  );
};

export default HomeInteractive;
