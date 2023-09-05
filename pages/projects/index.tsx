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
      {/* <ul>
              {projects.map((project, i) => {
                return (
                    <Link href={`/projects/${project.name}`} key={i}>
                      <li>
                          - Project name: {project.name}
                          -project title: 
                          {project.title}</li>
                          </Link>
                    )
              })}
          </ul> */}
    </div>
  );
};

export default Projects;
