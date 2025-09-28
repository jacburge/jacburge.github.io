import { useState } from 'react';

import pythonLogo from '../assets/logos/python.png';
import reactLogo from '../assets/logos/react.png';
import awsLogo from '../assets/logos/aws.png';
import tableauLogo from '../assets/logos/tableau.png';
import snowflakeLogo from '../assets/logos/snowflake.png';
import gitlabLogo from '../assets/logos/gitlab.png';
import jiraLogo from '../assets/logos/jira.png';
import canvaLogo from '../assets/logos/canva.png';
import copilotLogo from '../assets/logos/copilot.png';
import airtableLogo from '../assets/logos/airtable.png';
import asanaLogo from '../assets/logos/asana.png';
import balsamiqLogo from '../assets/logos/balsamiq.png';
import confluenceLogo from '../assets/logos/confluence.jpg';
import djangoLogo from '../assets/logos/django.png';
import dockerLogo from '../assets/logos/docker.png';
import jenkinsLogo from '../assets/logos/jenkins.png';
import liquibaseLogo from '../assets/logos/liquibase.png';
import sqlLogo from '../assets/logos/SQL.png';
import rLogo from '../assets/logos/r.png';

// Also import TechStackRadio, LogoRow, BadgeRow from Skills.jsx or copy their code here

const TechStackCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-accent-100">
    {children}
  </div>
);

const techCategories = {
  python: ["Programming", "Machine Learning", "Data Engineering"],
  sql: ["Programming", "Data Engineering"],
  r: ["Programming", "Machine Learning"],
  react: ["Web App Development"],
  django: ["Web App Development"],
  snowflake: ["Data Engineering", "Cloud & DevOps", "AI"],
  aws: ["Cloud & DevOps"],
  gitlab: ["Web App Development", "Cloud & DevOps"],
  jenkins: ["Cloud & DevOps", "Data Engineering"],
  liquibase: ["Data Engineering"],
  docker: ["Cloud & DevOps", "Data Engineering"],
  jira: ["Agile Methods"],
  asana: ["Agile Methods"],
  confluence: ["Agile Methods"],
  airtable: ["Data Engineering"],
  tableau: ["Visualization"],
  balsamiq: ["Design"],
  canva: ["Design", "Visualization", "AI"],
  githubcopilot: ["Programming", "Machine Learning", "Web App Development", "AI"],
};

const allCategories = Array.from(new Set(Object.values(techCategories).flat()));
function getLogoKey(logo) {
  return logo.alt.replace(/\s|\.|-/g, '').toLowerCase();
}

