import React, { useState } from "react";
import { FaBrush, FaLeaf, FaPalette, FaYarn, FaSun } from "react-icons/fa";

// Import images directly so they work with Vite, Create React App, or Next.js
import italy from '../assets/art/artforgall/italy.jpg';
import arirang from '../assets/art/artforgall/arirang.jpg';
import blackgoldsplatter from '../assets/art/artforgall/blackgoldsplatter.jpg';
import hands from '../assets/art/artforgall/hands.jpg';
import reverie from '../assets/art/abstract/reverie.jpg';
import sketch from '../assets/art/artforgall/sketch.jpg';
import scoliosis from '../assets/art/artforgall/scoliosis.jpg';
import treble from '../assets/art/abstract/treble.JPG';
import clairdelune from '../assets/art/abstract/clairdelune.jpeg';

import bamboo from '../assets/art/ink/bamboo.jpg';
import blossom_branch from '../assets/art/ink/blossom_branch.jpg';
import blossoms_close from '../assets/art/ink/blossoms-close.jpg';
import crane_sumi from '../assets/art/ink/crane_sumi.jpg';
import fan1 from '../assets/art/ink/fan1.jpg';
import fan2 from '../assets/art/ink/fan2.jpg';
import lily from '../assets/art/ink/lily.jpg';
import blossoms from '../assets/art/ink/blossoms-small_Original.jpg';
import love_sumi_card from '../assets/art/ink/love_sumi_card.jpg';
import orchid from '../assets/art/ink/orchid.jpg';


import lemon from '../assets/art/abstract/lemon.jpeg';
import lemoncello from '../assets/art/today/lemoncello.jpg';
import lemon_oil from '../assets/art/today/lemon_oil.jpg';
// Add any additional lemon images here, for example:
// import lemon_study from '../assets/art/lemons/lemon_study.jpg';

import splatter1 from '../assets/art/abstract/splatter1.jpg';
import tulips from '../assets/art/abstract/tulips.jpg';
import crane_abstract from '../assets/art/abstract/crane_abstract.jpg';
import grandpa from '../assets/art/abstract/grandpa.jpeg';
import joshua from '../assets/art/today/joshua.jpg';
import green_geom from '../assets/art/today/green_geom.jpg';
import seattle_gallery from '../assets/art/abstract/seattle_gallery.jpg';
import waterdrip from '../assets/art/abstract/waterdrip.jpg';

import blossom_embroidery from '../assets/art/textiles/blossom_embroidery.jpg';
import hellokitty from '../assets/art/textiles/hellokitty.jpg';
import macrame from '../assets/art/textiles/macrame.jpg';
import okaytonotbeokay from '../assets/art/textiles/okaytonotbeokay.jpg';
import okaytonotbeokay2 from '../assets/art/textiles/okaytonotbeokay2.jpg';
import tropical from '../assets/art/textiles/tropical.jpg';
import ficus from '../assets/art/textiles/ficus.jpg';
import plants from '../assets/art/textiles/plants.jpg';
import yin_yang_macrame from '../assets/art/textiles/yin_yang_macrame.jpg';
import yosemite from '../assets/art/textiles/yosemite.jpg';

import sierravista from '../assets/art/abstract/sierravista.jpg';
import boniver from '../assets/art/artforgall/boniver.jpg';
import calpoly from '../assets/art/artforgall/calpoly.jpg';
import fish from '../assets/art/artforgall/fish.jpg';

import flaxenhair from '../assets/art/artforgall/flaxenhair.jpg';
import jelly from '../assets/art/artforgall/jelly.jpg';
import live_artfully from '../assets/art/artforgall/live_artfully.jpg';
import mountains from '../assets/art/artforgall/mountains.jpg';
import ocean from '../assets/art/artforgall/ocean.jpg';
import origami from '../assets/art/artforgall/origami.jpg';
import tattoo from '../assets/art/artforgall/tattoo.jpg';
import tea_time from '../assets/art/artforgall/tea_time.jpg';
import wedding_card from '../assets/art/artforgall/wedding_card.jpg';
import whale from '../assets/art/artforgall/whale.jpg';

import jaclyntejas from '../assets/art/today/jaclyntejas.jpg';
import elise from '../assets/art/today/elise.jpeg';
import pink from '../assets/art/today/pink.jpg';
import yinyang from '../assets/art/today/yinyang.jpg';

