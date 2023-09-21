import React, { Children } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainWrapper = ({ children }: Props) => {
  return <main className="lg:container min-h-[90vh] h-auto pt-0 pb-20 lg:py-20 mx-auto">{children}</main>;
  
};

export default MainWrapper;