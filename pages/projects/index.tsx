import React from "react";
import { getAllProjects } from "@/components/data/projectsData";
import ProjectsList from "@/components/components/projects/ProjectsList";
import InnerPageHero from "@/components/components/UI/InnerPageHero";
import MainWrapper from "@/components/components/UI/MainWrapper";

const Projects = () => {
  const projects = getAllProjects();
  return (
    <MainWrapper>
      <InnerPageHero title="Recent Projects" imageSrc="/images/general/computer-desk.jpg" />
      <ProjectsList projects={projects} />
    </MainWrapper>
  );
};

export default Projects;
