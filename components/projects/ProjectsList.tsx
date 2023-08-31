import React from 'react'
import ProjectItem from './ProjectItem'
import { Project } from '@/components/interfaces/Project'

interface Projects {
    projects: Project[];
}

const ProjectsList: React.FC<Projects> = ({projects}) => {
  return (
    <div className="container mx-auto">
        <h3>Other Projects:</h3>
        <div className='grid grid-cols-3'>
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} />
          ))}
        </div>
      </div>
  )
}

export default ProjectsList