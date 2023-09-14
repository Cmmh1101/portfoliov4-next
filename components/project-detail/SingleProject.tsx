import { Project } from "@/components/interfaces/Project";
import Link from "next/link";
import React from "react";
import TechWithIcons from "./TechWithIcons";

const SingleProject: React.FC<{ project: Project | undefined }> = ({
  project,
}) => {
  const technologies = project?.technologies.trim().split(" ").filter(Boolean);
  const sentences = project?.description.split(".");

  return (
    <article className="container pt-20 mx-auto">
      <h2 className="text-3xl mb-5">{project?.title}</h2>
      {sentences?.map((paragraph, i) => {
        return (
          <p key={i} className="mb-5">
            {paragraph}
          </p>
        );
      })}
      <TechWithIcons technologies={technologies} />
      <div className="w-80 mt-20 flex justify-around mx-auto">
        <Link
          href={project?.pageLink!}
          className="border-2 border-gray-800 p-3" target="_blank"
        >
          Live Site
        </Link>
        <Link href={project?.gitHub!} className="border-2 border-gray-800 p-3" target="_blank">
          Repo
        </Link>
      </div>
    </article>
  );
};

export default SingleProject;
