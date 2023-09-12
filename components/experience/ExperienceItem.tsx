import React from 'react'
import Header from '../UI/Header';

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

const ExperienceItem: React.FC<{experience: ExperienceItemProps}> = ({experience}) => {
  return (
      <div>
          <Header subTitle={ experience.title } />
          <p className='my-3 text-xl font-semibold'> { experience.startDate} - { experience.endDate}</p>
          <p className='my-3 text-xl '> {experience.location}</p>
          <p className='my-5 text-xl '> { experience.description}</p>
          <p className='my-3 text-xl'> { experience.technologies}</p>
      </div>
  )
}

export default ExperienceItem