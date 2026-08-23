import umdLogo from '../assets/logos/umd.png';
import snowflakeLogo from '../assets/logos/snowflake.png';

const highlights = [
  {
    title: "Best & Brightest Executive MBA",
    source: "Poets & Quants for Executives",
    summary: "Profiled among the most accomplished EMBA graduates from top business schools worldwide.",
    url: "https://poetsandquantsforexecs.com/students/2026-best-brightest-executive-mba-jaclyn-field-mathai-university-of-maryland-smith/",
    cta: "Read Profile",
    image: umdLogo,
    imageAlt: "University of Maryland Smith School of Business",
  },
  {
    title: "Among Best & Brightest Executive MBAs, Class of 2026",
    source: "Smith School of Business",
    summary: "Featured in Smith News, Research and Insights for academic and professional distinction.",
    url: "https://www.rhsmith.umd.edu/news/smiths-jaclyn-mathai-among-best-brightest-executive-mbas-class-2026",
    cta: "Read Article",
    image: umdLogo,
    imageAlt: "University of Maryland Smith School of Business",
  },
  {
    title: "Audience Flow Intelligence",
    source: "Snowflake Summit 2026",
    summary: "Connecting what airs, what people watch, and what they say — the first GenAI application for executive producers in our org.",
    url: "https://reg.snowflake.com/flow/snowflake/summit26/sessions/page/catalog/session/1763534212920001UGhb",
    cta: "View Session",
    image: snowflakeLogo,
    imageAlt: "Snowflake Summit",
  },
];

const FeaturedIn = () => (
  <section id="featured-in" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-accent-600 mb-3 text-center">Featured In</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Recognition and conference highlights from recent work in AI product leadership.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div key={item.url} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-12 object-contain"
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-accent-500 mb-2 text-center">
              {item.source}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-accent-700">{item.title}</h3>
            <p className="text-gray-700 mb-6 text-center flex-1">{item.summary}</p>
            <a
              href={item.url}
              className="mt-auto bg-accent-600 text-white px-6 py-2 rounded-2xl font-semibold text-base hover:bg-accent-700 transition shadow text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedIn;
