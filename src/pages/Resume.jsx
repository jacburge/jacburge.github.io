import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaDownload, FaEnvelope, FaAward, FaMicrophone, FaFilePdf } from "react-icons/fa";
import logo from "../assets/logo.png";
import disneyLogo from "../assets/logos/Disney.png";
import libertyLogo from "../assets/logos/liberty.png";
import berkeleyLogo from "../assets/logos/berkeley.png";
import umdLogo from "../assets/logos/umd.png";
import microsoftLogo from "../assets/logos/microsoft.png";
import columbiaLogo from "../assets/logos/columbia.png";
import edxLogo from "../assets/logos/edX.png";

const accent = "#3B82F6";

const education = [
  {
    logo: umdLogo,
    institution: "University of Maryland, College Park",
    degree: "Executive Master of Business Administration (STEM-Designated)",
    field: "Business Administration",
    dates: "Expected May 2026",
    summary: "STEM-designated EMBA program focused on strategic leadership, analytics, and innovation.",
  },
  {
    logo: berkeleyLogo,
    institution: "University of California, Berkeley",
    degree: "B.A., Cognitive Science",
    field: "Cognitive Science",
    dates: "Graduated May 2015",
    summary: "Explored interdisciplinary approaches to cognition, computation, and creative problem-solving.",
  },
];

const workExperience = [
  {
    logo: disneyLogo,
    company: "The Walt Disney Company",
    title: "Manager, Data Science | Disney Entertainment - Research, Insights & Analytics",
    dates: "May 2023 – Present",
    bullets: [
      "Expanded charter from optimizing $30M in ad revenue to billions across Disney’s media brands (ESPN, ABC, Disney Channel, NatGeo, etc.)",
      "Launched a self-service ML-powered forecasting platform, automating manual workflows and reducing stakeholder effort by 60+ hours per cycle.",
      "Co-led a cross-functional team to deliver the first GenAI application, providing contextual analysis of viewership across competitors.",
      "Founded a knowledge sharing initiative for data science and ML, covering topics from K-means to GenAI, LLMs, and Snowflake Tasks.",
      "Partnered with executive leadership and stakeholders to align analytics solutions with strategic goals, increasing trust and adoption.",
    ],
  },
  {
    logo: disneyLogo,
    company: "The Walt Disney Company",
    title: "Manager, Data Science | Disney Media & Entertainment Distribution",
    dates: "Oct 2020 – May 2023",
    bullets: [
      "Founded and led a 4-person data science engineering team delivering modern data solutions for content performance insights and forecasting.",
      "Negotiated budget and strategy for cloud modernization, automating pipelines via GitLab Runner, Docker, and AWS EC2, saving 8+ hours/week.",
      "Directed ad server and data warehouse migrations (SAS to Hive to Snowflake), improving scalability and resilience.",
    ],
  },
  {
    logo: disneyLogo,
    company: "The Walt Disney Company",
    title: "Data Product Integration Manager | Disney Decision Science & Integration",
    dates: "Nov 2018 – Sep 2020",
    bullets: [
      "Coordinated cross-team initiatives and supported analytics product feature launches across business units.",
      "Built a Django web app for master data management and custom feature engineering, saving hours from manual Excel review.",
      "Migrated forecasting from legacy SAS to scalable SQL/Python, reducing turnaround from 2 weeks to 2 hours.",
    ],
  },
  {
    logo: disneyLogo,
    company: "The Walt Disney Company",
    title: "Data Scientist | Disney Decision Science & Integration",
    dates: "Aug 2016 – Nov 2018",
    bullets: [
      "Developed and maintained predictive models for Disney’s digital ad ecosystem, emphasizing usability and operational efficiency.",
      "Championed Tableau adoption, migrating stakeholders from Excel to actionable visualizations and interfaces.",
    ],
  },
  {
    logo: libertyLogo,
    company: "Liberty Mutual Insurance",
    title: "Senior Associate Data Analyst",
    dates: "Jan 2016 – Aug 2016",
    bullets: [
      "Designed and operationalized predictive models personalizing online quoting, doubling accuracy of default systems.",
    ],
  },
  {
    logo: libertyLogo,
    company: "Liberty Mutual Insurance",
    title: "Associate Data Analyst",
    dates: "Jul 2015 – Jan 2016",
    bullets: [
      "Proposed and implemented analytical solutions driving $8M in cost savings and $4M in premium for Michigan.",
    ],
  },
  {
    logo: berkeleyLogo,
    company: "UC Berkeley",
    title: "Student Instructor & Head of edX Content Development",
    dates: "Jan 2013 – May 2015",
    bullets: [
      "Taught lab sessions and discussions for 80+ students in The Beauty and Joy of Computing (CS 10).",
      "Guided curriculum development for the edX version of BJC, expanding global access to computing education.",
    ],
  },
];

