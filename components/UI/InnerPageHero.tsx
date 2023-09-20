import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface HeaderProps {
  title?: string;
  imageSrc?: string | StaticImageData | undefined;
}

const InnerPageHero: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
  const divStyle = {
    backgroundImage: `url(${headerProps.imageSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
  };
return (
<div
  className="container mx-auto h-60 rounded-lg pt-5 mb-20 shadow-lg"
  style={divStyle}
>
</div>
);
};
export default InnerPageHero;
