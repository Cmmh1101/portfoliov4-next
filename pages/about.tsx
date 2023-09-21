import React from "react";
import Header from "../components/UI/Header";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/aboutMe/Skills";
import InnerPageHero from "../components/UI/InnerPageHero";
import MainWrapper from "../components/UI/MainWrapper";

const about = () => {
  return (
    <MainWrapper>
      <InnerPageHero imageSrc="/images/general/bootcamp-search.jpg" />
      <AboutMe />
      <Skills />
    </MainWrapper>
  );
};

export default about;
