export interface Project {
  name: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string;
  status: ProjectStatus;
  clientType: ClientType;
  category: string;
  problemSolved?: string;
  clientFeedback?: string | undefined;
  timeToBuild?: string;
  teamSize?: string;
  toolsUsed?: string;
  liveLink?: string;
  githubRepo?: string;
  tags?: string[];
  gallery?: ImageProps[];
  features?: string[];
}
  
export interface ImageProps {
  src: string;
  alt: string;
}

export type ProjectStatus =
  | "completed"
  | "in progress"
  | "archived";

export type ClientType =
  | "Client Project"
  | "Personal Project"
  | "Nonprofit Project"
  | "Hackathon";
