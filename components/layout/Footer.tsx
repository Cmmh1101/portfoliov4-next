import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center h-10">
      <p>{fullYear} | Carla Montano </p>
    </footer>
  );
};

export default Footer;
