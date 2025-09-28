import { FaRegHeart } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => (
  <footer
    className="w-full rounded-t-2xl shadow-t-lg"
    style={{
      background: 'linear-gradient(90deg, #e6f4f6 0%, #f8fafc 100%)',
      boxShadow: '0 -6px 24px -8px rgba(76, 110, 129, 0.12)',
    }}
  >
    <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center justify-center gap-2">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-gray-400 text-sm justify-center text-center">
        <FaRegCopyright className="inline-block" />
        <span>{new Date().getFullYear()} Made with</span>
        <FaRegHeart className="text-gray-400 mx-1" />
        <span>
          by Jaclyn Field Mathai.
          <span className="hidden xs:inline"> All Rights Reserved.</span>
        </span>
      </div>
      <div className="text-xs text-gray-300 text-center xs:hidden">All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer;