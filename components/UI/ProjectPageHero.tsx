import { StaticImageData } from "next/image";
import React from "react";
import Header from "./Header";

interface HeaderProps {
  title?: string;
  subheading?: string;
  imageSrc?: string | StaticImageData | undefined;
  projectStatus?: string;
    projectTags?: string[];
}

const ProjectPageHero: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
  const divStyle = {
    backgroundImage: `url(${headerProps.imageSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="lg:container w-full mx-0 md:mx-auto h-60 md:h-80  lg:rounded-lg mb-20 shadow-lg flex justify-center flex-col items-center relative z-0 overflow-hidden"
      style={divStyle}
    >
      <Header title={headerProps.title} customClass="text-white z-20" />
          {headerProps.subheading && <p>{headerProps.subheading}</p>}
          {headerProps.projectStatus && <p className="my-5">Project status: <span className={`${headerProps.projectStatus === "completed" ? "bg-green-100 text-green-900" : headerProps.projectStatus === "in progress" ? "bg-yellow-100 text-yellow-800" : "bg-gray-200 text-gray-700"} p-2 rounded-md capitalize`}>{headerProps.projectStatus}</span></p>}
          <div className="my-5">{headerProps.projectTags?.map((tag, i) => {
        return (<span key={i} className="bg-gray-800 mr-2 p-2 rounded-md capitalize">{tag}</span>)
      })}</div>
      <div className="absolute top-0 hero-image-overlay bg-black opacity-90" />
    </div>
  );
};
export default ProjectPageHero;
