import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-white/5 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-neon" />
              <span className="text-xl font-bold text-white">
                GET SET <span className="text-neon">WEB</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Elevating businesses with premium digital solutions. From stunning websites to impactful branding, we get you set for the web.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/get_setweb" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-neon hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://instagram.com/getset_web" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-neon hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:parisoni@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-neon hover:text-black transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/website" className="text-gray-400 hover:text-neon transition-colors">Website Development</Link></li>
              <li><Link to="/services/ads" className="text-gray-400 hover:text-neon transition-colors">Ad Creation</Link></li>
              <li><Link to="/services/logo" className="text-gray-400 hover:text-neon transition-colors">Logo Design</Link></li>
              <li><Link to="/services/custom" className="text-gray-400 hover:text-neon transition-colors">Custom Branding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-neon transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neon transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neon transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Get Set Web. All rights reserved.</p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">Designed for Business Growth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
