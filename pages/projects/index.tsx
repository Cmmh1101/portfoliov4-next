import React from "react";
import { getAllProjects } from "@/components/data/projectsData";
import Link from "next/link";
import Header from "../../components/UI/Header";
import ProjectsList from "@/components/components/projects/ProjectsList";
import InnerPageHero from "@/components/components/UI/InnerPageHero";
import MainWrapper from "@/components/components/UI/MainWrapper";

const Projects = () => {
  const projects = getAllProjects();
  return (
    <MainWrapper>
      <InnerPageHero imageSrc="/images/general/computer-desk.jpg" />
      <ProjectsList projects={projects} title="Recent Projects" />
    </MainWrapper>
  );
};

export default Projects;
