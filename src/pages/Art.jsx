const Art = () => {
  const artPieces = [
    {
      id: 1,
      title: "Fibonacci Spirals in Motion",
      description: "Interactive visualization of mathematical patterns found in nature, exploring the golden ratio through animated spiral formations.",
      medium: "Digital Interactive",
      year: "2024",
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      title: "Fractal Landscapes",
      description: "Computer-generated landscapes using fractal algorithms, blending mathematical precision with organic beauty.",
      medium: "Generative Art",
      year: "2023",
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      title: "Data Symphony",
      description: "Visual representation of complex datasets transformed into abstract compositions that reveal hidden patterns.",
      medium: "Data Visualization",
      year: "2023",
      image: "/api/placeholder/400/400"
    },
    {
      id: 4,
      title: "Geometric Meditations",
      description: "Series exploring the contemplative aspects of mathematical geometry through minimalist digital compositions.",
      medium: "Digital Art",
      year: "2024",
      image: "/api/placeholder/400/400"
    },
    {
      id: 5,
      title: "Algorithmic Abstractions",
      description: "Abstract art generated through custom algorithms that translate mathematical equations into visual poetry.",
      medium: "Algorithmic Art",
      year: "2023",
      image: "/api/placeholder/400/400"
    },
    {
      id: 6,
      title: "Mathematical Mandalas",
      description: "Sacred geometry meets modern computation in these intricate mandala designs based on mathematical principles.",
      medium: "Digital Art",
      year: "2024",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Art & Visualizations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where mathematics meets art, exploring the beauty of patterns, algorithms, and data through creative expression.
          </p>
        </div>

        {/* Art Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece) => (
            <div key={piece.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Art Image */}
              <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 relative overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Fallback content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-accent-700">
                    <div className="w-16 h-16 mx-auto mb-2 bg-accent-300 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium text-sm">{piece.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Art Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{piece.title}</h3>
                  <span className="text-sm text-gray-500 font-medium">{piece.year}</span>
                </div>
                <p className="text-accent-600 text-sm font-medium mb-3">{piece.medium}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{piece.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaborating?</h2>
            <p className="text-gray-600 mb-6">
              I'm always exploring new ways to visualize data and create art through mathematical concepts.
            </p>
            <button className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;