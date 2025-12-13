import { StaticImageData } from "next/image";
import React from "react";
import Header from "./Header";

interface HeaderProps {
  title?: string;
  imageSrc?: string | StaticImageData | undefined;
}

const InnerPageHero: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
  const divStyle = {
    backgroundImage: `url(${headerProps.imageSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="lg:container w-full mx-0 md:mx-auto h-60 md:h-80  lg:rounded-lg mb-20 shadow-lg flex justify-center items-center relative z-0 overflow-hidden"
      style={divStyle}
    >
      <Header title={headerProps.title} customClass="text-white z-20" />
      <div className="absolute top-0 hero-image-overlay bg-black opacity-60" />
    </div>
  );
};
export default InnerPageHero;
