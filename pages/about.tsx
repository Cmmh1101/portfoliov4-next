import React from "react";
import Header from "../components/UI/Header";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/aboutMe/Skills"
import InnerPageHero from "../components/UI/InnerPageHero";

const about = () => {
  return (
    <div className="container min-h-[92vh] h-auto py-20 mx-auto">
           <InnerPageHero imageSrc="/images/general/bootcamp-search.jpg" />
          <AboutMe />
          <Skills />
    </div>
  );
};

export default about;
