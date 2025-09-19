import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Art', href: '/art' },
  { name: 'Resume', href: '/resume' }, // Updated to anchor to homepage section
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/jacburge', label: 'LinkedIn' },
  { icon: <FaEnvelope />, url: 'mailto:hello@jaclynfieldmath.ai', label: 'Email' },
  { icon: <FaGithub />, url: 'https://github.com/jacburge', label: 'GitHub' },
  { icon: <FaInstagram />, url: 'https://instagram.com/sumi_field', label: 'Instagram' },
];

const Navigation = () => (
  <nav className="bg-white shadow-md py-4">
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
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-accent-600 font-medium transition"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex gap-4">
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
      </div>
    </div>
  </nav>
);

export default Navigation;