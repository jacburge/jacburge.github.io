import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
// Import About, Footer as needed

const Home = () => (
  <div className="bg-gray-50 min-h-screen">
    <Hero />
    <AboutMe />
    <Skills />
    <FeaturedIn />
    {/* Add About, Footer components here */}
  </div>
);

export default Home;