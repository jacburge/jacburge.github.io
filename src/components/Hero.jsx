import headshot from '../assets/jaclyn_portugal.jpg';
import jaclynIcon from '../assets/jaclyn_icon.png';
import helloSvg from '../assets/hello.svg';
import { personalInfo } from '../data/projects';
import { useState } from 'react';

const Hero = () => {
  const [showIllustration, setShowIllustration] = useState(false);

  // Detect mobile (simple check)
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const handleToggle = () => setShowIllustration((prev) => !prev);

  return (
    <section
      className="relative py-24 lg:py-20 overflow-hidden"
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
            {/* Animated hello.svg above name, typewriter style, larger than name */}
            <div className="flex justify-center lg:justify-start mb-2">
              <img
                src={helloSvg}
                alt="Hello"
                className="w-64 h-auto animate-hello-typewriter"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">{personalInfo.name}</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl text-white mb-4 font-semibold">
              {personalInfo.tagline}
            </p>
            <p className="text-lg text-white mb-6 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('featured-projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-accent-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-accent-200 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                See My Work
              </button>
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-accent-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-accent-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download Resume
              </button>
            </div> */}
          </div>
          {/* Right: Headshot/Illustration */}
          <div className="flex-1 flex flex-col items-center lg:justify-end">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center mb-8"
              tabIndex={0}
              onMouseEnter={() => !isMobile && setShowIllustration(true)}
              onMouseLeave={() => !isMobile && setShowIllustration(false)}
              onFocus={() => !isMobile && setShowIllustration(true)}
              onBlur={() => !isMobile && setShowIllustration(false)}
            >
              {/* Photo */}
              <img
                src={headshot}
                alt="Jaclyn Field Mathai"
                className={`absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl border-4 border-white transition-opacity duration-500 ${showIllustration ? "opacity-0 z-0" : "opacity-100 z-10"}`}
                draggable={false}
              />
              {/* Illustration */}
              <img
                src={jaclynIcon}
                alt="Jaclyn Field Mathai Illustration"
                className={`absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl border-4 border-white transition-opacity duration-500 ${showIllustration ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                draggable={false}
              />
              {/* Mobile toggle button */}
              {isMobile && (
                <button
                  type="button"
                  onClick={handleToggle}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold z-20"
                  style={{ outline: 'none' }}
                  aria-label={showIllustration ? "Show photo" : "See illustration"}
                >
                  {showIllustration ? "Show photo" : "See illustration"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Animated down-arrow and scroll text */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center z-20" >
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
      {/* Animation CSS */}
      <style>
        {`
          @keyframes helloTypewriter {
            0% {
              opacity: 0;
              clip-path: inset(0 100% 0 0);
            }
            10% {
              opacity: 1;
              clip-path: inset(0 100% 0 0);
            }
            80% {
              opacity: 1;
              clip-path: inset(0 0% 0 0);
            }
            100% {
              opacity: 1;
              clip-path: inset(0 0% 0 0);
            }
          }
          .animate-hello-typewriter {
            animation: helloTypewriter 1.6s steps(20, end) both;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;