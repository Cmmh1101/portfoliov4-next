import React, { useMemo, useState } from "react";
import Header from "../UI/Header";
import experience from "../../data/experienceData";
import ExperienceItem from "./ExperienceItem";
import Head from "next/head";

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
        className={`w-full p-3 mb-5 ${
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
        <div className="flex w-full mt-10">
          <div className="w-40">{buttons}</div>
          <div className="w-full pl-10 md:pl-20">
            {activeItem && <ExperienceItem experience={activeItem} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
