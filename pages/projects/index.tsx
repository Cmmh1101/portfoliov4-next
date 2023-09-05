import React from "react";
import { getAllProjects } from "@/components/data/projectsData";
import Link from "next/link";
import Header from "../../components/UI/Header"
import ProjectsList from "@/components/components/projects/ProjectsList";

const Projects = () => {
    const projects = getAllProjects()
  return (
    <div>
          <ProjectsList projects={projects} title="Recent Projects" />
    </div>
  );
};

export default Projects;
