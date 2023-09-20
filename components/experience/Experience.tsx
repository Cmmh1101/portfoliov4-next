import React, { useEffect, useState } from "react";
import Header from "../UI/Header";
import ExperienceItem from "./ExperienceItem";
import Head from "next/head";
import experience, { getAllExperiences } from "../../data/experienceData"
import { GetStaticProps, NextPage } from "next";

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

interface ExperienceProps {
  experienceData: ExperienceItemProps[];
}

const Experience: NextPage<ExperienceProps> = ({ experienceData }) => {
  const data = experienceData
  console.log({data})
  const [activeItem, setActiveItem] = useState<ExperienceItemProps | undefined>(experience[0]);
  console.log("experienceData:", experienceData);
  console.log("activeItem:", activeItem);

  const activeName = activeItem?.name.split("-").join(" ").toUpperCase();

  const handleExperienceClick = (name: string) => {
    const newActive: ExperienceItemProps | undefined = experience?.find(
      (item) => item.name === name
    );
    setActiveItem(newActive);
  };

  // useEffect(() => {
  //   setActiveItem(experienceData[0])
  // }, [])

  return (
    <>
      <Head>
        <title>Carla Montano | Experience</title>
        <meta name="description" content="Carla Montano | Tech Experience" />
      </Head>
      <main className="w-full">
        <Header title="Experience" />
        <div className="flex w-full mt-10">
          <div className="w-40">
            {experience?.map((item, i) => (
              <button
                key={i}
                onClick={() => handleExperienceClick(item.name)}
                className={`w-full p-3 mb-5 ${
                  item.name === activeItem?.name
                    ? "bg-blue-600 arrow text-white"
                    : ""
                }`}
              >
                {item.name.split("-").join(" ").toUpperCase()}
              </button>
            ))}
          </div>
          <div className="w-full pl-10 md:pl-20">
            {activeItem && <ExperienceItem experience={activeItem} />}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const allExperiencesData: ExperienceItemProps[] = await experience;
  
    return {
      props: {
        experienceData: allExperiencesData,
      },
    };
  } catch (error) {
    console.error("Error fetching experience data:", error);
    return {
      props: {
        experienceData: [],
      },
    };
  }
};

export default Experience;