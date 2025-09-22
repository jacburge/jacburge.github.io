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
    media: [maxwellImg],
    tags: ["React", "GitHub Copilot", "API", "AI", "UX Design", "Customer Discovery", "Product Strategy","Leadership"],
    links: [
      { url: "https://www.canva.com/design/DAGtn8BCTm0/QX5kYhfkAh2svJkpSm5Gow/view?utm_content=DAGtn8BCTm0&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel", type: "Website", label: "Individual Pitch Video" },
      { url: "https://github.com/jacburge/maxwell", type: "github", label: "GitHub Repo" }
    ],
    details: `<p><strong>Overview:</strong> For our Entrepreneurship class, we each pitched a business idea and voted on the ideas to form groups that would ultimately present to a VC panel. My pitch was one of 8 out of 41 chosen to proceed. <ul> Led a 5 person cross-functional team to develop an MVP for an AI-powered pet health triage app.</ul><ul> Conducted customer discovery, designed UX flows, and pitched to VCs.</ul></p><ul><li>Developed React frontend and API integration</li><li>Used GitHub Copilot for rapid prototyping</li><li>Led product strategy and customer discovery</li></ul>`,
    reflection: `This project taught me how to evaluate riskiest assumptions, conduct market size analysis, and use customer discovery to evaluate hypotheses. I learned to balance technical feasibility with user needs and business goals.`,
    role: "Team Lead, Product Lead & UX Designer",
    featured: true,
  },
  {
    id: 2,
    title: "NFL Survivor Pool",
    summary: "Smarter weekly picks using dynamic win probabilities, real pick popularity, and future value forecasts. Built with React frontend, Flask backend, and hosted on GitHub Pages and Render.",
    image: survivorImg,
    media: [survivorImg],
    tags: ["React", "Flask", "Github Copilot","Github Pages","Render", "API"],
    links: [
      { url: "https://github.com/jacburge/nfl-survivor-pool", type: "github", label: "GitHub Repo" },
      { url: "https://jacburge.github.io/nfl-survivor-pool/", type: "website", label: "Live Demo" }
    ],
    details: `<p><strong>Features:</strong> Calculates weekly NFL picks using real-time data and forecasts. Interactive charts and pick history.</p>`,
    reflection: `Building this taught me about API reliability and the importance of clear data visualization for decision-making.`,
    role: "Full Stack Developer",
    featured: true,
  },
  {
    id: 3,
    title: "Degrees That Pay You Back",
    summary: "Created and published a Jupyter Notebook project on Datacamp to guide students in applying analytical skills via R using real-world data. The project was used by over 2,500 students until archival in 2024.",
    image: datacampImg,
    media: [datacampImg],
    tags: ["R", "Cluster Analysis", "Data Manipulation","Data Visualization","Storytelling", "Educational Technology"],
    links: [
      { url: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb", type: "github", label: "GitHub Repo" },
    ],
    details: `<p><strong>Impact:</strong> Over 2,500 students completed this project, learning R and data analysis with real-world salary data.</p>`,
    reflection: `<p>I enjoyed designing educational content and seeing students apply analytics to real decisions.</p>`,
    role: "Project Author",
    featured: true,
  },
  {
    id: 4,
    title: "Welcome to My Library",
    summary: "A visual analysis exploring my Goodreads data from 2002 to 2019, posted on Tableau Server. I like to read. See for yourself!",
    image: libraryImg,
    media: [libraryImg],
    tags: ["Tableau", "Data Visualization", "Analytics", "Storytelling"],
    links: [
      { url: "https://public.tableau.com/app/profile/jaclyn2886/viz/WelcometoMyLibrary/LIBRARY", type: "website", label: "Tableau Viz" }
    ],
    details: `A visual analysis exploring my Goodreads data (reading history, genre, ratings, etc.) from 2002 to 2019, posted on Tableau Server. I like to read, a lot. What better way to celebrate that than inviting you on a visual analytical storytelling journey through my reading history over the last several years! (Thanks to Goodreads for storing my reading data and Tableau for the visualization tools). On my Tableau Server account you may also find another project building dashboards for Bill and Melinda Gates foundation grant data.</p>`,
    // reflection: `Data can reveal personal stories. This project helped me reflect on my reading journey.`,
    role: "Data Analyst",
    featured: false,
  },
  {
    id: 5,
    title: "SHELF Book Club",
    summary: "SHELF: Salon for Hip, Evocative, Literary Fanatics. We are an inclusive group of bibliophiles seeking to share a social space for discussing thought-provoking, inspiring, and diverse novels. This is a Meetup community I currently co-host each month.",
    image: shelfImg,
    media: [shelfImg],
    tags: ["Meetup", "Community Building", "Event Planning", "Literature", "Diversity & Inclusion","Leadership"],
    links: [
      { url: "#", type: "website", label: "Meetup Page" }
    ],
    details: `<p>Salon [səˈlän] n. 1. A periodic assembly of guests, particularly a gathering of literary, artistic, social, cultural, or intellectual distinction. Monthly book club with diverse selections and lively discussions. Focus on stories from diverse backgrounds with impactful stories.</p>`,
    reflection: `Community building is about creating welcoming spaces for all voices. We created this book club after noticing most book clubs in our area were tailored to specific demographics or too far away. Our group has enjoyed perspectives from diverse men and women from early 20's to 70+.`,
    role: "Co-Host",
    featured: false,
  },
  {
    id: 6,
    title: "SLAMMM Creative Community",
    summary: "SLAMMM: Salon (for) Literary, Artistic, Musical, & Movement Mash-ups.",
    image: slammmImg,
    media: [slammmImg],
    tags: ["Community Building", "Event Planning", "Creativity", "Leadership", "Diversity & Inclusion"],
    links: [
      { url: "https://www.youtube.com/watch?v=eo6q5U0X6-0", type: "youtube", label: "Video" }
    ],
    details: `During my time in Seattle, I hosted this group as a monthly open community fostering the sharing of art, ideas, and passions, alongside the interactive blending of talents for new creative mashups. The only requirement to attend was bringing a 'creative contribution' of your choice to share in a casual jam-setting - the opportunities were endless.`,
    reflection: `I am passionate about empowering people to unlock their creativity. I recall a friend saying she didn't have anything creative to contribute, but then learned she designs and makes her own clothes! We enjoyed a wide range of creative expressions including poetry, music, salsa, visual art, fire dancing, tarot readings, and more.`,
    role: "Founder",
    featured: false,
  },
  {
    id: 7,
    title: "Album Art Design",
    summary: "I created album cover artwork (drawn by hand) and graphic design edits for 4 of Oakland musician Mighty Quinn's releases and provide occasional website updates for his website. You can listen to his punk rock jams at mightyquinnwalker.bandcamp.com! These are my favorite designs.",
    image: kilt_kimonoImg,
    media: [kilt_kimonoImg],
    tags: ["Art", "Graphic Design", "Freelancing", "Creativity"],
    links: [
      { url: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb", type: "github", label: "GitHub Repo" }
    ],
    details: `I created album cover artwork (drawn by hand) and graphic design edits for 4 of Oakland musician Mighty Quinn's releases and provide occasional website updates for his website. You can listen to his punk rock jams at mightyquinnwalker.bandcamp.com! These are my favorite designs.`,
    reflection: `This was a fun creative outlet alongside my technical work. I enjoyed collaborating with an artist to visually represent his music.`,
    role: "Artist, Graphic Designer",
    featured: false,
  },
  {
    id: 8,
    title: "WudangDanPai.com",
    summary: "The mission of the Wudang Internal Martial Arts Academy is to spread awareness of Chinese internal martial arts, promote health and spiritual cultivation, and to teach serious and practical fighting techniques for self-defense.",
    image: wudangImg,
    media: [wudangImg],
    tags: ["Web Design", "Consulting", "Freelancing", "Martial Arts"],
    links: [
      { url: "https://WudangDanPai.com", type: "website", label: "Website" }
    ],
    details: `I redesigned their website with a bright, simpler, more modern look in alignment with the academy's desired aesthetic. I also served as webmaster, designer, and consultant for the managing of new content and online presence as they continue to advertise internal Chinese martial arts classes in Seattle, WA for several years.`,
    reflection: `The mission of the Wudang Internal Martial Arts Academy is to spread awareness of Chinese internal martial arts, promote health and spiritual cultivation, and to teach serious and practical fighting techniques for self-defense.`,
    role: "Webmaster & Designer",
    featured: false,
  },
  {
    id: 9,
    title: "StephanieJordanCounseling.com",
    summary: "I designed a new website for a private practice therapist in the Seattle area after providing consultation to understand the goals and desired feel of the site. Produced a full draft within 2 hours which was well-received, and quickly completed the minor tweaks requested before putting into production.",
    image: stephanieImg,
    media: [stephanieImg],
    tags: ["Web Design", "Consulting", "Freelancing"],
    links: [
      { url: "StephanieJordanCounseling.com", type: "website", label: "Website" }
    ],
    details: `I designed a new website for a private practice therapist in the Seattle area after providing consultation to understand the goals and desired feel of the site. Produced a full draft within 2 hours which was well-received, and quickly completed the minor tweaks requested before putting into production.`,
    // reflection: `<p>This project taught me the value of iterative prototyping and direct customer feedback. I learned to balance technical feasibility with user needs and business goals.</p>`,
    role: "Webmaster & Designer",
    featured: false,
  },
  {
    id: 10,
    title: "Chinese Martial Arts",
    summary: "I started studying tai chi in 2013 with Starfire in Berkeley. For 5 years, I studied baguazhang, taijiquan, and qigong at the International Wudang Internal Martial Arts Academy and was a member of the demonstration team which regularly performs around Seattle, WA. I also competed in several competitions.",
    image: swordImg,
    media: [swordImg],
    tags: ["Martial Arts", "Community", "Performance", "Competition"],
    links: [
      { url: "https://github.com/jacburge/Degrees-That-Pay-You-Back/blob/master/Degrees%20That%20Pay%20You%20Back%20(Datacamp).ipynb", type: "github", label: "GitHub Repo" }
    ],
    details: `I started studying tai chi in 2013 with Starfire in Berkeley. For 5 years, I studied baguazhang, taijiquan, and qigong at the International Wudang Internal Martial Arts Academy and was a member of the demonstration team which regularly performs around Seattle, WA. I also competed in several competitions.`,
    // reflection: `<p>This project taught me the value of iterative prototyping and direct customer feedback. I learned to balance technical feasibility with user needs and business goals.</p>`,
    role: "Competitive Martial Artist",
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