const TechStackRadio = ({ selectedCategory, setSelectedCategory }) => (
  <div
    className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6"
    role="radiogroup"
    aria-label="Tech stack filters"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '0.5rem',
      columnGap: '0.5rem',
      maxWidth: '700px',
      margin: '0 auto',
    }}
  >
    {allCategories.map((cat) => (
      <button
        key={cat}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm shadow border border-accent-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400
          ${selectedCategory === cat ? 'bg-accent-600 text-white ring-2 ring-accent-400' : 'bg-white text-gray-500 hover:bg-accent-100'}`}
        aria-checked={selectedCategory === cat}
        role="radio"
        tabIndex={0}
        onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
        style={{ fontWeight: selectedCategory === cat ? 'bold' : 'normal' }}
      >
        {cat}
      </button>
    ))}
  </div>
);

const LogoRow = ({ logos, selectedCategory }) => (
  <div className="flex flex-wrap justify-center items-center gap-8">
    {logos.map((logo, idx) => {
      const key = getLogoKey(logo);
      const logoCats = techCategories[key] || [];
      const isActive = selectedCategory && logoCats.includes(selectedCategory);
      return (
        <div
          key={idx}
          className="relative group flex flex-col items-center transition-all duration-300"
          tabIndex={0}
          aria-label={logo.alt}
        >
          {/* Glow effect when active */}
          {isActive && (
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #e6f4f6 0%, #c3e6ee 70%, transparent 100%)',
                filter: 'blur(16px)',
                opacity: 0.7,
              }}
            />
          )}
          <img
            src={logo.src}
            alt={logo.alt}
            className={`h-12 w-12 object-contain transition-all duration-300 grayscale group-hover:grayscale-0 ${isActive ? 'grayscale-0 z-10' : ''}`}
            style={{ minWidth: 96, minHeight: 64, maxWidth: 96, maxHeight: 64, position: 'relative' }}
          />
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-90 pointer-events-none transition duration-200 whitespace-nowrap z-10">
            {logo.tooltip}
          </span>
        </div>
      );
    })}
  </div>
);

const BadgeRow = ({ badges }) => (
  <div className="flex flex-wrap justify-center gap-3 mt-4">
    {badges.map((skill, idx) => (
      <div key={idx} className="relative group">
        <span
          className="inline-block bg-teal-100 text-teal-800 font-semibold px-4 py-2 rounded-full shadow-sm text-sm cursor-default"
        >
          {skill}
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 -top-2 translate-y-[-100%] bg-black text-white text-xs rounded px-3 py-2 opacity-0 group-hover:opacity-90 pointer-events-none transition duration-200 whitespace-normal z-10 w-56 text-center">
          {productSkillTooltips[skill]}
        </span>
      </div>
    ))}
  </div>
);



const productSkills = [
  'Hiring Process Design',
  'Team Culture Building',
  'Cross-Functional Leadership',
  'Agile Methods',
  'Roadmaps',
  'Project Tracking',
  'Product Strategy',
  'Stakeholder Communication & Influence',
  'Mentorship'
];

const productSkillTooltips = {
  'Hiring Process Design': 'Designed and executed effective remote behavioral and technical hiring process, with experience conducting hundreds of interviews for multiple teams.',
  'Team Culture Building': 'Foster positive, inclusive, and high-performing team cultures with strong morale, collaboration, and rituals, with experience onboarding 20+ team members.',
  'Cross-Functional Leadership': 'Lead teams across disciplines (software engineering, UX design, data science, data engineering, financial analysts) to achieve shared goals and development initiatives.',
  'Agile Methods': 'Apply agile frameworks for iterative product development (Scrum, Kanban, Retrospectives, etc).',
  'Roadmaps': 'Develop and communicate strategic product roadmaps to stakeholders and executives.',
  'Project Tracking': 'Track progress and deliverables using modern tools with weekly updates to stakeholders and monthly prioritization meetings.',
  'Product Strategy': 'Define vision, goals, and priorities for data science initiatives and products.',
  'Stakeholder Communication & Influence': 'Engage and influence stakeholders at all levels across multiple teams.',
  'Mentorship': 'Coach and mentor team members and mentees for professional growth and ongoing career conversations.',
};

const techStack = [
  {
    src: pythonLogo,
    alt: 'Python',
    tooltip: 'Python: Data science, ML (XGBoost, Prophet, K-Means, GLM, Random Forest), automation, applications, APIs',
  },
  {
    src: sqlLogo,
    alt: 'SQL',
    tooltip: 'SQL: Data querying, manipulation, ETL processes',
  },
  {
    src: rLogo,
    alt: 'R',
    tooltip: 'R: Statistical analysis, data visualization, reporting',
  },
  {
    src: reactLogo,
    alt: 'React',
    tooltip: 'React: Frontend web and mobile development, Interactive UIs',
  },
  {
    src: djangoLogo,
    alt: 'Django',
    tooltip: 'Django: Backend frameworks, user management, APIs',

  },
  {
    src: snowflakeLogo,
    alt: 'Snowflake',
    tooltip: 'Snowflake: Cloud data warehousing, scalable analytics, Streamlit interfaces',
  },
  {
    src: awsLogo,
    alt: 'AWS',
    tooltip: 'AWS: Cloud deployment, scalable infrastructure',
  },
  {
    src: gitlabLogo,
    alt: 'GitLab',
    tooltip: 'GitLab: Version control, CI/CD automation, collaborative DevOps',
  },
  {
    src: jenkinsLogo,
    alt: 'Jenkins',
    tooltip: 'Jenkins: CI/CD automation, build pipelines, DevOps',
  },
  { 
    src: liquibaseLogo,
    alt: 'Liquibase',
    tooltip: 'Liquibase: Database version control, schema management',
  },
  {
    src: dockerLogo,
    alt: 'Docker',
    tooltip: 'Docker: Containerization, microservices, scalable deployment',
  },
  {
    src: jiraLogo,
    alt: 'JIRA',
    tooltip: 'JIRA: Agile project management, sprint planning, issue tracking',
  },
 {
    src: asanaLogo,
    alt: 'Asana',
    tooltip: 'Asana: Task management, team collaboration, project tracking',
  },
  {
    src: confluenceLogo,
    alt: 'Confluence',
    tooltip: 'Confluence: Documentation, team collaboration, knowledge sharing',
  },
  {
    src: airtableLogo,
    alt: 'Airtable',
    tooltip: 'Airtable: Flexible databases, project management, collaboration',
  },
 {
    src: tableauLogo,
    alt: 'Tableau',
    tooltip: 'Tableau: Data visualization, executive reporting',
  },
  {
    src: balsamiqLogo,
    alt: 'Balsamiq',
    tooltip: 'Balsamiq: Wireframing, UI/UX design, prototyping',
  },
  {
    src: canvaLogo,
    alt: 'Canva',
    tooltip: 'Canva: Visual design and presentations',
  },
  {
    src: copilotLogo,
    alt: 'GitHub Copilot',
    tooltip: 'GitHub Copilot: AI pair programming, code generation, productivity',
  }
];

  return (
    <Card>
      <div className="text-center text-lg text-gray-700 font-medium">
        Tech Stack:
      </div>
      <div className="py-6">
      <TechStackRadio selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="py-6">
      <LogoRow logos={techStack} selectedCategory={selectedCategory} />
      </div>
      <hr className="py-4" />
      <div className="mb-8 text-center text-lg text-gray-700 font-medium">
        Strategy, Leadership & Collaboration Skills:
      </div>
      <BadgeRow badges={productSkills} />
    </Card> 
  );
};

export default TechStackCard;