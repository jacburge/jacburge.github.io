import logo from '../assets/logo.png';
import { FaLightbulb, FaHeart, FaRocket } from 'react-icons/fa';

const AboutMeCard = () => (
  <section id='about-me'>
  <div
    className="w-full flex justify-center py-20 bg-gradient-to-br from-accent-50 via-white to-gray-100"
    style={{
      background: 'linear-gradient(120deg, #e6f4f6 0%, #f8fafc 100%)',
    }}
  >
    <div className="w-full max-w-5xl flex flex-col items-center relative bg-transparent overflow-hidden px-4 sm:px-8">
      {/* Logo overlay as background */}
      <img
        src={logo}
        alt="Logo"
        className="absolute inset-0 m-auto opacity-10 w-full h-full object-contain pointer-events-none select-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Main content */}
      <div className="w-full max-w-5xl text-center flex flex-col gap-10 relative z-10">
        {/* Large Heading */}

        {/* About Me */}
        <div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-accent-700 mb-8 text-center leading-tight">
            AI product builder. Team builder. Artist <span className="text-accent-600">&amp; martial artist</span>.
          </h1>
        </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
          I bring creativity, technical rigor, and human-centered leadership to create data products that empower and inspire. Over the last decade, I’ve scaled a team that builds AI products for executives and products, scaled ML-driven platforms and frameworks that automated 60+ hours of monthly forecasting while supporting hundreds of millions in ad revenue, migrated legacy stacks to cloud pipelines, and led cross-functional initiatives converting ambiguity into action.
              Rooted in an interdisplinary background as a Berkeley-trained cognitive scientist, I bring a maker's mindset to everything I do.
              Cognitive science studies the mind through both computational models and human meaning. This duality has always mattered to me. For AI to have measurable impact, it must amplify human ingenuity.          </p>
        </div>
        {/* Philosophy */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaHeart className="text-accent-600 text-3xl" />
            <h2 className="font-bold text-2xl text-accent-700">Philosophy</h2>
          </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
            My leadership philosophy is building environments where technical depth and creative thinking have space to harmonize. I believe creativity is for everyone—it just takes courage, practice, and the willingness to learn from failure. Building data products is like making art or practicing martial arts: messy, dynamic, and demanding resilience. Whether I'm leading a team through ambiguity or painting on a Sunday, I'm driven by curiosity and the joy of turning ideas into reality.
          </p>
        </div>
        {/* Purpose */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaRocket className="text-accent-600 text-3xl" />
            <h2 className="font-bold text-2xl text-accent-700">Purpose</h2>
          </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Blending art and technology to amplify stories affirming a sense of belonging and human connection.
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
);

export default AboutMeCard;