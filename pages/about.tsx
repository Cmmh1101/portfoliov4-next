import React from "react";
import Header from "../components/UI/Header";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/aboutMe/Skills"

const about = () => {
  return (
    <div className="container min-h-[92vh] h-auto py-20 mx-auto">
          
          <AboutMe />
          <Skills />
    </div>
  );
};

export default about;
