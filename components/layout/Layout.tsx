import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/components/context/ThemeModeContext";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
    const { darkMode, handleToggleTheme } = useTheme();
  return (
    <>
      <Navbar />
      <main style={darkMode ? { color: "white", backgroundColor: 'black' } : { color: "black", backgroundColor: 'white' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
