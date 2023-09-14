import React from "react";
import { getAllProjects } from "@/components/data/projectsData";
import Link from "next/link";
import Header from "../../components/UI/Header"
import ProjectsList from "@/components/components/projects/ProjectsList";
import InnerPageHero from "@/components/components/UI/InnerPageHero";

const Projects = () => {
    const projects = getAllProjects()
  return (
    <div className="pt-20">
      <InnerPageHero imageSrc="/images/general/road.jpeg" />
          <ProjectsList projects={projects} title="Recent Projects" />
    </div>
  );
};

export default Projects;
