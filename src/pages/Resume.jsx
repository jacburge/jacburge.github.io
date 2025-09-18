const Resume = () => {
  const experience = [
    {
      title: "Senior Product Manager",
      company: "TechCorp",
      period: "2022 - Present",
      description: "Led product strategy for data visualization platform serving 100k+ users. Increased user engagement by 40% through innovative mathematical modeling features."
    },
    {
      title: "Product Manager",
      company: "DataViz Solutions",
      period: "2020 - 2022",
      description: "Managed development of educational technology products. Collaborated with mathematicians and designers to create accessible learning experiences."
    },
    {
      title: "Mathematics Research Assistant",
      company: "University Research Lab",
      period: "2018 - 2020",
      description: "Conducted research in applied mathematics and data visualization. Published 3 papers on mathematical modeling in educational contexts."
    }
  ];

  const education = [
    {
      degree: "M.S. Applied Mathematics",
      school: "Stanford University",
      year: "2020",
      details: "Focus on computational mathematics and data visualization"
    },
    {
      degree: "B.S. Mathematics",
      school: "UC Berkeley",
      year: "2018",
      details: "Magna Cum Laude, Mathematics Honor Society"
    }
  ];

  const skills = [
    "Product Strategy & Roadmapping",
    "Data Analysis & Visualization",
    "Mathematical Modeling",
    "User Experience Design",
    "Agile Product Management",
    "Cross-functional Leadership",
    "Python & R Programming",
    "JavaScript/React Development",
    "Statistical Analysis",
    "Creative Problem Solving"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Jaclyn Field</h1>
              <p className="text-xl text-accent-600 font-medium">Product Leader & Mathematical Artist</p>
            </div>
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="mt-4 md:mt-0 bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
            >
              Download PDF
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Experienced product leader with a unique background in mathematics, bringing analytical thinking 
            and creative problem-solving to technology innovation. Passionate about making complex concepts 
            accessible and beautiful through thoughtful product design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-accent-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                    <p className="text-accent-600 font-medium">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-accent-600 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-1">{edu.year}</p>
                    <p className="text-gray-700 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-700">hello@jaclynfieldmath.ai</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;