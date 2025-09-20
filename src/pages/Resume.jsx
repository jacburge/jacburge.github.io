import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaEnvelope, FaAward, FaMicrophone, FaFilePdf, FaGraduationCap, FaBriefcase, FaTools, FaCertificate, FaStar, FaComments, FaChevronDown, FaList } from "react-icons/fa";
import logo from "../assets/logo.png";
import disneyLogo from "../assets/logos/Disney.png";
import libertyLogo from "../assets/logos/liberty.png";
import berkeleyLogo from "../assets/logos/berkeley.png";
import umdLogo from "../assets/logos/umd.png";
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
    logo: edxLogo,
    name: "Programming with Python for Data Science (DAT210x)",
    org: "Microsoft (edX)",
    date: "Feb 2018",
    type: "Python",
  },
  {
    logo: edxLogo,
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
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "experience", label: "Work Experience", icon: <FaBriefcase /> },
  { id: "skills", label: "Skills", icon: <FaTools /> },
  { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
  { id: "awards", label: "Awards", icon: <FaStar /> },
  { id: "speaking", label: "Speaking", icon: <FaComments /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

function ResumeNavBar({ activeSection }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Find the active section label for scrollspy
  const activeLabel = sectionAnchors.find(s => s.id === activeSection)?.label || "Sections";

  // Collapse to dropdown on mobile, horizontal on desktop
  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-accent-100 w-screen" style={{ boxShadow: "0 12px 12px 0 rgba(59,130,246,0.04)" }}>
      {/* Desktop: horizontal nav */}
      <ul className="hidden lg:flex flex-row flex-nowrap w-full px-2 py-4 justify-center items-center gap-2 sm:gap-6 md:gap-10">
        {sectionAnchors
          .filter(s => s.id !== "contact")
          .map((s) => (
            <li key={s.id} className="relative min-w-[120px] flex-shrink-0 flex justify-center">
              <a
                href={`#${s.id}-header`}
                className={`flex items-center gap-2 px-4 py-3 font-semibold rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeSection === s.id
                    ? "text-accent-400"
                    : "text-gray-500 hover:text-accent-600"}
                `}
                tabIndex={0}
                aria-current={activeSection === s.id ? "section" : undefined}
                aria-label={s.label}
                title={s.label}
              >
                <span className="text-2xl" aria-label={s.label}>{s.icon}</span>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
      </ul>
      {/* Mobile: dropdown nav */}
      <div className="flex lg:hidden w-full px-2 py-2 justify-center items-center relative">
        <button
          className="flex items-center gap-2 px-4 py-3 font-semibold rounded-full bg-white border border-accent-100 shadow transition-all duration-300 text-accent-700"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Open sections menu"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <FaList className="text-xl" />
          <span>{activeLabel}</span>
          <FaChevronDown className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>
        {/* Dropdown menu */}
        <div
          className={`absolute left-1/2 top-full mt-2 w-[90vw] max-w-xs bg-white rounded-2xl shadow-lg border border-accent-100 z-50 transition-all duration-300 overflow-hidden
            ${dropdownOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"}
          `}
          style={{ transformOrigin: "top center" }}
          role="listbox"
        >
          {sectionAnchors
            .filter(s => s.id !== "contact")
            .map((s) => (
              <a
                key={s.id}
                href={`#${s.id}-header`}
                className={`flex items-center gap-3 px-6 py-4 font-semibold text-lg transition-all duration-200
                  ${activeSection === s.id
                    ? "text-accent-400 bg-accent-50"
                    : "text-gray-700 hover:bg-accent-100"}
                `}
                aria-label={s.label}
                title={s.label}
                tabIndex={0}
                role="option"
                onClick={() => setDropdownOpen(false)}
              >
                <span className="text-2xl">{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}

function ExpandableExperience({ role }) {
  return (
    <div
      className="transition-all duration-500 bg-white rounded-2xl shadow-lg mb-8 p-6 border border-accent-100 group"
      tabIndex={0}
      aria-expanded={true}
    >
      <div className="flex items-center gap-4 mb-2">
        <div>
          <div className="font-bold text-lg text-accent-700">{role.title}</div>
          <div className="font-semibold text-gray-700">{role.company}</div>
          <div className="text-xs text-accent-400 font-semibold">{role.dates}</div>
        </div>
      </div>
      {/* Bullets: single column, always expanded */}
      <div className="flex flex-col gap-2 mt-2">
        {role.bullets.map((b, i) => (
          <div key={i} className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold text-accent-600">• </span>{b}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumePage() {
  // Track active section for scrollspy
  const [activeSection, setActiveSection] = useState(sectionAnchors[0].id);
  const sectionRefs = useRef(sectionAnchors.reduce((acc, s) => {
    acc[s.id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 120;
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
    <div className="bg-gray-50 min-h-screen flex flex-col items-center w-full">
      {/* Top section: full width, no rounded corners */}
      <section
        ref={sectionRefs.current.top}
        className="bg-accent-50 shadow-xl p-8 mb-0 flex flex-col items-center text-center w-screen"
        id="top"
        style={{ left: 0, right: 0 }}
      >
        <h1 className="text-4xl font-bold text-accent-700 mb-2">Jaclyn Field Mathai</h1>
        <div className="text-lg font-semibold text-accent-600 mb-2">Senior Data Science Leader | ML Products | Creative Strategy</div>
        <div className="text-gray-700 text-base max-w-xl mb-2">I turn complex data and bold ideas into products that save time, unlock revenue, and delight users.</div>
      </section>
      <ResumeNavBar activeSection={activeSection} />
      <main className="w-full max-w-5xl mx-auto px-2 lg:px-0 flex-1">
        {/* Add margin above Education section */}
        <section
          ref={sectionRefs.current.education}
          id="education"
          className="mt-8 mb-12 animate-fade-in"
        >
          <h2
            id="education-header"
            className="text-2xl font-bold text-accent-700 mb-6"
            style={{ scrollMarginTop: "80px" }}
          >
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg mb-8 p-6 border border-accent-100 flex items-center gap-6">
              <img src={edu.logo} alt={edu.institution} className="w-24 h-24 rounded-lg object-contain" />
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
          <h2
            id="experience-header"
            className="text-2xl font-bold text-accent-700 mb-6"
            style={{ scrollMarginTop: "80px" }}
          >
            Work Experience
          </h2>
          <div className="relative">
            {/* Timeline vertical line: full height, behind all cards and logos */}
            <div
              className="absolute left-8 top-0 h-full w-1 bg-accent-100 rounded-full z-0"
              aria-hidden="true"
            ></div>
            <div className="flex flex-col gap-8">
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
                      w-16 h-16
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
                    <img src={role.logo} alt={role.company} className="w-12 h-12 object-contain" />
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
          <h2
            id="skills-header"
            className="text-2xl font-bold text-accent-700 mb-6"
            style={{ scrollMarginTop: "80px" }}
          >
            Skills & Tech Stack
          </h2>
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
          <h2
            id="certifications-header"
            className="text-2xl font-bold text-accent-700 mb-6"
            style={{ scrollMarginTop: "80px" }}
          >
            Certifications
          </h2>
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
          <h2
            id="awards-header"
            className="text-2xl font-bold text-accent-700 mb-6"
            style={{ scrollMarginTop: "80px" }}
          >
            Awards & Honors
          </h2>
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
          <h2
            id="speaking-header"
            className="text-2xl font-bold text-accent-700 mb-6"
            style={{ scrollMarginTop: "80px" }}
          >
            Speaking & Thought Leadership
          </h2>
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
        <section ref={sectionRefs.current.contact} id="contact" className="mb-0 animate-fade-in">
          {/* Contact section: match width and style of experience cards */}
          <div className="bg-accent-50 shadow-xl p-8 flex flex-col items-center text-center rounded-2xl max-w-5xl mx-auto">
            <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
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