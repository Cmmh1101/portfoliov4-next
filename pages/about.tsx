import React from "react";
import Header from "../components/UI/Header";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/aboutMe/Skills";
import InnerPageHero from "../components/UI/InnerPageHero";
import MainWrapper from "../components/UI/MainWrapper";
import FinalCTA from "../components/UI/FinalCTA";

const about = () => {
  return (
    <MainWrapper>
      <InnerPageHero imageSrc="/images/general/bootcamp-search.jpg" title="About Me" />
      <AboutMe />
      <Skills />
      <FinalCTA imageSrc="/images/general/Carla-Montano-Profile-Photo-4.png" />
    </MainWrapper>
  );
};

export default about;
