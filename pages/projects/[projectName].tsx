import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getAllProjects, getProjectByName } from '@/components/data/projectsData';
import { Project } from '@/components/interfaces/Project';
import SingleProject from '@/components/components/project-detail/SingleProject';
import ProjectHeader from '@/components/components/project-detail/ProjectHeader';

type Props = {};

const SingleProjectPage = (props: Props) => {
  const router = useRouter();
  const { projectName } = router.query;
  const [project, setProject] = useState<Project | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (projectName) {
      const fetchProject = async () => {
        const fetchedProject = await getProjectByName(projectName as string);
        setProject(fetchedProject);
        setLoading(false);
      };

      fetchProject();
    }
  }, [projectName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter(item => item.name !== projectName);

  return (
    <div>
      <ProjectHeader title={project.title} imageSrc={project.image} />
      <h1>Single Project Page</h1>
      <h2>{project?.title}</h2>
      <SingleProject project={project} />
      <div className="bg-blue-200">
        <h3>Other Projects:</h3>
        <ul>
          {otherProjects.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProjectPage;