import React from "react";
import { getAllProjects } from "@/components/data/projectsData";

const Projects = () => {
    const projects = getAllProjects()
  return (
    <div>
          <h1>My recent projects</h1>
          <ul>
              {projects.map((project, i) => {
                  return (
                      <li key={i}>
                          - Project name: {project.name}
                          -project title: 
                          {project.title}</li>
                  )
              })}
          </ul>
    </div>
  );
};

export default Projects;
