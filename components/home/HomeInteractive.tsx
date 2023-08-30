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
            {!welcome ? <div className="w-80 flex flex-col mx-auto text-center">
        <h1 className="text-6xl hero-title md:text-4xl font-bold mb-5">
          Hey there, I'm Carla!
        </h1>
        <label htmlFor="name">What is your name?</label>
        <input className="bg-transparent border-b-2 border-blue-300 text-center" id="name" name="name" type="text" placeholder="your name here" onChange={(e) => handleNameInputChange(e)} />
        <input type="button" onClick={(event) => handleSubmit(event) } value="Send name" />
            </div> : <WelcomeInteractive inputName={inputName} />}
      
    </div>
  );
};

export default HomeInteractive;
