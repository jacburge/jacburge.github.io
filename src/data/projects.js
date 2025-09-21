import maxwellImg from '../assets/projects/maxwell-wide.png';
import libraryImg from '../assets/projects/library.png';
import datacampImg from '../assets/projects/datacamp.png';
import survivorImg from '../assets/projects/survivor.png';
import shelfImg from '../assets/projects/shelf.png';
import slammmImg from '../assets/projects/slammm.png';
import kilt_kimonoImg from '../assets/projects/kilt_kimono.jpg';
import wudangImg from '../assets/projects/wudang.png';
import stephanieImg from '../assets/projects/stephanie.png';
import swordImg from '../assets/projects/sword.jpg';
// ...import other project images/videos as needed...

export const projects = [
  {
    id: 1,
    title: "AI Pet Health Triage",
    summary: "Chosen to lead Entrepreneurship action learning project for EMBA with final pitch to VC panel. Drove product strategy and MVP development for AI-driven pet health triage app.",
    image: maxwellImg,
    tags: ["React", "GitHub Copilot", "API", "AI", "UX Design", "Customer Discovery", "Product Strategy","Leadership"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "NFL Survivor Pool",
    summary: "Smarter weekly picks using dynamic win probabilities, real pick popularity, and future value forecasts. Built with React frontend, Flask backend, and hosted on GitHub Pages and Render.",
    image: survivorImg,
    tags: ["React", "Flask", "Github Copilot","Github Pages","Render", "API"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: true,
  },
  {
    id: 3,
    title: "Degrees That Pay You Back",
    summary: "Created and published a Jupyter Notebook project on Datacamp to guide students in applying analytical skills via R using real-world data. The project was used by over 2,500 students until archival in 2024.",
    image: datacampImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: true,
  },
  {
    id: 4,
    title: "Welcome to My Library",
    summary: "A visual analysis exploring my Goodreads data from 2002 to 2019, posted on Tableau Server. I like to read. See for yourself!",
    image: libraryImg,
    tags: ["Tableau", "Data Visualization", "Analytics", "Storytelling"],
    link: "https://public.tableau.com/app/profile/jaclyn2886/viz/WelcometoMyLibrary/LIBRARY",
    featured: false,
  },
  {
    id: 5,
    title: "SHELF Book Club",
    summary: "SHELF: Salon for Hip, Evocative, Literary Fanatics. We are an inclusive group of bibliophiles seeking to share a social space for discussing thought-provoking, inspiring, and diverse novels. This is a Meetup community I currently co-host each month.",
    image: shelfImg,
    tags: ["Meetup", "Community Building", "Event Planning", "Literature", "Diversity & Inclusion","Leadership"],
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "SLAMMM Creative Community",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students until archival in 2024.",
    image: slammmImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology","Leadership"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: false,
  },
  {
    id: 7,
    title: "Album Art Design",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students until archival in 2024.",
    image: kilt_kimonoImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: false,
  },
  {
    id: 8,
    title: "WudangDanPai.com",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students until archival in 2024.",
    image: wudangImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: false,
  },
  {
    id: 9,
    title: "StephanieJordanCounseling.com",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students until archival in 2024.",
    image: stephanieImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: false,
  },
  {
    id: 10,
    title: "Competitive Chinese Martial Arts",
    summary: "Created a Jupyter Notebook project to guide students in applying analytical skills including data manipulation, k-means clustering, visualization, and storytelling via R using real-world data. The project, Degrees That Pay You Back, was used by over 2,500 students until archival in 2024.",
    image: swordImg,
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    link: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb",
    featured: false,
  }
  // Add more projects here, with featured: false if not featured
];

export const personalInfo = {
  name: "Jaclyn Field Mathai",
  tagline: "Data Science | Product Strategy | Creative Leadership",
  bio: "I turn complex data and bold ideas into products that save time, unlock revenue, and delight users.",
  email: "hello@jaclynfieldmath.ai",
  location: "Greater DC Area"
};