import { personalInfo } from '../data/projects';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    // This would link to actual resume file
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-accent-50 via-blue-50 to-indigo-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">{personalInfo.name}</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          {/* Bio */}
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={openResume}
              className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-accent-600 hover:bg-accent-600 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;