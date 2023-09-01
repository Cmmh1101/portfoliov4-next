import React from 'react'
import ProjectItem from './ProjectItem'
import { Project } from '@/components/interfaces/Project'

interface Projects {
    projects: Project[];
}

const ProjectsList: React.FC<Projects> = ({projects}) => {
  return (
    <div className="container py-20 mx-auto">
        <h3>Other Projects:</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center'>
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} />
          ))}
        </div>
      </div>
  )
}

export default ProjectsList