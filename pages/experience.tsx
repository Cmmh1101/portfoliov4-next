import React from "react";
import Experience from "../components/experience/Experience";
import InnerPageHero from "../components/UI/InnerPageHero";

const experience = () => {
  return (
    <div className="container min-h-[92vh] h-auto pt-0 pb-20 lg:py-20 mx-auto">
      <InnerPageHero imageSrc="/images/general/road.jpeg" />
      <Experience />
    </div>
  );
};

export default experience;
