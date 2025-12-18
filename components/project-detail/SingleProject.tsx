import { Project } from "@/components/interfaces/Project";
import React from "react";
import { IoIosCheckmarkCircle, IoIosReturnLeft } from "react-icons/io";
import ButtonLink from "../UI/ButtonLink";
import Gallery from "./Gallery";
import Header from "../UI/Header";
import ProjectPageHero from "../UI/ProjectPageHero";
import Link from "next/link";

const SingleProject: React.FC<{ project: Project | undefined }> = ({
  project,
}) => {
  const technologies = project?.technologies.trim().split(" ").filter(Boolean);
  const sentences = project?.description.split(".");

  return (
    <article className="container mx-auto">
      <ProjectPageHero
        imageSrc={project?.image}
        title={project?.title}
        projectStatus={project?.status}
        projectTags={project?.tags}
      />
<Link href='/projects' className="underline flex justify-end items-center hover:text-blue-500"><IoIosReturnLeft className="mr-2 text-lg" />Back to all projects</Link>
      <div className="mb-20 flex justify-center md:justify-between items-center flex-wrap">
        <div className="w-100 md:w-1/2">
          <Header subTitle="Project Overview" />
          {sentences?.map((paragraph, i) => {
            return (
              <p key={i} className="mb-5">
                {paragraph}
              </p>
            );
          })}
          <div className="flex flex-row bg-slate-600/90 p-3 rounded-md">
            <IoIosCheckmarkCircle className="text-green-400 text-xl w-14 mr-3" />
            <p className="text-white">{project?.problemSolved}</p>
          </div>
        </div>
        <div className="w-100 md:w-1/2 mt-8 flex justify-center md:justify-end">
          <div className="p-4 h-auto bg-gradient-to-b from-[#121c3e] via-[#1c2653] to-[#111827] rounded-lg text-white shadow-md">
            <h3 className="text-2xl">Project Details</h3>
            <p className="my-5">
              Technologies:{" "}
              {technologies?.map((tech, i) => (
                <span key={i} className="inline-block mr-2">
                  {tech.trim()}
                  {i < technologies.length - 1 ? " |" : ""}
                </span>
              ))}
            </p>
            <p className="my-5 capitalize">
              Project Field : <span className="">{project?.category}</span>
            </p>
            <p className="my-5">
              Client Type:{" "}
              <span
                className={`${
                  project?.clientType === "Client Project"
                    ? "bg-blue-100 text-blue-800"
                    : project?.clientType === "Personal Project"
                    ? "bg-purple-100 text-purple-800"
                    : project?.clientType === "Nonprofit Project"
                    ? "bg-green-100 text-green-800"
                    : "bg-pink-100 text-pink-800"
                } p-2 rounded-md capitalize`}
              >
                {project?.clientType}
              </span>
            </p>
            <p className="my-5">Project Timeframe: {project?.timeToBuild}</p>
            <p className="my-5">Team Size: {project?.teamSize}</p>
          </div>
        </div>
      </div>
      {/* TODO: refactor tech with icons!!! */}
      {/* <TechWithIcons technologies={technologies} /> */}
      <Header subTitle="Project Gallery:" customClass="my-10" />
      <Gallery images={project?.gallery!} />
      <div className="mt-10 flex justify-center mx-auto mb-20">
        {project?.liveLink && project.liveLink.trim() !== "" && (
          <ButtonLink url={project?.liveLink!} title="Live Site" />
        )}
        {project?.githubRepo && project.githubRepo.trim() !== "" && (
          <ButtonLink url={project?.githubRepo!} title="GitHub" />
        )}
      </div>
    </article>
  );
};

export default SingleProject;
