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
            Data scientist. Team builder. Artist <span className="text-accent-600">&amp; martial artist</span>.
          </h1>
        </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
            I am a product-minded data science leader, blending creativity and technology to distill clarity from complexity. Over the last decade, I’ve scaled ML-driven platforms and frameworks that automated <span className="text-accent-600 font-semibold">60+ hours of monthly forecasting</span> while supporting <span className="text-accent-600 font-semibold">hundreds of millions in ad revenue</span>, migrated legacy stacks to cloud pipelines, and led cross-functional teams that convert ambiguity into action. Rooted in an interdisciplinary background, I bring a <span className="text-accent-600 font-semibold">maker’s mindset</span> to everything I do.
          </p>
        </div>
        {/* Philosophy */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaHeart className="text-accent-600 text-3xl" />
            <h2 className="font-bold text-2xl text-accent-700">Philosophy</h2>
          </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
            I believe <span className="text-accent-600 font-semibold">creativity is for everyone</span>—it just takes courage, practice, and the willingness to learn from failure. Building data products is like making art or practicing martial arts: it’s messy, dynamic, and demands resilience. Whether I’m leading a technical team or painting on a Sunday, I’m driven by curiosity, empathy, and the joy of turning ideas into reality.
          </p>
        </div>
        {/* Mission */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaRocket className="text-accent-600 text-3xl" />
            <h2 className="font-bold text-2xl text-accent-700">Mission</h2>
          </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            My mission is to break down barriers so more people feel seen, empowered, and inspired to create. 
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
);

export default AboutMeCard;