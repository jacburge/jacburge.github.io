import { useState } from 'react';
import { projects } from '../data/projects';
import maxwellWide from '../assets/projects/maxwell-wide.png';
import libraryImg from '../assets/projects/library.png';
// ...import other project images/videos as needed...

const accentBg = {
  background: 'linear-gradient(120deg, #e6f4f6 0%, #f8fafc 100%)',
};

const tagColors = {
  default: 'bg-accent-100 text-accent-700',
  active: 'bg-accent-600 text-white',
};

const roles = Array.from(new Set(projects.map(p => p.role || '')));
const techs = Array.from(new Set(projects.flatMap(p => p.tags || [])));
const years = Array.from(new Set(projects.map(p => p.year).filter(Boolean)));

function filterProjects(projectsArr, filters) {
  return projectsArr.filter(p => {
    if (filters.role && p.role !== filters.role) return false;
    if (filters.tech && !(p.tags || []).includes(filters.tech)) return false;
    if (filters.year && p.year !== filters.year) return false;
    return true;
  });
}

const Projects = () => {
  const [filters, setFilters] = useState({ role: '', tech: '', year: '' });
  const [sort, setSort] = useState('featured');
  const [expanded, setExpanded] = useState(null);
  const [modal, setModal] = useState(null);

  const filtered = filterProjects(projects, filters);
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sort === 'recent') return (b.year || 0) - (a.year || 0);
    return 0;
  });

  return (
    <div className="min-h-screen w-full" style={accentBg}>
      {/* Top headline and intro */}
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent-700 mb-4 drop-shadow-lg">Selected Works</h1>
        <p className="text-lg text-gray-700 mb-6 font-medium">A showcase of my favorite passion projects—exploring data, design, and community building. Click any card to learn more!</p>
      </div>
      {/* Filter/sort controls */}
      <div className="max-w-5xl mx-auto px-4 mb-8 flex flex-wrap gap-4 justify-center items-center sticky top-0 z-30 bg-white/80 rounded-xl shadow-lg py-4">
        <select className="rounded-lg px-4 py-2 border border-accent-200 text-accent-700" value={filters.role} onChange={e => setFilters(f => ({ ...f, role: e.target.value }))}>
          <option value="">All Roles</option>
          {roles.map(r => r && <option key={r} value={r}>{r}</option>)}
        </select>
        <select className="rounded-lg px-4 py-2 border border-accent-200 text-accent-700" value={filters.tech} onChange={e => setFilters(f => ({ ...f, tech: e.target.value }))}>
          <option value="">All Tech</option>
          {techs.map(t => t && <option key={t} value={t}>{t}</option>)}
        </select>
        <select className="rounded-lg px-4 py-2 border border-accent-200 text-accent-700" value={filters.year} onChange={e => setFilters(f => ({ ...f, year: e.target.value }))}>
          <option value="">All Years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select className="rounded-lg px-4 py-2 border border-accent-200 text-accent-700" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="featured">Featured First</option>
          <option value="recent">Most Recent</option>
        </select>
      </div>
      {/* All Projects grid/list */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sorted.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl shadow-2xl hover:shadow-accent-400 transition-all duration-300 p-8 flex flex-col cursor-pointer group relative"
              onClick={() => setExpanded(proj.id)}
              tabIndex={0}
              onKeyDown={e => (e.key === 'Enter' ? setExpanded(proj.id) : null)}
              aria-label={`Expand details for ${proj.title}`}
              style={{ outline: expanded === proj.id ? '2px solid #76A5AE' : 'none' }}
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                  onClick={e => { e.stopPropagation(); setModal(proj); }}
                />
              </div>
              <h3 className="text-2xl font-bold text-accent-700 mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4 text-base font-medium">{proj.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-sm font-medium">{tag}</span>
                ))}
              </div>
              <button
                className="mt-auto bg-accent-600 text-white px-6 py-2 rounded-2xl font-semibold text-base hover:bg-accent-700 transition shadow group-hover:scale-105 group-hover:shadow-lg"
                onClick={e => { e.stopPropagation(); setExpanded(proj.id); }}
              >
                View Project
              </button>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-accent-200 group-hover:bg-accent-600 transition-all duration-300 rounded-b-3xl" />
              {expanded === proj.id && (
                <div className="mt-8 p-6 bg-accent-50 rounded-2xl shadow-inner animate-fade-in">
                  <h4 className="text-xl font-bold text-accent-700 mb-2">Details</h4>
                  <p className="text-gray-700 mb-4">{proj.details || proj.summary}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {proj.links && proj.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="underline text-accent-600 hover:text-accent-800 font-semibold">{link.label}</a>
                    ))}
                  </div>
                  {proj.reflection && <div className="text-accent-700 italic text-base">{proj.reflection}</div>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Modal for expanded project view */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center" onClick={() => setModal(null)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 relative animate-fade-in" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-accent-700 text-2xl" onClick={() => setModal(null)} aria-label="Close">&times;</button>
            <div className="mb-6 rounded-2xl overflow-hidden aspect-video shadow-lg">
              <img src={modal.image} alt={modal.title} className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} />
            </div>
            <h3 className="text-2xl font-bold text-accent-700 mb-2">{modal.title}</h3>
            <p className="text-gray-700 mb-4 text-base font-medium">{modal.details || modal.summary}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {modal.tags.map((tag, i) => (
                <span key={i} className="bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-sm font-medium">{tag}</span>
              ))}
            </div>
            {modal.links && modal.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="underline text-accent-600 hover:text-accent-800 font-semibold mr-4">{link.label}</a>
            ))}
            {modal.reflection && <div className="text-accent-700 italic text-base mt-4">{modal.reflection}</div>}
          </div>
        </div>
      )}
      {/* Sticky Back to Top button */}
      <button
        className="fixed bottom-8 right-8 bg-accent-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-accent-700 transition z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to Top"
      >
        ↑ Back to Top
      </button>
      {/* Microanimations and custom styles */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(.4,2,.3,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default Projects;
