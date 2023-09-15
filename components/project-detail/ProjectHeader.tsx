import React from "react";

interface HeaderProps {
  title: string;
  imageSrc?: string;
}

const ProjectHeader: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
    const divStyle = {
        backgroundImage: `url(${headerProps.imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      };
  return (
    <div
      className="container mx-auto h-60 rounded-lg pt-5 shadow-lg"
      style={divStyle}
    >
    </div>
  );
};

export default ProjectHeader;
