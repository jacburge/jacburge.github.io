import { personalInfo } from '../data/projects';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Background</h2>
            <p className="text-gray-700 mb-6">
              With a deep foundation in mathematics and years of experience in product leadership, 
              I specialize in translating complex technical concepts into accessible, user-friendly experiences. 
              My work spans the intersection of analytical thinking, creative problem-solving, and strategic product development.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                Mathematical Modeling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                Product Strategy
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                Data Visualization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                User Experience Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                Creative Technology
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                Educational Innovation
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Philosophy</h2>
            <p className="text-gray-700">
              I believe that the most beautiful solutions emerge at the intersection of logical thinking and creative expression. 
              Whether I'm developing a new product feature, creating mathematical art, or solving complex problems, 
              I approach each challenge with curiosity, empathy, and a commitment to making the complex accessible and beautiful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;