import logo from '../assets/logo.png';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => (
  <footer className="w-full mt-16 rounded-t-2xl shadow-t-lg"
    style={{
      background: 'linear-gradient(90deg, #e6f4f6 0%, #f8fafc 100%)',
      boxShadow: '0 -6px 24px -8px rgba(76, 110, 129, 0.12)',
    }}
  >
    <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left: Made with ❤️ */}
      <div className="flex items-center gap-1 text-gray-400 text-sm order-3 w-full sm:w-auto justify-center sm:justify-end">
        Made with <FaRegHeart className="text-red-500 mx-1" /> by Jaclyn Field Mathai
      </div>
      {/* Center: Logo */}
      <div className="flex justify-center order-1 sm:order-2 w-full sm:w-auto">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>
      {/* Right: Copyright */}
      <div className="flex items-center gap-1 text-gray-400 text-sm order-3 w-full sm:w-auto justify-center sm:justify-end">
        <FaRegCopyright className="inline-block" />
        <span>2025</span>
      </div>
    </div>
  </footer>
);

export default Footer;