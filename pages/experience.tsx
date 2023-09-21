import React from "react";
import Experience from "../components/experience/Experience";
import InnerPageHero from "../components/UI/InnerPageHero";
import MainWrapper from "../components/UI/MainWrapper";

const experience = () => {
  return (
    <MainWrapper>
      <InnerPageHero imageSrc="/images/general/road.jpeg" />
      <Experience />
    </MainWrapper>
  );
};

export default experience;
