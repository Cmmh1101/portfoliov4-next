const experience = [
    {
      name: "green-mountain",
      title: "Green Mountain | Software Engineer",
      startDate: "Oct 2021",
      endDate: "Present",
      location: "Remote - USA",
      image: "/images/general/computer.jpg",
      description:
        "Customer facing software development with enterprise level features including dashboard, reports, among others. Successful rewrote two of our main customer facing web application from Angular and C#, to React, Typescript, and C#, to provide a more secure user experience. Active participation in team, cross teams, and department level events. Leading sprint planning, retrospective, and standup events. Lead. Researched, troubleshoot, and fixed web applications bugs.",
      alt: "Company Logo",
      technologies: "ReactJs | Reactstrap | Sass | Typescript | C# | Express | Jira | Confluence | SQL | Gitkraken | Gitlab",
  },
  {
    name: "parsity-bootcamp",
    title: "Parsity Bootcamp | Mentor",
    startDate: "Mar 2021",
    endDate: "Present",
    location: "Remote - USA",
    image: "/images/general/computer.jpg",
    description:
      "Mentored full stack development Bootcamp students. ",
    alt: "Project demo",
    technologies: "HTML | CSS | Javascript | ReactJs | Reactstrap | NodeJs | Express | Mongo",
  },
    {
      name: "hope-for-the-nations",
      title: "Hope For The Nations | Web Developer",
      startDate: "Mar 2021",
      endDate: "Present",
      location: "Remote - USA",
      image: "/images/general/computer.jpg",
      description:
        "Web development for the non-profit Hope For The Nations. Develop and maintain an informational website with paypal donation integration, Facebook feed integration, display of programs, and stories of hope from their beneficiaries. Communicating with the Director to gather information and plan new additions to the site.",
      alt: "Project demo",
      technologies: "CSS | NextJs | Reactstrap | Typescript",
    },
    {
      name: "givecamp-memphis",
      title: "GiveCamp Memphis | Web Developer",
      startDate: "Feb 2021",
      endDate: "Present",
      location: "Remote - USA",
      image: "/images/general/computer.jpg",
      description:
        "One weekend remote project done in a group where we accomplished our goal of building a functional and modern website. The main features of the project were a landing page, photo gallery, intake form, booking system for sessions, and blog. Yearly participation in a volunteer weekend to help local non-profits expand in their impact to the community by improving or starting their technology needs",
      alt: "Project demo",
      technologies: "WordPress | Calendly | CSS | Gravity Forms | Divi Theme",
     
    },
    {
      name: "freedom-prep",
      title: "Freedom Prep Academy | Spanish and CS Teacher",
      startDate: "Aug 2019",
      endDate: "Oct 2021",
      location: "Memphis, TN",
      image: "/images/general/computer.jpg",
      description:
        "Plan, execution, and evaluation of macro and micro planes for the classes of Spanish I, II, Heritage Spanish, and Computer science fundamentals. Participated in planning sessions, department, and whole school training and professional development.",
      alt: "Project demo",
      technologies: "PowerSchool | Schoology | Canva | Google Suite",
    },
  ];

export default experience;
  
export function getAllExperiences() {
  return experience;
}