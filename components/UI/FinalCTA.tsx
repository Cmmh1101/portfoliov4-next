import { StaticImageData } from "next/image";
import React from "react";
import Header from "./Header";
import ButtonLink from "./ButtonLink";

interface HeaderProps {
  title?: string;
  imageSrc?: string | StaticImageData | undefined;
}

const FinalCTA: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
  const divStyle = {
    backgroundImage: `url(${headerProps.imageSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="lg:container w-full mx-0 md:mx-auto h-60 md:h-80  lg:rounded-lg mb-20 shadow-lg flex flex-col justify-center items-center p-20 relative z-0 overflow-hidden text-center mt-10 text-white"
      style={divStyle}
    >
      <Header
        subTitle="Let's build something great together."
        customClass="z-20"
      />
      <div className="absolute top-0 hero-image-overlay bg-black opacity-60" />
      <p className="mb-10">
        I'm currently open to opportunities in frontend, full-stack, and web
        application development. <br />If you'd like to discuss a role, a project, or
        a collaboration, I'd love to hear from you.
          </p>
        <ButtonLink title="Get in Touch" url="/connect" internal />
    </div>
  );
};
export default FinalCTA;
