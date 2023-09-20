import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface HeaderProps {
  title?: string;
  imageSrc?: string | StaticImageData | undefined;
}

const InnerPageHero: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
    // const divStyle = {
    //     backgroundImage: `url(${headerProps.imageSrc})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center right",
    // };
  
  const imgSrc = headerProps.imageSrc
  const ttl = headerProps.title
  return (
    <div
      className="container mx-auto h-60 rounded-lg mb-20 shadow-lg overflow-hidden"
    >
      <Image src={headerProps?.imageSrc!} alt="" width={100} height={100} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom"}} priority />
    </div>
  );
};

export default InnerPageHero;
