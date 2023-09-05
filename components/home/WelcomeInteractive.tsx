import Link from "next/link";
import React from "react";
import { Rock_Salt } from "next/font/google";

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
    url: "/contact",
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
              <Link
                href={link.url}
                key={i}
                className=" px-5 my-5 xl:my-0 mx-5 py-2 text-2xl  font-semibold rounded-md border-t-2 border-r-2 border-b-2 border-l-2 border-t-black border-r-black border-blue-200 opacity-75 hover:border-t-blue-200 hover:border-r-blue-200 hover:opacity-100 transition ease-in-out duration-1000 hover:border-t-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainHero;
