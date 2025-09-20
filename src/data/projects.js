import maxwellImg from '../assets/projects/maxwell-wide.png';
import libraryImg from '../assets/projects/library.png';
import datacampImg from '../assets/projects/datacamp.png';
// ...import other project images/videos as needed...

export const projects = [
  {
    id: 1,
    title: "AI Pet Health Triage",
    summary: "Chosen to lead Entrepreneurship action learning project for EMBA with final pitch to VC panel. Drove product strategy and MVP development for AI-driven pet health triage app.",
    image: maxwellImg,
    tags: ["React", "GitHub Copilot", "OpenAI API", "UX Design", "Customer Discovery", "Product Strategy"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Welcome to My Library",
    summary: "A visual analysis exploring my Goodreads data from 2002 to 2019, posted on Tableau Server. I like to read. See for yourself!",
    image: libraryImg,
    tags: ["Tableau", "Data Visualization", "Analytics", "Storytelling"],
    link: "https://public.tableau.com/app/profile/jaclyn2886/viz/WelcometoMyLibrary/LIBRARY",
    featured: true,
  },
  {
    id: 3,
    title: "DataCamp Instructor",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students until archival in 2024.",
    image: datacampImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: true,
  },
  // Add more projects here, with featured: false if not featured
];

export const personalInfo = {
  name: "Jaclyn Field Mathai",
  tagline: "Data Science | Product Strategy | Creative Leadership",
  bio: "I turn complex data and bold ideas into products that save time, unlock revenue, and delight users.",
  email: "hello@jaclynfieldmath.ai",
  location: "Greater DC Area"
};