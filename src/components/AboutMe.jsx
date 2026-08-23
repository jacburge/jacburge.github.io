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
            AI product strategist. People leader. Artist <span className="text-accent-600">&amp; martial artist</span>.
          </h1>
        </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
            Cognitive science studies the mind through both computational models and human meaning. This duality has always mattered to me, as I am drawn to the space where a model ends and a person begins. It's shaped a decade of moving from building models, to owning AI products and platforms, to growing the teams that ship them, often in spaces where nobody has the full playbook yet.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
            That interdisciplinary background, as a Berkeley-trained cognitive scientist with a <span className="text-accent-600 font-semibold">maker's mindset</span>, shapes how I lead: human-centered design, plain language over jargon, and a belief that AI works best when it <span className="text-accent-600 font-semibold">amplifies human ingenuity</span>.
          </p>
        </div>
        {/* Philosophy */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaHeart className="text-accent-600 text-3xl" />
            <h2 className="font-bold text-2xl text-accent-700">Philosophy</h2>
          </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
            I believe <span className="text-accent-600 font-semibold">creativity is for everyone</span>—it just takes courage, practice, and the willingness to learn from failure. Building data products is like making art or practicing martial arts: it's messy, dynamic, and demands resilience. Whether I'm leading a technical team or painting on a Sunday, I'm driven by curiosity, empathy, and the joy of turning ideas into reality.
          </p>
        </div>
        {/* Purpose */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaRocket className="text-accent-600 text-3xl" />
            <h2 className="font-bold text-2xl text-accent-700">Purpose</h2>
          </div>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Blending <span className="text-accent-600 font-semibold">art and technology</span> to amplify stories affirming a sense of belonging and human connection.
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
);

export default AboutMeCard;