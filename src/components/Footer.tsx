import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Pure Vista</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Scaling skincare brands through data-driven marketing strategies 
              and industry expertise. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>diyoragency@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+905344156075</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Turkey</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white smooth-transition">Paid Advertising</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white smooth-transition">Unit Economics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white smooth-transition">Marketing Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white smooth-transition">Brand Positioning</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pure Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;