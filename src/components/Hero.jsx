import headshot from '../assets/jaclyn_portugal.jpg';
import { personalInfo } from '../data/projects';

// Example logo imports (replace with your actual logo files)
import disneyLogo from '../assets/logos/disney.png';
import libertyLogo from '../assets/logos/liberty.png';
import pythonLogo from '../assets/logos/python.png';
import reactLogo from '../assets/logos/react.png';
import awsLogo from '../assets/logos/aws.png';
import tableauLogo from '../assets/logos/tableau.png';
import berkeleyLogo from '../assets/logos/berkeley.png';
import ewhaLogo from '../assets/logos/ewha.png';
import umdLogo from '../assets/logos/umd.png';

const companyLogos = [
  { src: disneyLogo, alt: 'Disney', tooltip: 'Disney' },
  { src: libertyLogo, alt: 'Liberty Mutual', tooltip: 'Liberty Mutual' },
];

const techLogos = [
  { src: pythonLogo, alt: 'Python', tooltip: 'Python' },
  { src: reactLogo, alt: 'React', tooltip: 'React' },
  { src: awsLogo, alt: 'AWS', tooltip: 'AWS' },
  { src: tableauLogo, alt: 'Tableau', tooltip: 'Tableau' },
];

const schoolLogos = [
  { src: berkeleyLogo, alt: 'UC Berkeley', tooltip: 'UC Berkeley' },
  { src: ewhaLogo, alt: 'Ewha Womans University', tooltip: 'Ewha Womans University' },
  { src: umdLogo, alt: 'University of Maryland', tooltip: 'University of Maryland, College Park' },
];

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #76A5AE 0%, #E6F4F6 100%)',
      }}
    >
      {/* Optional geometric pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"%2376A5AE\" fill-opacity=\"0.08\"/><circle cx=\"25\" cy=\"25\" r=\"2\" fill=\"%2376A5AE\" fill-opacity=\"0.08\"/><circle cx=\"75\" cy=\"75\" r=\"2\" fill=\"%2376A5AE\" fill-opacity=\"0.08\"/></svg>')",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">{personalInfo.name}</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl text-white mb-4 font-semibold">
              {personalInfo.tagline}
            </p>
            <p className="text-lg text-white mb-6 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={scrollToProjects}
                className="bg-white text-accent-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-accent-200 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                See My Work
              </button>
              <button
                onClick={openResume}
                className="bg-accent-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-accent-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download Resume
              </button>
            </div>
          </div>
          {/* Right: Headshot */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={headshot}
              alt="Jaclyn Field Mathai"
              className="w-96 h-96 object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>
        </div>

      </div>
      {/* Animated down-arrow and scroll text */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-white text-lg mb-2 opacity-80">Scroll for more</span>
        <svg
          className="animate-bounce"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M16 22L8 14M16 22L24 14"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;