import React, { Children } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainWrapper = ({ children }: Props) => {
  return <main className="min-h-[90vh] h-auto mx-auto">{children}</main>;
};

export default MainWrapper;