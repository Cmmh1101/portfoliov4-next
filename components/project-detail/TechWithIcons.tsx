import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiCssmodules,
  SiReact,
  SiGatsby,
  SiGraphql,
  SiContentful,
  SiMdx,
  SiStyledcomponents,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiWordpress,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiGithub,
  SiGitlab,
  SiStorybook,
  SiCsharp,
  SiGitkraken,
  SiConfluence,
  SiJira,
  SiFigma,
} from "react-icons/si";

const TechWithIcons: React.FC<{ technologies: string[] | undefined }> = (
  technologies
) => {
  const iconClasses =
    "text-black bg-white mx-auto mb-3 text-5xl rounded-md group-hover:-rotate-45 duration-1000 p-1";
  const pClasses =
    "opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000";
  return (
    <div className="mx-3 flex justify-evenly flex-wrap">
      {technologies?.technologies?.map((tech: string, i: number) => {
        return (
          <div key={i} className="w-28 my-3 text-center group">
            {tech.toLowerCase() === "css" ? (
              <>
                <IoLogoCss3 className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "scss" ? (
              <>
                <SiSass className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "html" ? (
              <>
                <SiHtml5 className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "javascript" ? (
              <>
                <SiJavascript className="text-white bg-black mx-auto mb-3 text-5xl rounded-md group-hover:-rotate-45 duration-1000" />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "figma" ? (
              <>
                <SiFigma className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "tailwindcss" ? (
              <>
                <SiTailwindcss className={iconClasses} />
                <p className={pClasses}>{tech}</p>{" "}
              </>
            ) : tech.toLowerCase() === "typescript" ? (
              <>
                <SiTypescript className="text-white bg-black mx-auto mb-3 text-5xl rounded-md group-hover:-rotate-45 duration-1000" />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "git" ? (
              <>
                <SiGit className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "github" ? (
              <>
                <SiGithub className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "gitlab" ? (
              <>
                <SiGitlab className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "storybook" ? (
              <>
                <SiStorybook className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "bootstrap" ? (
              <>
                <SiBootstrap className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "c#" ? (
              <>
                <SiCsharp className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "gitkraken" ? (
              <>
                <SiGitkraken className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "confluence" ? (
              <>
                <SiConfluence className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "jira" ? (
              <>
                <SiJira className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "nextjs" ? (
              <>
                <SiNextdotjs className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "modularcss" ? (
              <>
                <SiCssmodules className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "reactjs" ? (
              <>
                <SiReact className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "gatsby" ? (
              <>
                <SiGatsby className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "graphql" ? (
              <>
                <SiGraphql className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "contentful" ? (
              <>
                <SiContentful className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "mdx" ? (
              <>
                <SiMdx className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "styled-component" ? (
              <>
                <SiStyledcomponents className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "mongodb" ? (
              <>
                <SiMongodb className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "nodejs" ? (
              <>
                <SiNodedotjs className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "express" ? (
              <>
                <SiExpress className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "reactstrap" ? (
              <>
                <SiBootstrap className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : tech.toLowerCase() === "wordpress" ? (
              <>
                <SiWordpress className={iconClasses} />
                <p className={pClasses}>{tech}</p>
              </>
            ) : (
              <p className={pClasses}>{tech}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechWithIcons;
