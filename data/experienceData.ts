const experience = [
  {
      name: "in-motion-web-solutions",
      title: "In Motion Web Solutions LLC | Founder & Developer",
      startDate: "Aug 2024",
      endDate: "Present",
      location: "Remote (USA/LATAM)",
      image: "/images/general/in-motion-web-Solutions-logo.png",
      description:
        "Founded and operate a digital agency building modern websites and custom tech solutions for small businesses and nonprofits. Designed and developed WordPress and React-based web platforms with SEO optimization, Stripe integration, Airtable and Zapier automations. Delivered complete solutions including UI/UX design, performance optimization, branding, and content strategy. Built and launched School of Hope International, seamlessly integrating a custom WordPress frontend with the Edugogo platform for bilingual virtual learning. Currently developing a tech education platform and community under The Carla Montano & Tu Camino Tech brand.",
      alt: "In Motion Web Solutions Logo",
      technologies: "HTML | CSS | NextJs | React Native | Reactstrap | Bootstrap | Typescript | Express | SQL | Wordpress | Airtable | Zapier | Google Suite | Analytics | Supabase",
    },
      {
    name: "green-mountain-technology",
    title: "Green Mountain | Software Engineer",
    startDate: "Oct 2021",
    endDate: "July 2025",
    location: "Remote (USA)",
    description:
      "Led frontend and full stack development of enterprise web tools for internal and external use. Migrated legacy apps to modern stacks using Reactjs, TypeScript, C#, Nextjs, SQL, and SCSS. Strengthened app security and accessibility while improving UX. Collaborated cross-functionally with marketing, product, and operations teams during rebranding initiatives. Acted as Scrum Master and Team Lead, facilitating sprints, pair programming, code reviews, testing, and documentation. Collaborated across squads, troubleshooted production bugs, and contributed to department-wide initiatives.",
    image: "/images/general/Green_Mountain-logo.jpg",
    alt: "Company Logo",
    technologies:
      "ReactJs | TypeScript | C# | Sass | Tailwind | Storybook | Express | Python | Docker | SQL | MongoDb | PostgreSQL | Jira | Confluence | GitLab | Testing | GitKraken | Datadog | Sentry",
  },
  {
    name: "parsity-full-stack-bootcamp",
    title: "Parsity Bootcamp | Mentor",
    startDate: "Mar 2021",
    endDate: "Present",
    location: "Remote",
    image: "/images/general/parsity-logo.jpeg",
    description:
      "Provide 1-on-1 mentorship to bootcamp students in full stack JavaScript development. Conduct code reviews, offer debugging support, and explain advanced programming concepts. Guide students on Reactjs, Nextjs, Nodejs, Express, MongoDB, Redux, and version control workflows.",
    alt: "Project demo",
    technologies: "HTML | CSS | Javascript | ReactJs | Reactstrap | NodeJs | Express | Mongo | Typescript | SQL",
  },
    {
      name: "freedom-prep-academy",
      title: "Freedom Prep Schools, Memphis TN | Spanish & Coding Teacher",
      startDate: "Aug 2019",
      endDate: "Oct 2021",
      location: "Memphis, TN",
      image: "/images/general/freedom-prep-academy-logo.png",
      description:
        "Taught Spanish I & II, Heritage Spanish, and Intro to Computer Science to middle and high school students. Developed engaging tech-based lesson plans and integrated platforms like Code.org, Google Classroom, and Schoology. Fostered student growth while promoting digital literacy and bilingual education.",
      alt: "Project demo",
      technologies: "PowerSchool | Schoology | Canva | Google Suite",
    },
  ];

export default experience;
  
export function getAllExperiences() {
  return experience;
}