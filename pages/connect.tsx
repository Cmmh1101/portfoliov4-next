import React from "react";
import Connect from "../components/contact/Connect";
import Header from "../components/UI/Header";
import InnerPageHero from "../components/UI/InnerPageHero";
import MainWrapper from "../components/UI/MainWrapper";

type Props = {};

const contact = (props: Props) => {
  return (
    <MainWrapper>
      <InnerPageHero imageSrc="/images/general/connect.jpg" />
      <Header title="Ways to connect" />
      <Connect />
    </MainWrapper>
  );
};

export default contact;
