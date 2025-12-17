import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getAllProjects,
  getProjectByName,
} from "@/components/data/projectsData";
import { Project } from "@/components/interfaces/Project";
import SingleProject from "@/components/components/project-detail/SingleProject";
import ProjectsList from "@/components/components/projects/ProjectsList";
import MainWrapper from "@/components/components/UI/MainWrapper";

const SingleProjectPage = () => {
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
  const otherProjects = allProjects.filter((item) => item.name !== projectName);

  return (
    <MainWrapper>
      <SingleProject project={project} />
      <ProjectsList projects={otherProjects} title="Other Projects:" />
    </MainWrapper>
  );
};

export default SingleProjectPage;
