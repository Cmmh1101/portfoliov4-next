import { Project } from "@/components/interfaces/Project";
import Link from "next/link";
import React from "react";
import TechWithIcons from "./TechWithIcons";
import ButtonLink from "../UI/ButtonLink";

const SingleProject: React.FC<{ project: Project | undefined }> = ({
  project,
}) => {
  const technologies = project?.technologies.trim().split(" ").filter(Boolean);
  const sentences = project?.description.split(".");

  return (
    <article className="container pt-20 mx-auto">
      <h2 className="text-3xl mb-5">{project?.title}</h2>
      <div className="mb-20">
      {sentences?.map((paragraph, i) => {
        return (
          <p key={i} className="mb-5">
            {paragraph}
          </p>
        );
      })}
        </div>
      <TechWithIcons technologies={technologies} />
      <div className=" mt-10 flex justify-center mx-auto mb-20">
        <ButtonLink url={project?.pageLink!} title="Live Site" />
        <ButtonLink url={project?.pageLink!} title="GitHub" />
        
      </div>
    </article>
  );
};

export default SingleProject;
