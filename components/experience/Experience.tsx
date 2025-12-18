import React, { useMemo, useState } from "react";
import Header from "../UI/Header";
import experience from "../../data/experienceData";
import ExperienceItem from "./ExperienceItem";
import Head from "next/head";
import FinalCTA from "../UI/FinalCTA";

interface ExperienceItemProps {
  name: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  description: string;
  alt: string;
  technologies: string;
}

const Experience = () => {
  const [activeItem, setActiveItem] = useState<ExperienceItemProps | undefined>(
    experience[0]
  );

  const handleExperienceClick = (name: string) => {
    const newActive: ExperienceItemProps | undefined = experience?.find(
      (item) => item.name === name
    );
    setActiveItem(newActive);
  };

  const buttons = useMemo(() => {
    return experience?.map((item, i) => (
      <button
        key={i}
        onClick={() => handleExperienceClick(item.name)}
        className={`w-60 md:w-full p-3 mb-2 ${
          item.name === activeItem?.name ? "bg-blue-600 arrow text-white" : ""
        }`}
      >
        {item.name.split("-").join(" ").toUpperCase()}
      </button>
    ));
  }, [activeItem]);

  return (
    <>
      <Head>
        <title>Carla Montano | Experience</title>
        <meta name="description" content="Carla Montano | Tech Experience" />
      </Head>
      <main className="w-full">
        <div className="flex flex-col md:flex-row w-full mt-5">
          <div className="w-100 md:w-60 flex flex-wrap flex-row md:flex-col justify-around md:justify-start">{buttons}</div>
          <div className="w-full pl-10 md:pl-20">
            {activeItem && <ExperienceItem experience={activeItem} />}
          </div>
        </div>
        <FinalCTA imageSrc="/images/general/Carla-Montano-Profile-Photo-4.png" />
      </main>
    </>
  );
};

export default Experience;
