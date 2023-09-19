import React from "react";
import Header from "../UI/Header";
import TechWithIcons from "../project-detail/TechWithIcons";
import {skills} from "@/components/data/aboutMeData"

const Skills = () => {
  return (
    <div>
      <Header subTitle="Skills" />
      <TechWithIcons technologies={skills} />
    </div>
  );
};

export default Skills;
