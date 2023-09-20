import React from "react";
import ProjectItem from "./ProjectItem";
import { Project } from "@/components/interfaces/Project";
import Header from "../UI/Header";

interface Projects {
  projects: Project[];
  title?: string;
  subTitle?: string;
  customClass?: string;
}

const ProjectsList: React.FC<Projects> = ({ projects, title, subTitle, customClass }) => {
  return (
    <div className={`container pb-20 mx-auto ${customClass}`}>
      <Header title={title} subTitle={subTitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
