import React from "react";
import Connect from "../components/contact/Connect";
import Header from "../components/UI/Header";
import InnerPageHero from "../components/UI/InnerPageHero";

type Props = {};

const contact = (props: Props) => {
  return (
    <div className="container min-h-[90vh] h-auto pt-0 pb-20 lg:py-20 mx-auto">
      <InnerPageHero imageSrc="/images/general/connect.jpg" />
      <Header title="Ways to connect" />
      <Connect />
    </div>
  );
};

export default contact;
