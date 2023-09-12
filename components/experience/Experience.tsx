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
    <main>
      <Header title="Experience" />
      <div className="flex">
        <div className="w-40">
          {experience.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => handleExperienceClick(item.name)}
                className="mx-3"
              >
                {item?.name.split("-").join(" ").toUpperCase()}
              </button>
            );
          })}
        </div>

        <div>
          <ExperienceItem experience={activeItem!} />
        </div>
      </div>
    </main>
  );
};

export default Experience;
