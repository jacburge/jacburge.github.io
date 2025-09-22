import { useState, useRef, useEffect } from 'react';
import { projects } from '../data/projects';
// ...import other project images/videos as needed...

const accentBg = {
  background: 'linear-gradient(120deg, #e6f4f6 0%, #f8fafc 100%)',
};

const iconMap = {
  github: {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.21 1.18a11.2 11.2 0 0 1 2.93-.39c.99.01 1.99.13 2.93.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.12 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>,
    label: 'GitHub'
  },
  website: {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" strokeWidth="2"/></svg>,
    label: 'Website'
  },
  video: {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4z"/></svg>,
    label: 'Video'
  },
  slides: {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2 0v12h14V6H5zm7 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"/></svg>,
    label: 'Slides'
  },
  pdf: {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/></svg>,
    label: 'PDF'
  },
  press: {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z"/></svg>,
    label: 'Press'
  }
};

function getMediaType(url) {
  if (url.match(/\.(mp4|webm|mov)$/)) return 'video';
  return 'image';
}

const Projects = () => {
  const [modal, setModal] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [showFullThought, setShowFullThought] = useState(false);
  const modalRef = useRef();

  // Keyboard accessibility for modal
  useEffect(() => {
    if (!modal) return;
    function handleKey(e) {
      if (e.key === 'Escape') setModal(null);
      if (e.key === 'ArrowRight') setCarouselIdx(i => Math.min(i + 1, (modal.media?.length || 1) - 1));
      if (e.key === 'ArrowLeft') setCarouselIdx(i => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modal]);

  // Trap focus in modal
  useEffect(() => {
    if (!modal || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
  }, [modal]);

  // Swipe gestures for carousel (mobile)
  useEffect(() => {
    if (!modal || !(modal.media?.length > 1)) return;
    let startX = null;
    function onTouchStart(e) { startX = e.touches[0].clientX; }
    function onTouchEnd(e) {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) setCarouselIdx(i => Math.max(i - 1, 0));
      if (dx < -50) setCarouselIdx(i => Math.min(i + 1, modal.media.length - 1));
      startX = null;
    }
    const el = modalRef.current;
    el?.addEventListener('touchstart', onTouchStart);
    el?.addEventListener('touchend', onTouchEnd);
    return () => {
      el?.removeEventListener('touchstart', onTouchStart);
      el?.removeEventListener('touchend', onTouchEnd);
    };
  }, [modal, carouselIdx]);

  return (
    <div className="min-h-screen w-full py-8" style={accentBg}>
      {/* Top headline and intro */}
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent-700 mb-4">Selected Works</h1>
        <p className="text-lg text-gray-700 mb-6 font-medium">A showcase of my favorite passion projects—exploring data, design, and community building. Click any card to learn more!</p>
      </div>
      {/* Projects grid */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl shadow-2xl transition-all duration-300 p-8 flex flex-col cursor-pointer group relative hover:-translate-y-1 hover:shadow-accent-400 focus-within:shadow-accent-400"
              tabIndex={0}
              aria-label={`Expand details for ${proj.title}`}
              style={{ outline: modal?.id === proj.id ? '2px solid #76A5AE' : 'none' }}
              onClick={() => setModal({ ...proj, media: proj.media || [proj.image], links: proj.links || [] })}
              onKeyDown={e => (e.key === 'Enter' ? setModal({ ...proj, media: proj.media || [proj.image], links: proj.links || [] }) : null)}
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-video shadow-lg">
                {getMediaType(proj.image) === 'video' ? (
                  <video src={proj.image} className="w-full h-full object-cover" controls poster={proj.media?.[0]} />
                ) : (
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ aspectRatio: '16/9' }} />
                )}
                {/* Overlay button */}
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition group-hover:opacity-100 opacity-0 md:opacity-0 md:group-hover:opacity-100 text-white font-bold text-lg rounded-2xl"
                  style={{ pointerEvents: 'none' }}
                  aria-hidden="true"
                >
                  View Project
                </button>
                <button
                  className="absolute bottom-4 right-4 bg-accent-600 text-white px-4 py-2 rounded-full font-semibold text-base shadow-lg md:hidden"
                  onClick={e => { e.stopPropagation(); setModal({ ...proj, media: proj.media || [proj.image], links: proj.links || [] }); }}
                  tabIndex={0}
                >
                  View Project
                </button>
              </div>
              <h3 className="text-2xl font-bold text-accent-700 mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4 text-base font-medium line-clamp-3">{proj.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Modal for expanded project view */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center animate-fade-in"
          onClick={() => setModal(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-0 relative animate-slide-in flex flex-col md:p-10 overflow-y-auto"
            style={{ maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
            ref={modalRef}
            tabIndex={-1}
          >
            <button className="absolute top-4 right-4 text-gray-500 hover:text-accent-700 text-2xl" onClick={() => setModal(null)} aria-label="Close">&times;</button>
            {/* Carousel/gallery */}
            {modal.media?.length > 1 ? (
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-video shadow-lg flex items-center justify-center">
                {getMediaType(modal.media[carouselIdx]) === 'video' ? (
                  <video src={modal.media[carouselIdx]} className="w-full h-full object-cover" controls />
                ) : (
                  <img src={modal.media[carouselIdx]} alt={modal.title} className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} />
                )}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-accent-700 rounded-full p-2 shadow hover:bg-accent-100"
                  onClick={() => setCarouselIdx(i => Math.max(i - 1, 0))}
                  disabled={carouselIdx === 0}
                  aria-label="Previous media"
                >
                  &#8592;
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-accent-700 rounded-full p-2 shadow hover:bg-accent-100"
                  onClick={() => setCarouselIdx(i => Math.min(i + 1, modal.media.length - 1))}
                  disabled={carouselIdx === modal.media.length - 1}
                  aria-label="Next media"
                >
                  &#8594;
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {modal.media.map((_, idx) => (
                    <span key={idx} className={`w-2 h-2 rounded-full ${idx === carouselIdx ? 'bg-accent-600' : 'bg-accent-200'}`}></span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-6 rounded-2xl overflow-hidden aspect-video shadow-lg">
                {getMediaType(modal.media?.[0]) === 'video' ? (
                  <video src={modal.media?.[0]} className="w-full h-full object-cover" controls />
                ) : (
                  <img src={modal.media?.[0]} alt={modal.title} className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} />
                )}
              </div>
            )}
            <div className="px-6 md:px-0">
              <h3 className="text-2xl font-bold text-accent-700 mb-1">{modal.title}</h3>
              {modal.role && <div className="text-accent-500 font-semibold mb-2">{modal.role}</div>}
              {/* External links as icon buttons */}
              <div className="flex gap-3 mb-4 flex-wrap">
                {modal.links?.map((link, i) => {
                  const type = link.type || (link.url.includes('github.com') ? 'github' : link.url.match(/\.pdf$/) ? 'pdf' : link.url.match(/slides|deck|ppt|presentation/) ? 'slides' : link.url.match(/youtu|vimeo|video/) ? 'video' : link.url.match(/press|news|article/) ? 'press' : 'website');
                  const icon = iconMap[type]?.icon || iconMap.website.icon;
                  const label = iconMap[type]?.label || link.label;
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent-100 hover:bg-accent-200 text-accent-700 rounded-full px-4 py-2 flex items-center gap-2 font-semibold shadow transition focus:outline-accent-600"
                      tabIndex={0}
                      aria-label={label}
                    >
                      <span className="tooltip relative group">
                        {icon}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">{label}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
              {/* Rich text description */}
              {modal.details && (
                <div className="prose prose-accent max-w-none mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: modal.details }} />
              )}
              {/* Thought Process section with Read More toggle */}
              {modal.reflection && (
                <div className="mb-4">
                  <div className="text-accent-700 italic text-base font-semibold mb-2">My Approach</div>
                  <div className={`transition-all duration-300 overflow-hidden ${showFullThought ? '' : 'line-clamp-5'}`}>{modal.reflection}</div>
                  {modal.reflection.length > 400 && (
                    <button
                      className="mt-2 text-accent-600 underline text-sm font-medium focus:outline-accent-600"
                      onClick={() => setShowFullThought(v => !v)}
                    >
                      {showFullThought ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              )}
              {/* All tags at bottom */}
              <div className="flex flex-wrap gap-2 mt-4">
                {modal.tags.map((tag, i) => (
                  <span key={i} className="bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>
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
        .animate-slide-in { animation: slideIn 0.5s cubic-bezier(.4,2,.3,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: none; } }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-5 { display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; }
        .tooltip span { pointer-events: none; }
      `}</style>
    </div>
  );
};

export default Projects;
