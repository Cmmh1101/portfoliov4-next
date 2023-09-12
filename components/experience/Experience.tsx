import React, { useEffect, useState } from "react";
import experience from "../../data/experienceData";
import Header from "../UI/Header";
import ExperienceItem from "./ExperienceItem";

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
  const [activeItem, setActiveItem] = useState<ExperienceItemProps>();
  useEffect(() => {
    setActiveItem(experience[0]);
  }, []);
  const activeName = activeItem?.name.split("-").join(" ").toUpperCase();

  const handleExperienceClick = (name: string) => {
    const newActive: ExperienceItemProps | undefined = experience.find(
      (item) => item.name === name
    );
    setActiveItem(newActive);
  };

  return (
    <main className="w-full">
      <Header title="Experience" />
      <div className="flex w-full mt-10">
        <div className="w-40 ">
          {experience.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => handleExperienceClick(item.name)}
                className={`w-full p-3 my-3 ${item.name === activeItem?.name ? "bg-blue-600 arrow text-white" : ""}`}
              >
                {item?.name.split("-").join(" ").toUpperCase()}
              </button>
            );
          })}
        </div>
        <div className='w-full pl-10'>
          <ExperienceItem experience={activeItem!} />
        </div>
      </div>
    </main>
  );
};

export default Experience;
