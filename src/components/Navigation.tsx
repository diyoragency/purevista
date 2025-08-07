import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          
          {/* ✅ Bigger & clearer Logo */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img
                src={logo}
                alt="Brand Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* ✅ Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            <button
              onClick={() => handleNavClick('home')}
              className="text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className="text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Team
            </button>
            <Link
              to="/booking"
              className="ml-4 bg-indigo-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* ✅ Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg shadow-md bg-white py-4 px-4 space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className="block w-full text-left text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="block w-full text-left text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="block w-full text-left text-gray-800 hover:text-indigo-600 text-base font-medium transition-colors"
            >
              Team
            </button>
            <Link
              to="/booking"
              className="block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
