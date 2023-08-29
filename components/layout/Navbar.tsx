import { useTheme } from "@/components/context/ThemeModeContext";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { handleToggleTheme, darkMode } = useTheme();
  return (
    <div className="w-full container flex justify-between items-center h-10 mx-auto">
          <Link href="/">CMLogo</Link>
          <NavLinks />
      <button onClick={handleToggleTheme}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Navbar;
