import { Project } from "@/components/interfaces/Project";
import React from "react";

// interface Props {
//   project: Project;
// }

const SingleProject: React.FC<{project: Project | undefined}> = ({project}) => {
  return (
    <article className="container mx-auto">
          <h1>SingleProject</h1>
          <h2>{project?.title}</h2>
          <p>{project?.description}</p>
          <p className="text-blue-300">{project?.technologies}</p>
    </article>
  );
};

export default SingleProject;
