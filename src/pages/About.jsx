import logo from '../assets/logo.png';
import { FaBookOpen, FaBrain, FaLightbulb } from 'react-icons/fa';

const About = () => (
  <div className="w-full flex justify-center py-14 bg-gradient-to-br from-accent-50 via-white to-gray-100"
    style={{
      background: 'linear-gradient(120deg, #e6f4f6 0%, #f8fafc 100%)',
    }}
  >
    <div
      className="w-full max-w-5xl rounded-2xl shadow-lg border-2 border-accent-100 px-8 py-12 flex flex-col items-center relative bg-transparent overflow-hidden"
    >
      {/* Logo overlay as background */}
      <img
        src={logo}
        alt="Logo"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-2/3 max-w-xl pointer-events-none select-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Card content */}
      <div className="w-full max-w-3xl text-center relative z-10">
        <div className="flex flex-col gap-8">
          {/* Background */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaBookOpen className="text-accent-600 text-3xl" />
              <h3 className="font-bold text-2xl text-accent-700">Background</h3>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
              I am a product-minded data science leader, blending analytics, storytelling, and art to create products that empower and inspire. Rooted in an interdisciplinary background, I bring a <span className="text-accent-600 font-semibold">maker’s mindset</span> to everything I do.
            </p>
          </div>
          {/* Philosophy */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaBrain className="text-accent-600 text-3xl" />
              <h3 className="font-bold text-2xl text-accent-700">Philosophy</h3>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-2">
              I believe <span className="text-accent-600 font-semibold">creativity is for everyone</span>—it just takes courage, practice, and the willingness to learn from failure. Building products and communities is like making art or practicing martial arts: it’s messy, dynamic, and demands resilience.
            </p>
          </div>
          {/* Mission */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaLightbulb className="text-accent-600 text-3xl" />
              <h3 className="font-bold text-2xl text-accent-700">Mission</h3>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              My mission is to break down barriers so more people feel seen, empowered, and inspired to create. Whether I’m scaling ML platforms or painting on a Sunday, I’m driven by curiosity, empathy, and the joy of turning ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;