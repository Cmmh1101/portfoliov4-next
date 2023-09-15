import { useTheme } from "@/components/context/ThemeModeContext";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import logo from "../../public/logoblue.png"
import { AiOutlineClose } from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const { handleToggleTheme, darkMode } = useTheme();

  const handleToggleNav = () => {
    setOpenNav(!openNav)
  }
  return (
    <div className="w-full container flex justify-between items-center h-20 mx-auto shadow-b-xl shadow-b-black z-20">
      <Link href="/" className="w-52 h-auto z-50"><Image src={logo} width={200} height={200} alt="Logo" style={{ objectFit: "cover", objectPosition: "center" }} priority /></Link>
      <NavLinks openNav={openNav} handleToggleNav={handleToggleNav} />
      <button onClick={handleToggleTheme}>
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <button className="lg:hidden" onClick={handleToggleNav}>
      
        {openNav ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
     
    </div>
  );
};

export default Navbar;
