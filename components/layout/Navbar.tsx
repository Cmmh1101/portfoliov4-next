import { useTheme } from "@/components/context/ThemeModeContext";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import logo from "../../public/logoblue.png"

const Navbar = () => {
  const { handleToggleTheme, darkMode } = useTheme();
  return (
    <div className="w-full container flex justify-between items-center h-20 mx-auto">
          <Link href="/" className="w-52 h-auto"><Image src={logo} width={200} height={200} alt="Logo" style={{objectFit: "cover", objectPosition:"center"}} /></Link>
          <NavLinks />
      <button onClick={handleToggleTheme}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Navbar;
