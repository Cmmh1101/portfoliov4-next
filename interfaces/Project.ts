export interface Project {
  name: string;
  title: string;
  date: string;
  image: string;
  description: string;
  alt: string;
  featured: boolean;
  type: string;
  technologies: string;
  all: boolean;
  customClass: string;
  pageLink: string;
  gitHub: string;
  images: ImageProps[] | undefined
}
  
export interface ImageProps {
  src: string;
  alt: string;
}