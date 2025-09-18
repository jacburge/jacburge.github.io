import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
// Import About, Footer as needed

const Home = () => (
  <div className="bg-gray-50 min-h-screen">
    <Hero />
    <FeaturedProjects />
    <Skills />
    {/* Add About, Footer components here */}
  </div>
);

export default Home;