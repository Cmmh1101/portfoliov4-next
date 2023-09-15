import Link from "next/link";
import React from "react";

interface LinkProps {
  url: string;
  title: string;
}

const links = [
  {
    url: "/",
    title: "home",
  },
  {
    url: "/projects",
    title: "projects",
  },
  {
    url: "/about",
    title: "about",
  },
  {
    url: "/experience",
    title: "experience",
  },
  {
    url: "/connect",
    title: "connect",
  },
  {
    url: "/blog",
    title: "blog",
  },
];

const NavLinks: React.FC<{openNav: Boolean, handleToggleNav: () => void}> = ({openNav, handleToggleNav}) => {
    
    
    const hideNav = openNav ? "translate-y-24" : "-translate-y-[1000px]"
  return (
    <nav className={`flex flex-col lg:flex-row justify-around lg:justify-center py-48 lg:py-0 transform capitalize z-10 absolute -top-10 left-0 lg:top-0 lg:h-auto h-screen lg:relative lg:mx-3 text-center bg-white text-black w-full lg:translate-y-0 ${hideNav}`}>
      {links.map((link, i) => {
        return (
          <Link href={link.url} key={i} className="mx-4 text-2xl lg:text-xl" onClick={handleToggleNav}>
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
