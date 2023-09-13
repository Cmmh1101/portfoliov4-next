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
        className={darkMode ? "dark-bg" : "light-bg"}
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
