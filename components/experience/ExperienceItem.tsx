import React from 'react'

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
      <div>Name:{experience.name}
          <p>Title:{ experience.title}</p>
      </div>
  )
}

export default ExperienceItem