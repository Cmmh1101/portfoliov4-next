import Link from "next/link";
import React from "react";
import { Rock_Salt } from "next/font/google";
import ButtonLink from "../UI/ButtonLink";

interface Props {
  inputName: string;
}

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  {
    url: "/projects",
    title: "My Projects",
  },
  {
    url: "/about",
    title: "About Me",
  },
  {
    url: "/experience",
    title: "My Experience",
  },
  {
    url: "/connect",
    title: "Ways To Connect",
  },
];

const MainHero: React.FC<{ inputName: string }> = ({ inputName }) => {
  return (
    <div className="hero-text flex items-center justify-center w-full h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl hero-title font-bold mb-5">
          Welcome to my portfolio <br />
        </h2>
        <p
          className={`${rockSalt.className} text-4xl md:text-6xl text-blue-600 my-5 -rotate-6`}
        >
          {inputName.toUpperCase()},
        </p>
        <p className="font-medium text-2xl md:text-3xl mb-10 md:mb-20">
          Here you can learn more about...
        </p>
        <div className="mt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {links.map((link, i) => {
            return (
              <ButtonLink key={i} title={link.title} url={link.url} internal />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainHero;
