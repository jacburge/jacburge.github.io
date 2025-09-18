import { featuredProjects } from '../data/projects';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Project Image */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-2xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            // Fallback to gradient background if image fails to load
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('bg-gradient-to-br', 'from-accent-100', 'to-accent-200');
          }}
        />
        {/* Fallback content when image doesn't load */}
        <div className="flex items-center justify-center text-accent-600 font-semibold text-lg">
          {project.title}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.summary}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-3">
          <a
            href={project.link}
            className="bg-accent-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-700 transition-colors"
            onClick={(e) => { e.preventDefault(); /* Add actual link handling */ }}
          >
            View Project
          </a>
          <a
            href={project.github}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            onClick={(e) => { e.preventDefault(); /* Add actual github link handling */ }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my work that showcases the intersection of mathematics, art, and technology.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;