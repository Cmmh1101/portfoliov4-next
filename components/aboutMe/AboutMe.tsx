import React from "react";
import {aboutMeSections } from "../../data/aboutMeData";
import Image from "next/image";
import Header from "../UI/Header";

const AboutMe = () => {
  return (
    <section className="mb-5">
      <div className="flex justify-center items-center flex-col">
        {aboutMeSections.map((content, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center py-20">
              <div className={`flex flex-col md:flex-row ${i % 2 !== 0 &&'md:flex-row-reverse'}`}>
                <div className="md:w-1/2">
                  <div className="section-image relative mx-auto">
                  <Image
                    src={content.image}
                    alt=""
                    fill
                    className="mx-auto my-5 md:my-0 object-cover object-top rounded-2xl"
                    />
                    </div>
                </div>
                <div className="md:w-1/2 mb-3 md:pr-5 flex flex-col justify-center items-start">
                  <Header subTitle={content.title} />
                  {content.content.map((paragraph, index) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: paragraph }} key={index} className="mb-4" />
                    )
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutMe;
