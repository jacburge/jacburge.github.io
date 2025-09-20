import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => (
  <footer className="w-full mt-16 rounded-t-2xl shadow-t-lg"
    style={{
      background: 'linear-gradient(90deg, #e6f4f6 0%, #f8fafc 100%)',
      boxShadow: '0 -6px 24px -8px rgba(76, 110, 129, 0.12)',
    }}
  >
    <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center justify-center gap-2">
      {/* Centered: Made with ❤️ and copyright */}
      <div className="flex items-center gap-1 text-gray-400 text-sm justify-center">
        <FaRegCopyright className="inline-block" />
        {new Date().getFullYear()} Made with <FaRegHeart className="text-gray-400 mx-1" /> by Jaclyn Field Mathai. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;