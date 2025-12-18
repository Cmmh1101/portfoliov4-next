import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/components/context/ThemeModeContext";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const { darkMode } = useTheme();
  return (
    <>
      <Navbar />
      <main
        className={`${
          darkMode ? "dark-bg text-white" : "light-bg text-black"
        } px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pb-10 transition-colors duration-300`}
        style={
          darkMode
            ? { color: "white" }
            : { color: "black" }
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
