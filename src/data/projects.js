// Featured Projects Data - Easy to update project details
import maxwellImg from '../assets/projects/maxwell-wide.png';
import libraryImg from '../assets/projects/library.png';
import datacampImg from '../assets/projects/datacamp.png';

export const featuredProjects = [
  {
    id: 1,
    title: "AI Pet Health Triage",
    summary: "Chosen to lead Entrepreneurship action learning project for EMBA with final pitch to VC panel. Led customer discovery, product strategy, and MVP development for AI-driven pet health triage app.",
    image: maxwellImg, // Placeholder image
    tags: ["React", "GitHub Copilot", "OpenAI API", "UX Design", "Customer Discovery", "Product Strategy"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Welcome to My Library",
    summary: "A visual analysis exploring my Goodreads data from 2002 to 2019.",
    image: libraryImg, // Placeholder image
    tags: ["Tableau", "Data Visualization", "Analytics", "Storytelling"],
    link: "https://public.tableau.com/app/profile/jaclyn2886/viz/WelcometoMyLibrary/LIBRARY",
    github: "#",
  },
  {
    id: 3,
    title: "DataCamp Instructor",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students from 2019-2024.",
    image: datacampImg, // Placeholder image
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "#",
    github: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
  },
];

// Personal Information - Easy to update
export const personalInfo = {
  name: "Jaclyn Field Mathai",
  tagline: "Data Science | Product Strategy | Creative Leadership",
  bio: "I turn complex data and bold ideas into products that save time, unlock revenue, and delight users.",
  email: "hello@jaclynfieldmath.ai",
  location: "Greater DC Area"
};