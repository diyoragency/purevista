import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ads from './images/ads.jpg';
import unit from './images/unit.jpg';
import marketing from './images/marketing.jpg';

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: ads,
      title: "Paid Advertising",
      description:
        "Full-funnel campaigns that grow your brand’s reach, attract qualified buyers, and drive sales with clear targeting and proven ad strategy.",
      features: [
        "Brand Story & Messaging",
        "Positioning & Differentiation",
        "Customer Journey Planning",
        "Competitor Research & Analysis",
      ],
    },
    {
      image: unit,
      title: "Unit Economics",
      description:
        "Full-funnel campaigns that grow your brand’s reach, attract qualified buyers, and drive sales with clear targeting and proven ad strategy.",
      features: [
        "Brand Story & Messaging",
        "Positioning & Differentiation",
        "Customer Journey Planning",
        "Competitor Research & Analysis",
      ],
    },
    {
      image: marketing,
      title: "Marketing Strategy",
      description:
        "Full-funnel campaigns that grow your brand’s reach, attract qualified buyers, and drive sales with clear targeting and proven ad strategy.",
      features: [
        "Brand Story & Messaging",
        "Positioning & Differentiation",
        "Customer Journey Planning",
        "Competitor Research & Analysis",
      ],
    },
  ];

  return (
    <section id="services" className="pt-16 pb-12 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed specifically for skincare brands ready to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition h-full"
            >
              <div className="h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition mt-auto"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/booking"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition inline-flex items-center gap-2"
          >
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
