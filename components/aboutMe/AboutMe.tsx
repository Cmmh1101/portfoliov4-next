import React from "react";
import { aboutMe } from "../../data/aboutMeData";
import Image from "next/image";
import photo from "../../public/images/general/profile-carla.png";
import Header from "../UI/Header";

const AboutMe = () => {
  return (
    <section className="mb-5">
      <Header title="About Me" />
      <div className="flex justify-center items-center flex-col md:flex-row-reverse">
        <div className="md:w-[100%]">
          <Image
            src={photo}
            alt=""
            width={300}
            height={300}
            className="mx-auto my-5 md:my-0"
          />
        </div>
        <div className="mb-3 md:pr-5">
          {aboutMe.map((paragraph: string, i: number) => {
            console.log(paragraph[i]);
            return (
              <p key={i} className="mt-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
