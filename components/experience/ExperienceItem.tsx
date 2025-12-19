import React from "react";
import { SiCheckmarx } from "react-icons/si";
import Image from "next/image";

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

const ExperienceItem: React.FC<{ experience: ExperienceItemProps }> = ({
  experience,
}) => {
  const descriptionArray = experience?.description.split(".");
  return (
    <div className="mt-10 md:mt-0">
      <div className="flex items-center">
        {experience?.image && (
          <div className="w-1/4 mr-2">
          <Image
            src={experience?.image!}
            alt="Company Logo"
            width={120}
            height={120}
            className="mr-3 rounded-md bg-[#010024] block p-3"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "auto",
              height: "auto",
            }}
          />
            </div>
        )}
        <h2 className="font-bold text-2xl md:text-3xl">{experience?.title}</h2>
      </div>
      <p className="my-3 text-lg md:text-xl font-semibold">
        {" "}
        {experience?.startDate} - {experience?.endDate}
      </p>
      <p className="my-3 text-lg md:text-xl">
        Location: {experience?.location}
      </p>
      <h3 className="my-5 text-lg md:text-2xl font-bold">Role Description:</h3>
      <ul>
        {descriptionArray?.map((description, i) => {
          return (
            <li className="my-5 text-md md:text-lg lg:text-xl" key={i}>
              {description !== "" && (
                <>
                  <SiCheckmarx className="float-left mr-2 text-blue-400" />{" "}
                  {description}
                </>
              )}
            </li>
          );
        })}
      </ul>
      <p className="my-3 text-xl"> {experience?.technologies}</p>
    </div>
  );
};

export default ExperienceItem;
