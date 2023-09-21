import { StaticImageData } from "next/image";
import React from "react";

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
      className="lg:container w-full mx-0 md:mx-auto h-60 md:h-80  lg:rounded-lg mb-20 shadow-lg"
      style={divStyle}
    ></div>
  );
};
export default InnerPageHero;
