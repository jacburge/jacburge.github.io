import { useState } from "react";

// Import images directly so they work with Vite, Create React App, or Next.js
import italy from '../assets/art/artforgall/italy.jpg';
import arirang from '../assets/art/artforgall/arirang.jpg';
import blackgoldsplatter from '../assets/art/artforgall/blackgoldsplatter.jpg';
import hands from '../assets/art/artforgall/hands.jpg';
import reverie from '../assets/art/artforgall/reverie.jpg';
import sketch from '../assets/art/artforgall/sketch.jpg';
import scoliosis from '../assets/art/artforgall/scoliosis.jpg';
import treble from '../assets/art/artforgall/treble.jpg';

import bamboo from '../assets/art/ink/bamboo.jpg';
import blossom_branch from '../assets/art/ink/blossom_branch.jpg';
import blossoms_close from '../assets/art/ink/blossoms-close.jpg';
import crane_sumi from '../assets/art/ink/crane_sumi.jpg';
import fan1 from '../assets/art/ink/fan1.jpg';
import lily from '../assets/art/ink/lily.jpg';

import lemon from '../assets/art/lemons/lemon.jpeg';
import lemoncello from '../assets/art/lemons/lemoncello.jpg';
import lemon_oil from '../assets/art/lemons/lemon_oil.jpg';
// Add any additional lemon images here, for example:
// import lemon_study from '../assets/art/lemons/lemon_study.jpg';

import splatter1 from '../assets/art/abstract/splatter1.jpg';
import tulips from '../assets/art/abstract/tulips.jpg';
import crane_abstract from '../assets/art/abstract/crane_abstract.jpg';
import grandpa from '../assets/art/abstract/grandpa.jpeg';
import joshua from '../assets/art/abstract/joshua.jpg';
import green_geom from '../assets/art/abstract/green_geom.jpg';
import seattle_gallery from '../assets/art/abstract/seattle_gallery.jpg';
import waterdrip from '../assets/art/abstract/waterdrip.jpg';
import yinyang from '../assets/art/abstract/yinyang.jpg';

import blossom_embroidery from '../assets/art/textiles/blossom_embroidery.jpg';
import hellokitty from '../assets/art/textiles/hellokitty.jpg';
import macrame from '../assets/art/textiles/macrame.jpg';
import okaytonotbeokay from '../assets/art/textiles/okaytonotbeokay.jpg';
import okaytonotbeokay2 from '../assets/art/textiles/okaytonotbeokay2.jpg';
import tropical from '../assets/art/textiles/tropical.jpg';

