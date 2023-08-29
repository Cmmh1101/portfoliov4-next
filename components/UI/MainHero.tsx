import Link from "next/link";
import React from "react";

// interface Props {
//   enTitle?: string;
//   enText: string;
//   spTitle?: string;
//   spText: string;
//   enButton: string;
//   esButton: string;
// }

const MainHero = () => {
  return (
    <div className="hero-text flex items-center justify-center w-full h-screen">
      <div className="container mx-auto text-center z-20">
        <h1 className="text-6xl hero-title md:text-8xl text-white font-bold mb-5">
          Carla Montano
        </h1>
        <p className="font-medium text-gray-200 text-2xl mb-6">
          {" "}
          Software Engineer
        </p>
        <Link href="/projects" className="px-5 py-2 text-2xl text-white font-semibold rounded-full border border-red-200 bg-blue-700 hover:text-white hover:bg-blue-800  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
          Go To Projects
        </Link>
        </div>
    </div>
  );
};

export default MainHero;
