import { Project } from "@/components/interfaces/Project";
import Link from "next/link";
import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiCssmodules,
  SiReact,
  SiGatsby,
  SiGraphql,
  SiContentful,
  SiMdx,
  SiStyledcomponents,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiWordpress,
} from "react-icons/si";
import TechWithIcons from "./TechWithIcons";

const SingleProject: React.FC<{ project: Project | undefined }> = ({
  project,
}) => {
  const technologies = project?.technologies.trim().split(" ").filter(Boolean);
  const sentences = project?.description.split(".");

  // const techIcon = technologies?.map((tech, i) => {
  //     return (
  //         <div className="mx-3 h-20 flex  flex-col justify-evenly">
  //             {tech.toLowerCase() === 'css' ? <><IoLogoCss3 className="mx-auto" /><p>{tech}</p></> : tech.toLowerCase() === 'tailwindcss' ? <><SiTailwindcss className="mx-auto" /><p>{tech}</p> </>: tech.toLowerCase() === 'typescript' ? <><SiTypescript className="mx-auto" /><p>{tech}</p></> : tech.toLowerCase() === "nextjs" ? <><SiNextdotjs className="mx-auto" /><p>{tech}</p></> : tech.toLowerCase() === "modularcss" ? <><SiCssmodules className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "reactjs" ? <><SiReact className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "gatsby" ? <><SiGatsby className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "graphql" ? <><SiGraphql className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "contentful" ? <><SiContentful className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "mdx" ? <><SiMdx className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "styled-component" ? <><SiStyledcomponents className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "mongodb" ? <><SiMongodb className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "nodejs" ? <><SiNodedotjs className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "express" ? <><SiExpress className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "reactstrap" ? <><SiBootstrap className="mx-auto text-black bg-white" /><p>{tech}</p></> : tech.toLowerCase() === "wordpress" ? <><SiWordpress className="mx-auto text-black bg-white" /><p>{tech}</p></> : <p>{tech}</p>}
  //             </div>
  //     )
  // } )
  console.log(technologies);

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