// Art gallery sections using only real images from assets/art
const artSections = [
  {
    title: "Traditional East Asian Painting: Ink",
    description:
      "In 2013, I spent a summer studying Traditional East Asian Painting at Ewha Women’s University in Seoul, retracing the steps of my grandmother and grand aunt. I fell in love with the Four Noble Plants—especially the plum blossom, a symbol of hope and endurance through hardship. These pieces reflect what I learned there, as well as years later in a Sumi Ink class in Seattle (Sumi is also my Korean name).",
    images: [
      { src: bamboo, title: "Bamboo", caption: "Minimalist brushwork study." },
      { src: blossom_branch, title: "Blossom Branch", caption: "Springtime inspiration." },
      { src: fan1, title: "Fan 1", caption: "Ink on fan, gesture study." },
      { src: blossoms_close, title: "Blossoms Close", caption: "Detail of floral ink work." },
      { src: crane_sumi, title: "Crane Sumi", caption: "Sumi-e style crane." },
      { src: lily, title: "Lily", caption: "Watercolor and ink blend." },
    ],
  },
  {
    title: "Abstract Painting: Acrylic, Drip, Mixed Media",
    description:
      "In early 2020 (up until lockdown), I was taking an abstract painting class and had the chance to showcase 8 paintings in the A/NT Gallery in Seattle right next to the Space Needle. Abstract painting continues to be a favorite discipline of mine, similar to how I enjoy distilling simplicity from complexity in my professional work. ",
    images: [
      { src: splatter1, title: "Splatter 1", caption: "Expressive paint splatter." },
      { src: tulips, title: "Tulips", caption: "Spring color palette." },
      { src: crane_abstract, title: "Crane Abstract", caption: "Abstracted bird form." },
      { src: grandpa, title: "Grandpa", caption: "Portrait study." },
      { src: joshua, title: "Joshua", caption: "Desert inspiration." },
      { src: green_geom, title: "Green Geometry", caption: "Geometric abstraction." },
      { src: seattle_gallery, title: "Seattle Gallery", caption: "Inspired by gallery visit." },
      { src: waterdrip, title: "Water Drip", caption: "Fluid motion." },
      { src: yinyang, title: "Yin Yang", caption: "Balance and duality." },
    ],
  },
  {
    title: "Lemons: Acrylic, Oil",
    description:
      "I am a farmer's daughter, and grew up working on the farm whether picking grapes, planting lemon trees, or pruning almond trees. I love painting lemons for their bright colors, zesty symbolism, and familial relevance.",
    images: [
      { src: lemon, title: "Lemon", caption: "A study in yellow." },
      { src: lemoncello, title: "Lemoncello", caption: "Inspired by Italian summer." },
      { src: lemon_oil, title: "Lemon Oil", caption: "Oil painting study of lemons." },
      // { src: lemon_study, title: "Lemon Study", caption: "Exploring form and light." },
      // Add more lemon images here as needed
    ],
  },
  {
    title: "Textile Art: Embroidery, Macrame",
    description:
      "I love the relaxing, almost meditative nature of embroidery and macrame. These pieces are tactile explorations of pattern and texture.",
    images: [
      { src: blossom_embroidery, title: "Blossom Embroidery", caption: "Thread painting." },
      { src: hellokitty, title: "Hello Kitty", caption: "Playful embroidery." },
      { src: macrame, title: "Macrame", caption: "Knotted wall hanging." },
      { src: okaytonotbeokay, title: "Okay to Not Be Okay", caption: "Mental health awareness." },
      { src: okaytonotbeokay2, title: "Okay to Not Be Okay 2", caption: "Companion piece." },
      { src: tropical, title: "Tropical", caption: "Bright colors and summer vibes." },
    ],
  },
  {
    title: "Art for Gall: Watercolor, Sketching, Acrylic, Pastel",
    description:
      "In 2017, I set a New Year’s resolution to make art once a week. Many of these pieces come from that project, which I called “Art For Gall.” Inspired by qigong, the gallbladder channel boosts confidence. I believe creativity isn’t just for the innately talented, it’s a skill anyone can cultivate with a little boldness and practice.",
    images: [
      { src: italy, title: "Italy", caption: "Inspired by travel and new perspectives." },
      { src: arirang, title: "Arirang", caption: "A piece reflecting Korean heritage and movement." },
      { src: blackgoldsplatter, title: "Black Gold Splatter", caption: "Exploring texture and contrast." },
      { src: hands, title: "Hands", caption: "Gesture study in ink." },
      { src: reverie, title: "Reverie", caption: "Dreamlike state, mixed media." },
      { src: sketch, title: "Sketch", caption: "Quick sketch from a creative burst." },
      { src: scoliosis, title: "Scoliosis", caption: "Art as healing and reflection." },
      { src: treble, title: "Treble", caption: "Music and motion." },
    ],
  },
];

const Art = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Art & Creative Pursuits</h1>
          <p text-gray-700 max-w-3xl mx-auto leading-relaxed><b><i>“Art reaches its greatest peak when devoid of self-consciousness.” - Bruce Lee</i></b></p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Creativity is both a practice and a form of self-discovery. I believe anyone can be creative with a little courage and a willingness to experiment. My own journey is proof that you don’t have to be a “born artist” to make something beautiful. Some people look at a piece of art and say, “I could have done that,” but an artist actually did. To me, the act of creating is what truly matters.
          </p>
        </div>
        {/* Gallery Sections */}
        {artSections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold text-accent-700 mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.description}</p>
            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="mb-6 break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  onClick={() => setModal(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ aspectRatio: "auto" }}
                  />
                  {/* Caption overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-white text-base font-medium px-4 text-center">{img.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Modal for expanded art view */}
        {modal && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            onClick={() => setModal(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-accent-700 text-2xl"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={modal.src}
                alt={modal.title}
                className="w-full mb-4 rounded-lg object-contain"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">{modal.title}</div>
              <div className="text-gray-600 mb-2">{modal.caption}</div>
              {modal.story && <div className="text-gray-500 text-sm">{modal.story}</div>}
            </div>
          </div>
        )}
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaborating?</h2>
            <p className="text-gray-600 mb-6">
              If my art or creative process resonates, whether for collaboration, a custom piece, or creative conversation, I’d love to connect!
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