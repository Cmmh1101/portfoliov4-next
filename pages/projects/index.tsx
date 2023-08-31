import React from "react";
import { getAllProjects } from "@/components/data/projectsData";
import Link from "next/link";

const Projects = () => {
    const projects = getAllProjects()
  return (
    <div>
          <h1>My recent projects</h1>
          <ul>
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
          </ul>
    </div>
  );
};

export default Projects;
