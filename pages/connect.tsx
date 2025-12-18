import React from "react";
import Connect from "../components/contact/Connect";
import Header from "../components/UI/Header";
import InnerPageHero from "../components/UI/InnerPageHero";
import MainWrapper from "../components/UI/MainWrapper";
import ContactForm from "../components/contact/ContactForm";

type Props = {};

const contact = (props: Props) => {
  return (
    <MainWrapper>
      <InnerPageHero imageSrc="/images/general/connect.jpg" />
      <Header title="Ways to connect" />
      <div className="flex flex-wrap flex-col md:flex-row">
        <Connect />
        <ContactForm />
      </div>
    </MainWrapper>
  );
};

export default contact;
