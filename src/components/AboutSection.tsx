import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-16 pb-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
              Meet Pure Vista
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We’re not your average marketing crew. We live and breathe skincare and we know what it takes to stand out in an industry that never stops evolving.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From indie brands to fresh startups, we craft marketing that actually connects. Our secret? Deep industry know-how, a touch of creative magic, and strategies that make people stop scrolling.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 3 years focused solely on skincare, we’ve helped 15+ brands grow with confidence and we’re just getting started.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">15+</div>
                <div className="text-sm text-gray-600">Brands Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">98%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Pure Vista Team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Client Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
