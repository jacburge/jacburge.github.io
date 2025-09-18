import { personalInfo } from '../data/projects';
import jaclynBlossoms from '../assets/jaclyn_blossoms.jpg';
// Example icons (replace with your own or use react-icons)
import { FaLinkedin, FaEnvelope, FaGithub, FaPaintBrush, FaBrain, FaUsers, FaLightbulb, FaBookOpen, FaTrophy } from 'react-icons/fa';
import { useState } from 'react';
import { FaLocationPin } from 'react-icons/fa6';

const quickFacts = [
  { icon: <FaPaintBrush className="text-accent-500" />, label: "Artist & Maker" },
  { icon: <FaBrain className="text-accent-500" />, label: "Cognitive Science @ Berkeley" },
  { icon: <FaUsers className="text-accent-500" />, label: "Builder of Inclusive Communities" },
  { icon: <FaTrophy className="text-accent-500" />, label: "Gold Medal Martial Artist" },
  { icon: <FaLocationPin className="text-accent-500" />, label: "Greater DC Area" }
];

const expertiseBadges = [
  { icon: <FaBookOpen />, label: "Product Strategy", color: "bg-teal-100 text-teal-800" },
  { icon: <FaBrain />, label: "Data Science & Engineering", color: "bg-yellow-100 text-yellow-800" },
  { icon: <FaPaintBrush />, label: "User-Centered Design", color: "bg-pink-100 text-pink-800" },
  { icon: <FaUsers />, label: "Team Leadership", color: "bg-blue-100 text-blue-800" },
  { icon: <FaLightbulb />, label: "Creative Problem Solving", color: "bg-purple-100 text-purple-800" },
  { icon: <FaUsers />, label: "Community Building", color: "bg-orange-100 text-orange-800" },
];

const expandableCards = [
  {
    title: "Background",
    icon: <FaBookOpen className="text-accent-600 mr-2" />,
    content: (
      <p className="text-gray-700">
        Over the last decade, I’ve scaled ML-driven platforms and frameworks that automated 60+ hours of monthly forecasting while supporting hundreds of millions in ad revenue, migrated legacy stacks to cloud pipelines, and led cross-functional teams that convert ambiguity into action. Rooted in an interdisciplinary journey from Cognitive Science at UC Berkeley to Data Science leadership at Disney, I bring <b>a maker’s mindset</b> to everything I do.
      </p>
    ),
  },
  {
    title: "Expertise",
    icon: <FaBrain className="text-accent-600 mr-2" />,
    content: (
      <div className="flex flex-wrap gap-3 mt-2">
        {expertiseBadges.map((badge, idx) => (
          <span key={idx} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow-sm text-sm ${badge.color}`}>
            {badge.icon}
            {badge.label}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Philosophy",
    icon: <FaLightbulb className="text-accent-600 mr-2" />,
    content: (
      <blockquote className="border-l-4 border-accent-400 pl-4 italic text-accent-700 bg-accent-50 py-4 rounded">
        I believe <b>creativity is for everyone</b>—it just takes courage, practice, and the willingness to learn from failure. Building products and communities is like making art or practicing martial arts: it’s messy, dynamic, and demands resilience. My mission is to break down barriers so more people feel seen, empowered, and inspired to create. Whether I’m scaling ML platforms or painting on a Sunday, I’m driven by curiosity, empathy, and the joy of turning ideas into reality.
      </blockquote>
    ),
  },
];

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/jaclynmathai", label: "LinkedIn", color: "bg-blue-600" },
  { icon: <FaEnvelope />, href: "mailto:jaclynmathai@gmail.com", label: "Email", color: "bg-red-500" },
  { icon: <FaGithub />, href: "https://github.com/jaclynmathai", label: "GitHub", color: "bg-gray-800" },
];

const About = () => {
  const [openCard, setOpenCard] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Left Column: Profile & Social */}
          <div className="flex flex-col items-center md:w-1/3">
            <img
              src={jaclynBlossoms}
              alt="Jaclyn Blossoms"
              className="w-64 h-64 rounded-full shadow-xl object-cover mb-6 border-4 border-accent-100"
            />
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full shadow-md hover:scale-110 transition-transform ${link.color} text-white text-xl`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  {fact.icon}
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column: Headline & Cards */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Data, Design & Creative Leadership
                <span className="block h-1 w-24 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mt-2 animate-pulse"></span>
              </h2>
              <div className="text-xl text-gray-600 mb-4 font-semibold">{personalInfo.bio}</div>
            </div>
            {/* Expandable Cards */}
            <div className="space-y-4">
              {expandableCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl shadow-md border border-accent-100 bg-white transition-all duration-300 ${openCard === idx ? "ring-2 ring-accent-400" : ""}`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                    onClick={() => setOpenCard(openCard === idx ? -1 : idx)}
                  >
                    <span className="flex items-center text-xl font-bold text-accent-700">
                      {card.icon}
                      {card.title}
                    </span>
                    <span className="ml-2 text-accent-400">{openCard === idx ? "−" : "+"}</span>
                  </button>
                  {openCard === idx && (
                    <div className="px-6 pb-6">{card.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;