import { StaticImageData } from "next/image";
import React from "react";

interface HeaderProps {
  title?: string;
  imageSrc?: string | StaticImageData;
}

const InnerPageHero: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
    const divStyle = {
        backgroundImage: `url(${headerProps.imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
      };
  return (
    <div
      className="container mx-auto h-60 rounded-lg mb-20"
      style={divStyle}
    >
    </div>
  );
};

export default InnerPageHero;
