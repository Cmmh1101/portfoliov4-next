import { Project } from '@/components/interfaces/Project'
import Link from 'next/link'
import React from 'react'

interface Props {
    project: Project
}

const ProjectItem: React.FC<{project: Project | undefined}> = ({project})  => {
  return (
    <Link href={`/projects/${project?.name}`} key={project?.name}>{project?.name}</Link>
  )
}

export default ProjectItem