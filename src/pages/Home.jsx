import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
    </div>
  );
};

export default Home;