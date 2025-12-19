import { useTheme } from "@/components/context/ThemeModeContext";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import logo from "../../public/logoblue.png";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const { handleToggleTheme, darkMode } = useTheme();

  const handleToggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 md:px-0 border-b border-black/5 dark:border-white/10 shadow-md bg-[#02012e] lg:bg-white/80 lg:dark:bg-[#02012e]/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center h-20 text-3xl">
        <Link href="/" className="w-52 h-auto z-50 p-6">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "auto",
              height: "auto",
            }}
            priority
          />
        </Link>
        <NavLinks openNav={openNav} handleToggleNav={handleToggleNav} />
        <button
          className="text-white"
          aria-label="Aria Theme Toggle"
          onClick={handleToggleTheme}
        >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <button
          aria-label="Aria Navbar Toggle"
          className="lg:hidden text-white"
          onClick={handleToggleNav}
        >
          {openNav ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