// Art gallery sections using only real images from assets/art
const artSections = [
  {
    title: "Traditional East Asian Painting: Ink",
    description:
      "In 2013, I spent a summer studying Traditional East Asian Painting at Ewha Women’s University in Seoul, retracing the steps of my grandmother and grand aunt. I fell in love with the Four Noble Plants—especially the plum blossom, a symbol of hope and endurance through hardship. These pieces reflect what I learned there, as well as years later in a Sumi Ink class in Seattle (Sumi is also my Korean name).",
    images: [
      { src: bamboo, title: "Bamboo", caption: "Bamboo represents integrity and righteousness (Ewha)" },
      { src: blossoms_close, title: "Blossoms Close", caption: "Detail of plum blossom ink work (Ewha)" },
      { src: blossom_branch, title: "Blossom Branch", caption: "Plum blossom on rice paper in color" },
      { src: fan1, title: "Fan", caption: "First Plum blossom on fan, representing resiliency in the face of adversity (Ewha)" },
      { src: orchid, title: "Orchid", caption: "Traditional wild orchid, representing humility, nobility, and grace (Ewha)" },
      { src: fan2, title: "Fan", caption: "Another rendition of plum blossom on fan" },
      { src: crane_sumi, title: "Crane Sumi", caption: "Sumi-e style crane" },
      { src: lily, title: "Lily", caption: "Lilies in light blue" },
      { src: blossoms, title: "Blossoms", caption: "Plum blossoms on rice paper" },
      { src: love_sumi_card, title: "Love, Sumi", caption: "Card to my grandmother with plum blossoms" },
      
    ],
  },
  {
    title: "Art for Gall: Watercolor, Sketching, Acrylic, Pastel, Oil",
    description:
      "In 2017, I set a New Year’s resolution to make art once a week, even if it was a simple sketch. The goal was consistency, not perfection. Many of these pieces come from that project, which I called “Art For Gall.” Inspired by qigong and Chinese medicine, the gallbladder channel boosts confidence. I believe creativity isn’t just for the innately talented, it’s a skill anyone can cultivate with a little boldness and practice.",
    images: [
      { src: italy, title: "Travastere", caption: "Watercolor inspired by a photo I took in Rome" },
      { src: arirang, title: "Arirang", caption: "Korean heritage and movement in pastel" },
      { src: hands, title: "Universe", caption: "Inspired by Sleeping at Last's Atlas 5 (exploration of the Enneagram)" },
      { src: sketch, title: "California Coast", caption: "Quick sketch of a scenic view" },
      { src: scoliosis, title: "Scoliosis", caption: "Inspired by my own journey with scoliosis and dance" },
      { src: calpoly, title: "Cal Poly SLO", caption: "Card for my sister's graduation, in pen and watercolor" },

      { src: live_artfully, title: "Live Artfully", caption: "Watercolor and pen, the first Art for Gall piece" },
      { src: fish, title: "Yin Yang Fish", caption: "Yin Yang fish in acrylic" },
      { src: boniver, title: "Bon Iver", caption: "Inspired by Bon Iver's 22, A Million album art" },
      { src: flaxenhair, title: "Flaxen Hair", caption: "Inspired by Debussy's Girl with the Flaxen Hair" },
      { src: jelly, title: "Jellyfish", caption: "Ethereal jellyfish in watercolor" },
      { src: wedding_card, title: "Wedding Card", caption: "Card for a friend's wedding in her homestate of Hawaii" },

      { src: ocean, title: "Ocean", caption: "Watercolor seascape in oil" },
      { src: mountains, title: "Mountains", caption: "Sunrise over the mountain tops, in acrylic" },
      { src: tattoo, title: "Yin Yang Landscape", caption: "Bold blackwork design" },
      { src: tea_time, title: "Tea Time", caption: "Afternoon tea in abstract acrylic" },
      { src: origami, title: "Origami Crane", caption: "Symbol of peace and hope, in watercolor" }, 
      { src: whale, title: "Whale", caption: "Dreamy beluga whale card for a friend" },
      
    ],
  },
  {
    title: "Abstract Painting: Acrylic, Drip, Mixed Media",
    description:
      "In early 2020 (up until lockdown), I was taking an abstract painting class and had the chance to showcase 8 paintings in the A/NT Gallery in Seattle right next to the Space Needle. Abstract painting continues to be a favorite discipline of mine, similar to how I enjoy distilling simplicity from complexity in my professional work. ",
    images: [
      { src: splatter1, title: "Splatter 1", caption: "Vibrant splatter and drip" },
      { src: tulips, title: "Tulips", caption: "Spring tulips with palette knife" },
      { src: crane_abstract, title: "Crane Abstract", caption: "Crane in abstract stained glass" },
      { src: grandpa, title: "Love, Sumi", caption: "Mixed media composition with pen pal letters from my late grandfather and pieces of 'hwatu' - the Korean card game we used to play together." },
      { src: seattle_gallery, title: "Seattle Gallery", caption: "A/NT Gallery in Seattle featuring my work" },
      { src: waterdrip, title: "Water Drip", caption: "Be like water" },
      { src: lemon, title: "Zest", caption: "Lemons in pastel. As a farmer's daughter, I grew up working on the farm whether picking grapes, planting lemon trees, or pruning almond trees. I love painting lemons for their bright colors, zesty symbolism, and familial relevance." },
      { src: treble, title: "Music Heals", caption: "Woven in the lines are symbols of scoliosis and spinal fusion" },
      { src: reverie, title: "Reverie", caption: "Movement, texture, and bold colors" },
      { src: clairdelune, title: "Clair de Lune", caption: "Inspired by Debussy's Claire de Lune" },
      { src: sierravista, title: "Sierra Vista", caption: "Acrylic landscape of California wildflowers and foothills" },
      { src: blackgoldsplatter, title: "Black & Gold", caption: "Exploring texture and contrast in drip" },
    ],
  },
  {
    title: "Textile Art: Embroidery, Macrame",
    description:
      "During the pandemic, I found comfort in the relaxing, almost meditative nature of embroidery and macrame. These pieces are tactile explorations of pattern and texture.",
    images: [
      { src: blossom_embroidery, title: "Hope of Spring", caption: "Bringing plum blossoms to another medium" },
      { src: hellokitty, title: "Hello Kitty With a Knife", caption: "Playful embroidery." },
      { src: macrame, title: "Macrame", caption: "Knotted wall hanging." },
      { src: okaytonotbeokay, title: "It's Okay to Not Be Okay", caption: "'I like magnolia's, the whole flower falls at once without hesitation' - It's Okay to Not Be Okay (K-Drama)" },
      { src: okaytonotbeokay2, title: "It's Okay to Not Be Okay", caption: "Inspired by the K-Drama" },
      { src: tropical, title: "Tropical Threads", caption: "Inspired by Hawaiian vegetation" },
      { src: ficus, title: "Ficus", caption: "Colorful ficus elastica" },
      { src: plants, title: "Plants", caption: "Embroidery of various houseplants" },
      { src: yin_yang_macrame, title: "Yin Yang", caption: "Symbol of balance in macrame" },
      { src: yosemite, title: "Yosemite", caption: "Yosemite landscape in embroidery" },
    ],
  },
  {
    title: "Today: Acrylic, Oil",
    description:
      "Most recently, I took an oil painting class to expand my skill set. I've also enjoyed exploring more minimalist geometry and color blocking for home decor.",
    images: [
      
      { src: lemoncello, title: "Lemoncello on ice", caption: "Inspired by Italian summer, photographed on snow" },
      { src: lemon_oil, title: "Yellow", caption: "Study of lemons, from my first oil painting class" },
      { src: joshua, title: "Joshua", caption: "Joshua Tree National Park, for a friend's newborn's nursery" },
      { src: jaclyntejas, title: "Jaclyn & Tejas", caption: "Welcome sign for our wedding in a garden by the water" },
      { src: green_geom, title: "Green Geometry", caption: "Geometric abstraction, green nature vibes" },
      { src: pink, title: "Pink", caption: "Exploring shades of pink in acrylic" },
      { src: yinyang, title: "Yin Yang", caption: "Balance and harmony in acrylic" },

      // { src: lemon_study, title: "Lemon Study", caption: "Exploring form and light." },
      // Add more images here as needed
    ],
  },
];

