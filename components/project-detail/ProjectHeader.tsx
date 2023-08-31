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
        backgroundPosition: "top center",
        height: "40vh"
      };
  return (
    <div
      className="w-full"
      style={divStyle}
    >
    </div>
  );
};

export default ProjectHeader;
