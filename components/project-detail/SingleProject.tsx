import { Project } from "@/components/interfaces/Project";
import React from "react";
import TechWithIcons from "./TechWithIcons";
import ButtonLink from "../UI/ButtonLink";
import Gallery from "./Gallery";
import Header from "../UI/Header";

const SingleProject: React.FC<{ project: Project | undefined }> = ({
  project,
}) => {
  const technologies = project?.technologies.trim().split(" ").filter(Boolean);
  const sentences = project?.description.split(".");

  return (
    <article className="container mx-auto">
      <Header subTitle={project?.title} customClass="pb-5" />
      <div className="mb-20">
        {sentences?.map((paragraph, i) => {
          return (
            <p key={i} className="mb-5">
              {paragraph}
            </p>
          );
        })}
      </div>
      <Header subTitle="Technologies" />
      <TechWithIcons technologies={technologies} />
      <Header subTitle="Quick pick:" customClass="my-10" />
      <Gallery images={project?.images!} />
      <div className=" mt-10 flex justify-center mx-auto mb-20">
        <ButtonLink url={project?.pageLink!} title="Live Site" />
        <ButtonLink url={project?.pageLink!} title="GitHub" />
      </div>
    </article>
  );
};

export default SingleProject;