const artSectionAnchors = [
  { id: "ink", label: "Korean Ink", icon: <FaLeaf /> },
  { id: "gall", label: "Art for Gall", icon: <FaBrush /> },
  { id: "abstract", label: "Abstract", icon: <FaPalette /> },
  { id: "textile", label: "Textile", icon: <FaYarn /> },
  { id: "today", label: "Today", icon: <FaSun /> },
];

// Helper to map section index to anchor id
const anchorIds = ["ink", "gall", "abstract", "textile", "today"];

function ArtNavBar({ activeSection, setActiveSection }) {
  return (
      <ul className="flex flex-row flex-nowrap w-full px-2 justify-center items-center gap-4 sm:gap-8 md:gap-10">
        {artSectionAnchors.map((s) => (
          <li key={s.id} className="flex-shrink-0 flex justify-center">
            <button
              type="button"
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow border-2 border-accent-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400
                ${activeSection === s.id
                  ? "bg-accent-600 text-white ring-2 ring-accent-400"
                  : "bg-white text-accent-700 hover:bg-accent-100"}
              `}
              aria-current={activeSection === s.id ? "section" : undefined}
              aria-label={s.label}
              tabIndex={0}
            >
              <span className="text-2xl" aria-label={s.label}>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
  );
}

const Art = () => {
  const [modal, setModal] = useState(null);
  const [activeSection, setActiveSection] = useState(artSectionAnchors[0].id);

  // Find the section to show
  const sectionIdx = anchorIds.indexOf(activeSection);
  const section = artSections[sectionIdx];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-700 mb-4">Art & Creative Pursuits</h1>
          <p><b><i>“Art reaches its greatest peak when devoid of self-consciousness.”</i>- Bruce Lee</b> </p>
          <p className="text-xl text-gray-700 max-w-6xl mx-auto leading-relaxed">
            Creativity is both a practice and a form of self-discovery. I believe anyone can be creative with a little courage and a willingness to experiment. My own journey is proof that you don’t have to be a “born artist” to make something beautiful. Some people look at a piece of art and say, “I could have done that,” but an artist actually did. To me, the act of creating is what truly matters.
          </p>
        </div>
        {/* Navigation Bar */}
        <ArtNavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        {/* Only show the selected section */}
        <section className="mb-16 pt-16">
          <div id={`${anchorIds[sectionIdx]}-header`} />
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
        </section>
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