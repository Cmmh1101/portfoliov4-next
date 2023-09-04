const projects = [
      {
      name: "little-italy-east",
      title: "Restaurant Website",
      date: "06/26/2023",
      image: "/images/projects/little-italy.png",
      description: "This Little Italy East is a new local restaurant which needed a website to start their online presence. This website was developed with Nextjs framework, Tailwind CSS, and Typescript in it's foundation, and some external applications integrations.",
      alt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'NextJs TailwindCSS Typescript',
      all: true,
      customClass: 'front-visible',
      pageLink: "https://littleitalyeast.com/",
      gitHub: "https://github.com/Cmmh1101/little-pizza"
      },
      {
      name: "hope-for-the-nations",
      title: "Non-Profit Organization",
      date: "08/04/2021",
      image: "/images/projects/hope.png",
      description: "Hope For The Nations is a Non-Profit organization based in Memphis TN and Venezuela. The initial phase consist on a web application developed with Nextjs framework, modular CSS, and Typescript in it's foundation, and some external apllications integrations. Check the progress in the live version which is regularly updated and improved. This website is the new home of Hope For The Nations to continue to share their mission and hard work.",
      alt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'NextJs ModularCSS Typescript',
      all: true,
      customClass: 'front-visible',
      pageLink: "https://hopeforthenations7.org",
      gitHub: "https://github.com/Cmmh1101/next-types-hope"
      },
      {
      name: "my-recipes",
      title: "My recipes",
      date: "06/24/2022",
      image: "/images/projects/my-recipes.png",
      description: "My recipes website was developed with the frontend Static Site Generator GatsbyJs, Based on the library ReactJs, GraphQl, headless CMS with Contentful, Formspree for contact form management and React Helmet for SEO optimization.",
      alt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'Gatsby ReactJs GraphQl Contentful CSS',
      all: true,
      customClass: 'front-visible',
      pageLink: "https://my-recipes-project.netlify.app",
      gitHub: "https://github.com/Cmmh1101/recipes"
      },
      {
      name: "blog",
      title: "My Personal Blog",
      date: "06/04/2022",
      image: "/images/projects/blog.png",
      description: "This is my personal blog project developed using GatsbyJs, Styled-Components, CSS, and MDX. For my blog, I decided to use MDX to write the content since it offers the ability to write react components in a markdown file. I enjoyed working on this project and learning this technologies.",
      alt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'Gatsby MDX Styled-Component CSS',
      all: true,
      customClass: 'full-visible',
      pageLink: "https://journey.carlamontano.tech",
      gitHub: "https://github.com/Cmmh1101/my-gatsby-mdx-blog",
      },
      {
      name: "stats",
      title: "Stats",
      date: "08/04/2021",
      image: "/images/projects/react-blog.png",
      description: "Full stack school stack project, using ReactJs, ChartJs, NodeJs, Express y MongoDb. Imported CSV file to MongoDB to utilize provided data",
      alt: "Project demo",
      featured: false,
      type: "fullstack",
      technologies: 'ReactJs MongoDB NodeJs Express',
      all: true,
      customClass: 'full-visible',
      pageLink: "",
      gitHub: "https://github.com/Cmmh1101/school-stats"
      },
      {
      name: "war-game",
      title: "Interactive Game",
      date: "08/04/2021",
      image: "/images/projects/quadruple-war-game.png",
      description: "Quadruple War interactive game was completed as part of a Hackathon in collaboration with a teammate. This project developed with ReactJs, Bootstrap, and CSS animations. With this project I sharpened my GitHub group repo management, programming, teamwork, and collaboration skills",
      alt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'CSS Reactstrap ReactJs',
      all: true,
      customClass: 'front-visible',
      pageLink: "https://quadruple-war-game.netlify.app",
      gitHub: "https://github.com/Cmmh1101/team-war-game"
      },
      {
      name: "language-game",
      title: "Interactive Language Game",
      date: "08/04/2021",
      image: "/images/projects/spanish-english.png",
      description: "This Interactive Language Game was the product of a group hackathon project, this was a learning and rewarding experience for all members of the team. With this project I sharpened my GitHub group repo management, programming, teamwork, and collaboration skills",
      alt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'CSS Reactstrap ReactJs',
      all: true,
      customClass: 'front-visible',
      pageLink: "https://the-jar-game.netlify.app",
      gitHub: "https://github.com/Cmmh1101/amanda_carla_will_aug_21"
      },
      // {
      // name: "job-tracker",
      // title: "Job Application tracker",
      // date: "06/04/2022",
      // image: "/images/projects/job-tracker.png",
      // description: "Full stack app to keep track of your job applications status with a dashboard and options to add, delete, and update for applications and user profile. With this project I put into practice frontend and backend skills with the MERN stack using enterprise level code and learned how to implement StyledComponents in a project",
      // alt: "Project demo",
      // featured: true,
      // type: "fullstack",
      // technologies: 'Styled Components ReactJs Nodejs Express MongoDb Heroku',
      // all: 'true',
      // customClass: 'full-visible',
      // pageLink: "https://job-tracker-prod.herokuapp.com",
      // gitHub: "https://github.com/Cmmh1101/mern-job-tracker"
      // },
      {
      name: "law-firm",
      title: "Law Firm Landing Page",
      date: "08/04/2021",
      image: "/images/projects/law-template.png",
      description: "Full stack Personal blog project, using Reactjs and Typescript for frontend, and node and mongo for backend and database respertively",
      alt: "Project demo",
      featured: false,
      type: "frontend",
      technologies: 'CSS Reactstrap ReactJs',
      all: true,
      customClass: 'front-visible',
      pageLink: "https://law-firm-template.netlify.app",
      gitHub: "https://github.com/Cmmh1101/lawyer-template"
      },
      {
      name: "serving-in-christ",
      title: "Non-Profit Website",
      date: "08/04/2021",
      image: "/images/projects/serving-in-christ.png",
      description: "Project completed in collaboration with Give Camp Memphis volunteers.This project was done with Wordpress Divi theme, some HTML and CSS customizations. With this project I had hand on experience in communicating with the head of the organization, gathering informations and resources needed, getting feedback, working on a small team under pressure to meet the deadline of 36 hours to complete from stratch.",
      alt: "Non-profit",
      featured: true,
      type: "cms",
      technologies: 'CSS WordPress',
      all: true,
      customClass: 'cms-visible',
      pageLink: "https://www.servinginchrist.org/",
      gitHub: ""
      },
      
];

export default projects;

export function getProjectByName(name: string | string[] | undefined) {
      const project = projects.find((project) => project.name === name)
      return project
    }
export function getAllProjects() {
return projects
}
