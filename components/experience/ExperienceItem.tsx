import React from 'react'
import Header from '../UI/Header';
import {SiCheckmarx} from 'react-icons/si'
import Image from 'next/image';

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

const ExperienceItem: React.FC<{ experience: ExperienceItemProps }> = ({ experience }) => {
    const descriptionArray = experience?.description.split(".")
  return (
      <div>
          <div className='flex items-center'>
              {experience?.image && <Image src={experience?.image!} alt='' width={100} height={100} className='mr-3 rounded-md hidden md:block' style={{objectFit: 'cover', objectPosition: 'center', width: "auto", height: "auto"}} />}
              <h2 className=' text-2xl md:text-3xl'>{experience?.title}</h2>
          </div>
          <p className='my-3 text-lg md:text-xl font-semibold'> { experience?.startDate} - { experience?.endDate}</p>
          <p className='my-3 text-lg md:text-xl'>Location: {experience?.location}</p>
          <p className='my-5 text-lg md:text-xl'>Role Description:</p>
          <ul>
              {descriptionArray?.map((description, i) => {
                  return (
                      <li className='my-5 text-md md:text-lg lg:text-xl' key={i}>{ description !== "" && <><SiCheckmarx className='float-left mr-2 text-blue-400' /> {description}</>}</li>
              )
          })}
          </ul>
          <p className='my-3 text-xl'> { experience?.technologies}</p>
      </div>
  )
}

export default ExperienceItem