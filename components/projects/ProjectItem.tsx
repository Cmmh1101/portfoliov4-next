import { Project } from "@/components/interfaces/Project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const technologies = project.technologies.trim().split(' ').filter(Boolean).join(' | ')

  return (
    <Link
      href={`/projects/${project?.name}`}
      key={project?.name}
      className="mx-3 mt-5 p-2 text-white bg-gray-800 rounded-md shadow-none hover:shadow-xl shadow-slate-600 group"
    >
      <Image
        src={project?.image}
        alt={project?.alt!}
        width={200}
        height={200}
        className="rounded-t-md opacity-70 group-hover:opacity-100 transition-all ease-in-out duration-500"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
      <div className="pt-2">
        <h3 className="text-lg ">{project?.title}</h3>
        <div>{technologies}</div>
      </div>
    </Link>
  );
};

export default ProjectItem;
