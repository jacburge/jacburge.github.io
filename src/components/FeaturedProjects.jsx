import { projects } from '../data/projects';

const featuredProjects = projects.filter(p => p.featured);

const FeaturedProjects = () => (
  <section id="featured-projects" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-accent-600 mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((proj, idx) => (
          <div key={idx} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-700 mb-4">{proj.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tags.map((tag, i) => (
                <span key={i} className="bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              className="mt-auto bg-accent-600 text-white px-6 py-2 rounded-2xl font-semibold text-base hover:bg-accent-700 transition shadow"
              target={proj.links[0].url} rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;