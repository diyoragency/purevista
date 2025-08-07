import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="gradient-bg pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* ✅ Trust line with balanced top space */}
          <div className="flex justify-center mb-6 mt-16">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                Trusted by 25+ eCommerce brands
              </span>
            </div>
          </div>

          {/* ✅ Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Scale Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Skincare Brand
            </span>
            <br />
            Without Limits
          </h1>

          {/* ✅ Subtext */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Grow your skincare brand without the guesswork — we handle the data,
            ads, and proven strategies so you get real results.
          </p>

          {/* ✅ CTA Buttons: slightly more rounded, improved hover */}
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-indigo-600 text-white w-44 h-14 flex justify-center items-center rounded-lg hover:bg-indigo-700 transition"
            >
              Get Free Audit <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/case-studies"
              className="text-indigo-600 border border-indigo-600 w-44 h-14 flex justify-center items-center rounded-lg transition hover:bg-gray-200 hover:text-indigo-700 hover:border-indigo-700"
            >
              View Case Studies
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