const certifications = [
  {
    logo: edxLogo,
    name: "Prediction and Machine Learning",
    org: "BerkeleyX (edX)",
    date: "Jul 2019",
    type: "Machine Learning",
  },
  {
    logo: edxLogo,
    name: "Professional Certificate in Foundations of Data Science",
    org: "BerkeleyX (edX)",
    date: "Jul 2019",
    type: "Data Science",
  },
  {
    logo: edxLogo,
    name: "Computational Thinking with Python",
    org: "BerkeleyX (edX)",
    date: "Jun 2019",
    type: "Python",
  },
  {
    logo: edxLogo,
    name: "Inferential Thinking by Resampling",
    org: "BerkeleyX (edX)",
    date: "Jun 2019",
    type: "Statistics",
  },
  {
    logo: microsoftLogo,
    name: "Programming with Python for Data Science (DAT210x)",
    org: "Microsoft (edX)",
    date: "Feb 2018",
    type: "Python",
  },
  {
    logo: columbiaLogo,
    name: "Machine Learning for Data Science and Analytics",
    org: "ColumbiaX (edX)",
    date: "Mar 2016",
    type: "Machine Learning",
  },
];

const skills = {
  technical: [
    "Machine Learning & Predictive Analytics (XGBoost, GLM, Prophet, K-Means)",
    "Programming (Python, SQL, R, SAS)",
    "Data Engineering (Snowflake, Liquibase, ETL pipelines)",
    "Cloud & DevOps (AWS, Jenkins, Docker, GitLab CI/CD)",
    "Web Application Development (Django, Flask, React, REST APIs)",
    "Visualization (Tableau)",
  ],
  leadership: [
    "Team Building", "Cross-Functional Leadership", "Agile Methods", "Product Strategy & Roadmapping", "Stakeholder Communication & Influence", "User-Centered Design", "Mentorship"
  ],
};

const speaking = [
  {
    title: "Industry Expert Interviewee",
    role: "Education Strategy Group / NYC Public Schools",
    dates: "2025",
    summary: "Consulted as an industry leader on AI and workforce readiness for public education initiatives.",
  },
  {
    title: "Guest Speaker on Data Science Career Journey",
    role: "Stanton University",
    dates: "2022",
    summary: "Spoke to data science students about career journey, creativity, and storytelling in data science.",
  },
  {
    title: "Conference Speaker — Disney Data & Analytics Conference",
    role: "Disney Data & Analytics Conference",
    dates: "2019",
    summary: "Presented 'And the Emmy Goes To… Behind the Scenes of Digital Television Forecasting' on feature engineering, ML, and business integration best practices.",
  },
  {
    title: "DataCamp Instructor",
    role: "Datacamp",
    dates: "2018",
    summary: "Designed curriculum for 2500+ students on clustering analysis and visualization, emphasizing effective storytelling with data.",
  },
];

const awards = [
  {
    title: "Chinese Martial Arts Gold Medalist",
    role: "CMAT, ICMAC, Can-Am Competitions",
    dates: "2015–2019",
    summary: "Multiple gold and silver medals in advanced Tai Chi and Baguazhang forms at national and international tournaments.",
  },
  {
    title: "Disney Excellence Award",
    role: "The Walt Disney Company",
    dates: "2017",
    summary: "Recognized for proactive client problem-solving, forecasting process optimization, and innovation in data visualization.",
  },
  {
    title: "Outstanding Graduate Student Instructor Award",
    role: "UC Berkeley",
    dates: "2015",
    summary: "Top 9% of instructors across campus for excellence in undergraduate teaching.",
  },
  {
    title: "Regents' & Chancellor’s Scholarship",
    role: "UC Berkeley",
    dates: "2011–2015",
    summary: "Prestigious merit scholarship awarded to top 5% of entering undergraduates.",
  },
];

const badgeColors = {
  "Machine Learning": "#10B981",
  "Data Science": "#3B82F6",
  "Statistics": "#8B5CF6",
  "Python": "#F59E0B",
};

const sectionAnchors = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Work Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Featured Projects" },
  { id: "awards", label: "Awards" },
  { id: "speaking", label: "Speaking" },
  { id: "contact", label: "Contact" },
];

