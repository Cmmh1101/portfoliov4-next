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
        <h2 className="text-6xl hero-title md:text-5xl font-bold mb-5">
          Welcome to my portfolio <br />{" "}
        </h2>
        <p className={`${rockSalt.className} text-5xl text-blue-600 my-3 -rotate-6`}>
          {inputName.toUpperCase()},
        </p>
        <p className="mt-3 text-5xl">It's nice to meet you!</p>
        <p className="font-medium text-3xl mb-20">
          Here you can learn more about...
        </p>
        <div className="mt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {links.map((link, i) => {
            return (
              <div key={i} className="my-5 xl:my-0 mx-5">
                <ButtonLink title={link.title} url={link.url} internal />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainHero;
