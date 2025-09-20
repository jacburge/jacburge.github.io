import { useState } from 'react';
import edxLogo from '../assets/logos/edx.png';
import disneyLogo from '../assets/logos/disney.png';
import libertyLogo from '../assets/logos/liberty.png';
import pythonLogo from '../assets/logos/python.png';
import reactLogo from '../assets/logos/react.png';
import awsLogo from '../assets/logos/aws.png';
import tableauLogo from '../assets/logos/tableau.png';
import berkeleyLogo from '../assets/logos/berkeley.png';
import ewhaLogo from '../assets/logos/ewha.png';
import umdLogo from '../assets/logos/umd.png';
import snowflakeLogo from '../assets/logos/snowflake.png';
import gitlabLogo from '../assets/logos/gitlab.png';
import jiraLogo from '../assets/logos/jira.png';
import canvaLogo from '../assets/logos/canva.png';
import datacampLogo from '../assets/logos/datacamp.png';

const brands = [
  {
    src: disneyLogo,
    alt: 'The Walt Disney Company',
    tooltip: 'Disney',
    description: 'Senior Manager, Data Science',
  },
  {
    src: libertyLogo,
    alt: 'Liberty Mutual',
    tooltip: 'Liberty Mutual',
    description: 'Senior Associate Data Analyst',
  },
  {
    src: datacampLogo,
    alt: 'DataCamp',
    tooltip: 'DataCamp',
    description: 'Instructor',
  },
];

const techStack = [
  {
    src: pythonLogo,
    alt: 'Python',
    tooltip: 'Python: Data science, ML, automation, applications, APIs',
  },
  {
    src: snowflakeLogo,
    alt: 'Snowflake',
    tooltip: 'Snowflake: Cloud data warehousing, scalable analytics, Streamlit interfaces',
  },
  {
    src: reactLogo,
    alt: 'React',
    tooltip: 'React: Interactive UIs',
  },
  {
    src: awsLogo,
    alt: 'AWS',
    tooltip: 'AWS: Cloud deployment, scalable infrastructure',
  },
  {
    src: tableauLogo,
    alt: 'Tableau',
    tooltip: 'Tableau: Data visualization, executive reporting',
  },
  {
    src: gitlabLogo,
    alt: 'GitLab',
    tooltip: 'GitLab: Version control, CI/CD automation, collaborative DevOps',
  },
  {
    src: jiraLogo,
    alt: 'JIRA',
    tooltip: 'JIRA: Agile project management, sprint planning, issue tracking',
  },
  {
    src: canvaLogo,
    alt: 'Canva',
    tooltip: 'Canva: Visual design and presentations',
  },
];

const productSkills = [
  'Agile',
  'Roadmaps',
  'Product Strategy',
  'Cross-Functional Leadership',
];

const schools = [
  { src: umdLogo, alt: 'University of Maryland, College Park', description: 'Executive Master of Business Administration' },
  { src: berkeleyLogo, alt: 'University of California, Berkeley', description: 'B.A., Cognitive Science' },
  { src: ewhaLogo, alt: 'Ewha Womans University', description: 'Summer International Program' },
];

// const certifications = [
//   {
//     title: 'Prediction and Machine Learning',
//     issuer: 'BerkeleyX (edX)',
//     logo: edxLogo,
//     date: 'Jul 2019',
//     skill: 'Machine Learning',
//     badgeColor: 'bg-teal-200 text-teal-800',
//     description: 'Covers supervised learning, regression, classification, and prediction techniques.',
//   },
//   {
//     title: 'Professional Certificate in Foundations of Data Science',
//     issuer: 'BerkeleyX (edX)',
//     logo: edxLogo,
//     date: 'Jul 2019',
//     skill: 'Data Science',
//     badgeColor: 'bg-blue-100 text-blue-800',
//     description: 'Comprehensive introduction to data science, including Python, statistics, and data analysis.',
//   },
//   {
//     title: 'Computational Thinking with Python',
//     issuer: 'BerkeleyX (edX)',
//     logo: edxLogo,
//     date: 'Jun 2019',
//     skill: 'Python',
//     badgeColor: 'bg-yellow-100 text-yellow-800',
//     description: 'Focuses on problem solving and computational thinking using Python.',
//   },
//   {
//     title: 'Inferential Thinking by Resampling',
//     issuer: 'BerkeleyX (edX)',
//     logo: edxLogo,
//     date: 'Jun 2019',
//     skill: 'Statistics',
//     badgeColor: 'bg-purple-100 text-purple-800',
//     description: 'Explores inferential statistics, hypothesis testing, and resampling methods.',
//   },
//   {
//     title: 'Programming with Python for Data Science (DAT210x)',
//     issuer: 'Microsoft (edX)',
//     logo: edxLogo,
//     date: 'Feb 2018',
//     skill: 'Python',
//     badgeColor: 'bg-yellow-100 text-yellow-800',
//     description: 'Covers Python programming for data science, including libraries and data manipulation.',
//   },
//   {
//     title: 'Machine Learning for Data Science and Analytics',
//     issuer: 'ColumbiaX (edX)',
//     logo: edxLogo,
//     date: 'Mar 2016',
//     skill: 'Machine Learning',
//     badgeColor: 'bg-teal-200 text-teal-800',
//     description: 'Introduces machine learning concepts, algorithms, and analytics applications.',
//   },
// ];