function Sidebar({ activeSection }) {
  return (
    <aside
      className="hidden lg:flex flex-col sticky top-8 h-fit bg-white rounded-2xl shadow-xl p-6 gap-6 border border-accent-100"
      style={{ minWidth: 220, maxWidth: 260 }}
      aria-label="Resume navigation sidebar"
    >
      <nav aria-label="Section navigation">
        <ul className="flex flex-col gap-3">
          {sectionAnchors.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`text-accent-700 font-semibold transition ${
                  activeSection === s.id
                    ? "underline decoration-4 decoration-accent-600"
                    : "hover:underline focus:underline focus:outline-accent-600"
                }`}
                tabIndex={0}
                aria-current={activeSection === s.id ? "section" : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-2 mt-4">
        <a href="mailto:jacburge@gmail.com" className="flex items-center gap-2 text-accent-700 font-medium hover:underline"><FaEnvelope /> Email</a>
        <a href="https://linkedin.com/in/jacburge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent-700 font-medium hover:underline"><FaLinkedin /> LinkedIn</a>
      </div>
    </aside>
  );
}

function ExpandableExperience({ role }) {
  const [expanded, setExpanded] = useState(false);
  const keyBullets = role.bullets.slice(0, 2);
  const moreBullets = role.bullets.slice(2);
  return (
    <div
      className={`transition-all duration-500 bg-white rounded-2xl shadow-lg mb-8 p-6 border border-accent-100 group ${expanded ? "expanded" : "collapsed"}`}
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && setExpanded(!expanded)}
    >
      <div className="flex items-center gap-4 mb-2">
        <div>
          <div className="font-bold text-lg text-accent-700">{role.title}</div>
          <div className="font-semibold text-gray-700">{role.company}</div>
          <div className="text-xs text-accent-400 font-semibold">{role.dates}</div>
        </div>
        <button
          className="ml-auto px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold shadow hover:bg-accent-200 transition"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Collapse details" : "Expand details"}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
      {/* Bullets: single column */}
      <div className="flex flex-col gap-2 mt-2">
        {keyBullets.map((b, i) => (
          <div key={i} className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold text-accent-600">• </span>{b}
          </div>
        ))}
        {expanded && moreBullets.map((b, i) => (
          <div key={i} className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold text-accent-600">• </span>{b}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumePage() {
  // Track active section for sidebar highlight
  const [activeSection, setActiveSection] = useState(sectionAnchors[0].id);
  const sectionRefs = useRef(sectionAnchors.reduce((acc, s) => {
    acc[s.id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 120; // Offset for sticky sidebar
      let current = sectionAnchors[0].id;
      for (const s of sectionAnchors) {
        const ref = sectionRefs.current[s.id];
        if (ref && ref.current) {
          const top = ref.current.offsetTop;
          if (scrollY >= top) current = s.id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row gap-8">
      <Sidebar activeSection={activeSection} />
      <main className="flex-1 max-w-4xl mx-auto px-2 lg:px-0">
        <section
          ref={sectionRefs.current.top}
          className="bg-accent-50 rounded-2xl shadow-xl p-8 mb-10 flex flex-col items-center text-center animate-fade-in"
          id="top"
        >
          {/* <img src={logo} alt="Logo" className="w-20 h-20 mb-4 rounded-full shadow" /> */}
          <h1 className="text-4xl font-bold text-accent-700 mb-2">Jaclyn Field Mathai</h1>
          <div className="text-lg font-semibold text-accent-600 mb-2">Senior Data Science Leader | ML Products | Creative Strategy</div>
          <div className="text-gray-700 text-base max-w-xl mb-2">I turn complex data and bold ideas into products that save time, unlock revenue, and delight users.</div>
        </section>

        <section
          ref={sectionRefs.current.education}
          id="education"
          className="mb-12 animate-fade-in"
        >
          <h2 className="text-2xl font-bold text-accent-700 mb-6">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg mb-8 p-6 border border-accent-100 flex items-center gap-6">
              <img src={edu.logo} alt={edu.institution} className="w-16 h-16 rounded-lg object-contain" />
              <div>
                <div className="font-bold text-lg text-accent-700">{edu.institution}</div>
                <div className="text-gray-700 font-semibold">{edu.degree} &mdash; {edu.field}</div>
                <div className="text-xs text-accent-400 font-semibold">{edu.dates}</div>
                <div className="text-gray-600 mt-2">{edu.summary}</div>
              </div>
            </div>
          ))}
        </section>

        <section
          ref={sectionRefs.current.experience}
          id="experience"
          className="mb-12 animate-fade-in"
        >
          <h2 className="text-2xl font-bold text-accent-700 mb-6">Work Experience</h2>
          <div className="relative">
            {/* Timeline vertical line: full height, behind all cards and logos */}
            <div
              className="absolute left-8 top-0 h-full w-1 bg-accent-100 rounded-full z-0"
              aria-hidden="true"
            ></div>
            <div className="flex flex-col gap-16">
              {workExperience.map((role, i) => (
                <div key={i} className="relative flex items-start">
                  {/* Timeline logo: floats over the line, left on desktop, centered on mobile */}
                  <div
                    className="
                      absolute
                      left-8
                      -translate-x-1/2
                      top-0
                      sm:top-0
                      w-14 h-14
                      rounded-full
                      bg-white
                      shadow-lg
                      border-2 border-accent-100
                      flex items-center justify-center
                      z-10
                      transition-all
                      sm:left-8
                      sm:-translate-x-1/2
                      sm:top-0
                      md:left-8
                      md:-translate-x-1/2
                      md:top-0
                    "
                    style={{
                      // On mobile, center above card
                      position: 'absolute',
                      top: '-1.75rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      // On desktop, left over timeline
                      ...(window.innerWidth >= 640
                        ? { left: '2rem', top: '0', transform: 'translateX(-50%)' }
                        : {}),
                    }}
                  >
                    <img src={role.logo} alt={role.company} className="w-8 h-8 object-contain" />
                  </div>
                  {/* Card: add left margin for timeline/logo on desktop */}
                  <div className="flex-1 ml-0 sm:ml-24">
                    <ExpandableExperience role={role} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.current.skills} id="skills" className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-accent-700 mb-6">Skills & Tech Stack</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-accent-100">
            <div className="flex flex-wrap gap-3 justify-center mb-2">
              {skills.technical.map((skill, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 font-semibold text-sm shadow">{skill}</span>
              ))}
              {skills.leadership.map((skill, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm shadow">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.current.certifications} id="certifications" className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-accent-700 mb-6">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-accent-100 flex flex-col items-center">
                <img src={cert.logo} alt={cert.org} className="h-10 w-10 object-contain mb-2" />
                <div className="font-bold text-lg text-accent-700 text-center mb-1">{cert.name}</div>
                <div className="text-sm text-gray-500 text-center mb-1">{cert.org}</div>
                <div className="text-xs text-accent-400 font-semibold mb-1">{cert.date}</div>
                <span className="inline-block px-4 py-1 rounded-full font-semibold text-sm mb-2" style={{ background: badgeColors[cert.type], color: '#fff' }}>{cert.type}</span>
              </div>
            ))}
          </div>
        </section>

        <section ref={sectionRefs.current.awards} id="awards" className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-accent-700 mb-6">Awards & Honors</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {awards.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-accent-100 flex flex-col items-center min-w-[220px] max-w-[320px]">
                <FaAward className="text-accent-400 text-3xl mb-2" />
                <div className="font-bold text-lg text-accent-700 text-center mb-1">{item.title}</div>
                <div className="text-sm text-gray-500 text-center mb-1">{item.role}</div>
                <div className="text-xs text-accent-400 font-semibold mb-1">{item.dates}</div>
                <div className="text-gray-600 text-center">{item.summary}</div>
              </div>
            ))}
          </div>
        </section>

        <section ref={sectionRefs.current.speaking} id="speaking" className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-accent-700 mb-6">Speaking & Thought Leadership</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {speaking.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-accent-100 flex flex-col items-center min-w-[220px] max-w-[320px]">
                <FaMicrophone className="text-accent-400 text-3xl mb-2" />
                <div className="font-bold text-lg text-accent-700 text-center mb-1">{item.title}</div>
                <div className="text-sm text-gray-500 text-center mb-1">{item.role}</div>
                <div className="text-xs text-accent-400 font-semibold mb-1">{item.dates}</div>
                <div className="text-gray-600 text-center">{item.summary}</div>
              </div>
            ))}
          </div>
        </section>

        <section ref={sectionRefs.current.contact} id="contact" className="mb-12 animate-fade-in">
          <div className="bg-accent-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <img src={logo} alt="Logo" className="w-16 h-16 mb-2 rounded-full" />
            <h2 className="text-2xl font-bold text-accent-700 mb-2">Let’s work together!</h2>
            <div className="text-gray-700 mb-2">Contact me for collaborations, consulting, or speaking.</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
              <a href="mailto:jacburge@gmail.com" className="flex items-center gap-2 bg-accent-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-accent-700 transition"><FaEnvelope /> jacburge@gmail.com</a>
              <a href="https://linkedin.com/in/jacburge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-100 text-accent-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-accent-200 transition"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResumePage;