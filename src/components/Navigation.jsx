import { useState } from 'react';
import {
  FaLinkedin, FaEnvelope, FaGithub, FaInstagram,
  FaBars, FaTimes, FaHome, FaFolderOpen, FaPalette, FaFileAlt, FaPaperPlane
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Projects', href: '/projects', icon: <FaFolderOpen /> },
  { name: 'Art', href: '/art', icon: <FaPalette /> },
  { name: 'Resume', href: '/resume', icon: <FaFileAlt /> },
  { name: 'Contact', href: '/contact', icon: <FaPaperPlane /> },
];

const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/jacburge', label: 'LinkedIn' },
  { icon: <FaEnvelope />, url: 'mailto:hello@jaclynfieldmath.ai', label: 'Email' },
  { icon: <FaGithub />, url: 'https://github.com/jacburge', label: 'GitHub' },
  { icon: <FaInstagram />, url: 'https://instagram.com/sumi_field', label: 'Instagram' },
];

const tagline = "Creative Data, Art & Strategy";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="block">
            <img
              src={logo}
              alt="Jaclyn Field Mathai Logo"
              className="h-16 w-16 object-contain"
            />
          </a>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-gray-700 hover:text-accent-600 font-medium transition"
            >
              {/* <span className="text-xl">{link.icon}</span> */}
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Social Icons + Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {socialLinks.map((social, i) => (
            <div key={i} className="relative group flex items-center">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:bg-accent-100 rounded-full p-2 transition"
                aria-label={social.label}
              >
                {social.icon}
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-90 pointer-events-none transition duration-200 whitespace-nowrap z-10">
                {social.label}
              </span>
            </div>
          ))}
          {/* Menu Button appears to the right of the last social icon */}
          <button
            className={`bg-white rounded-full shadow-lg p-2 border border-accent-200 text-accent-700 flex items-center transition-all duration-300 ${mobileOpen ? "bg-accent-600 text-white" : ""}`}
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className={`transition-transform duration-300 ${mobileOpen ? "rotate-90 scale-125" : ""}`}>
              <FaBars className="text-2xl" />
            </span>
          </button>
        </div>
      </div>
      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${mobileOpen ? "bg-black bg-opacity-40" : "pointer-events-none bg-transparent"}`}
        style={{ transitionProperty: "background" }}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      >
        <aside
          className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{ transitionProperty: "transform" }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header: Logo & Tagline */}
          <div className="flex flex-col items-center justify-center py-8 px-6 border-b border-accent-100">
            <img src={logo} alt="Jaclyn Field Mathai Logo" className="h-14 w-14 mb-2 object-contain" />
            <span className="text-accent-600 font-semibold text-lg text-center">{tagline}</span>
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-accent-700 text-2xl transition"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </div>
          {/* Nav Links */}
          <ul className="flex flex-col gap-2 mt-8 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full font-semibold text-base shadow-sm border border-accent-100 transition-all duration-200
                    ${window.location.pathname === link.href
                      ? "bg-accent-600 text-white"
                      : "bg-white text-accent-700 hover:bg-accent-100 hover:text-accent-600"}
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={`text-xl transition-colors duration-200 ${window.location.pathname === link.href ? "text-white" : "text-accent-600 group-hover:text-accent-700"}`}>
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Divider & Social Icons */}
          <div className="mt-auto px-6 pb-8">
            <hr className="my-6 border-accent-100" />
            <div className="flex gap-5 justify-center">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 bg-accent-100 rounded-full p-3 transition"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navigation;