const schoolBullets = [
  [
    "Expected graduation 2026",
    "STEM-designated",
    "Led capstone entrepreneurship project on AI for pet healh care"
  ],
  [
    "Studied cognitive science, interdisciplinary study of the mind",
    "Head of edX Content Development and Student Instructor for 80+ students with The Beauty and Joy of Computing (CS 10)",
  ],
  [
    "Cultural immersion program in Seoul, South Korea, following the footsteps of my grandmother.",
    "Completed intensive Korean language and Traditional East Asian painting courses."
  ]
];

const brandBullets = [
  [
    "Built ML products for ad revenue optimization of billions in revenue, saving 60+ hours per cycle",
    "Founded and led high-performing data science engineering team"
  ],
  [
    "Developed ML solution for auto insurance quotes, doubling the accuracy of default systems.",
    "Proposed and implemented analytical solutions driving $8M in cost savings and $4M in premium for Michigan."
  ],
  [
    "Created educational notebook project for cluster analysis in R, used by 2500+ students",
    "Emphasized effective storytelling with data using real-world data"
  ]
];

const FlipCard = ({ front, back, accent = "border-accent-100" }) => {
  const [flipped, setFlipped] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <div
      className={`flip-card group relative rounded-2xl shadow-lg ${accent} border-2 bg-white transition-all duration-500`}
      style={{
        perspective: '1200px',
        minHeight: '220px',
        cursor: 'pointer',
        overflow: 'visible',
      }}
      onClick={() => setFlipped(!flipped)}
      tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setFlipped(!flipped)}
      aria-label={flipped ? "Show front" : "Show details"}
    >
      <div
        className={`flip-card-inner transition-all duration-500`}
        style={{
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '220px',
        }}
      >
        <div
          className="flip-card-front absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            borderRadius: '1rem',
            transition: 'box-shadow 0.3s',
            zIndex: flipped ? 0 : 2,
          }}
        >
          {front}
        </div>
        <div
          className="flip-card-back absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 bg-accent-50"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '1rem',
            zIndex: flipped ? 2 : 0,
            boxShadow: '0 4px 24px -8px rgba(76, 110, 129, 0.10)',
            transition: 'height 0.4s, padding 0.4s',
            overflow: 'hidden',
          }}
        >
          <div className="w-full max-h-56 overflow-y-auto">
            {Array.isArray(back) ? (
              <ul className={`text-gray-700 text-sm leading-relaxed ${showMore ? "max-h-none" : "max-h-40 overflow-hidden"}`}>
                {back.map((bullet, idx) => (
                  <li key={idx} className="mb-2">• {bullet}</li>
                ))}
              </ul>
            ) : (
              back
            )}
            {Array.isArray(back) && back.length > 3 && !showMore && (
              <button
                className="mt-2 px-3 py-1 rounded-full bg-accent-200 text-accent-700 text-xs font-semibold shadow hover:bg-accent-300 transition"
                onClick={e => { e.stopPropagation(); setShowMore(true); }}
              >
                Show More
              </button>
            )}
            {Array.isArray(back) && showMore && (
              <button
                className="mt-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold shadow hover:bg-accent-200 transition"
                onClick={e => { e.stopPropagation(); setShowMore(false); }}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
      {isMobile && flipped && (
        <div className="absolute inset-0 bg-white bg-opacity-95 rounded-2xl z-30 flex flex-col items-center justify-center p-6 transition-all duration-300">
          <div className="w-full">
            {Array.isArray(back) ? (
              <ul className="text-gray-700 text-sm leading-relaxed max-h-56 overflow-y-auto">
                {back.map((bullet, idx) => (
                  <li key={idx} className="mb-2">• {bullet}</li>
                ))}
              </ul>
            ) : (
              back
            )}
            <button
              className="mt-4 px-3 py-1 rounded-full bg-accent-200 text-accent-700 text-xs font-semibold shadow hover:bg-accent-300 transition"
              onClick={e => { e.stopPropagation(); setFlipped(false); }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-accent-100">
    {children}
  </div>
);

const LogoRow = ({ logos, showDescription = false, tech = false, school = false }) => (
  <div className="flex flex-wrap justify-center items-center gap-8">
    {logos.map((logo, idx) => (
      <div key={idx} className="relative group flex flex-col items-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-12 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        />
        {tech && (
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-90 pointer-events-none transition duration-200 whitespace-nowrap z-10">
            {logo.tooltip}
          </span>
        )}
        {school && (
          <span className="text-xs text-gray-500 mt-2 text-center max-w-[140px]">{logo.tooltip}</span>
        )}
        {showDescription && (
          <span className="text-xs text-gray-500 mt-2 text-center max-w-[120px]">{logo.description}</span>
        )}
      </div>
    ))}
  </div>
);

const BadgeRow = ({ badges }) => (
  <div className="flex flex-wrap justify-center gap-3 mt-4">
    {badges.map((skill, idx) => (
      <span
        key={idx}
        className="inline-block bg-teal-100 text-teal-800 font-semibold px-4 py-2 rounded-full shadow-sm text-sm"
      >
        {skill}
      </span>
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-accent-600 mb-10 text-center">Skills & Experience</h2>
      <Card>
        <div className="mb-6 text-center text-lg text-gray-700 font-medium">
          Educated at top institutions:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, idx) => (
            <FlipCard
              key={idx}
              accent="border-accent-400"
              front={
                <>
                  <img
                    src={school.src}
                    alt={school.alt}
                    className="h-10 object-contain mb-4"
                  />
                  <div className="font-bold text-lg text-gray-900 text-center mb-1">{school.alt}</div>
                  <div className="text-sm text-gray-500 text-center">{school.description}</div>
                  <div className="mt-2 text-xs text-accent-400 font-semibold">Click for details</div>
                </>
              }
              back={schoolBullets[idx]}
            />
          ))}
        </div>
      </Card>
      <Card>
        <div className="mb-6 text-center text-lg text-gray-700 font-medium">
          Trusted by world-class brands:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <FlipCard
              key={idx}
              accent="border-accent-400"
              front={
                <>
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-10 object-contain mb-4"
                  />
                  <div className="font-bold text-lg text-gray-900 text-center mb-1">{brand.alt}</div>
                  <div className="text-sm text-gray-500 text-center">{brand.description}</div>
                  <div className="mt-2 text-xs text-accent-400 font-semibold">Click for details</div>
                </>
              }
              back={brandBullets[idx]}
            />
          ))}
        </div>
      </Card>
      <Card>
        <div className="mb-6 text-center text-lg text-gray-700 font-medium">
          Tech stack:
        </div>
        <LogoRow logos={techStack} tech />
        <BadgeRow badges={productSkills} />
      </Card>
      {/* <Card>
        <div className="mb-6 text-center text-lg text-gray-700 font-medium">
          Certifications:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-lg border-2 border-accent-100 p-6 flex flex-col items-center group transition-all duration-200"
            >
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="h-10 w-10 object-contain mb-4"
              />
              <div className="font-bold text-lg text-gray-900 text-center mb-1">{cert.title}</div>
              <div className="text-sm text-gray-500 text-center mb-2">
                {cert.issuer} &middot; <span>{cert.date}</span>
              </div>
              <span className={`px-4 py-1 rounded-full font-semibold text-sm mb-2 ${cert.badgeColor}`}>
                {cert.skill}
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 translate-y-full bg-black text-white text-xs rounded px-3 py-2 opacity-0 group-hover:opacity-90 pointer-events-none transition duration-200 whitespace-normal z-10 w-56 text-center">
                {cert.description}
              </span>
            </div>
          ))}
        </div>
      </Card> */}
    </div>
    <style>
      {`
        .flip-card {
          height: 100%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(.4,2,.3,1), height 0.4s, padding 0.4s;
          transform-style: preserve-3d;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          min-height: 220px;
          height: auto;
          left: 0;
          top: 0;
          border-radius: 1rem;
        }
        .flip-card-back {
          background: #e6f4f6;
          color: #234;
        }
      `}
    </style>
  </section>
);

export default Skills;