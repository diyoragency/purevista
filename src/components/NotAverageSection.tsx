import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotAverageSection: React.FC = () => {
  const comparisons = [
    {
      feature: "Skincare Industry Expertise",
      us: true,
      others: false
    },
    {
      feature: "Data-Driven Strategies",
      us: true,
      others: false
    },
    {
      feature: "Transparent Reporting",
      us: true,
      others: false
    },
    {
      feature: "Dedicated Account Manager",
      us: true,
      others: false
    },
    {
      feature: "24/7 Support",
      us: true,
      others: false
    },
    {
      feature: "Performance Guarantees",
      us: true,
      others: false
    },
    {
      feature: "Cookie-Cutter Approaches",
      us: false,
      others: true
    },
    {
      feature: "Hidden Fees",
      us: false,
      others: true
    },
    {
      feature: "Long-Term Contracts",
      us: false,
      others: true
    },
    {
      feature: "Generic Strategies",
      us: false,
      others: true
    }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Your Average Agency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how we compare to traditional marketing agencies
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-indigo-600">Pure Vista</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-gray-500">Other Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="hover:bg-gray-50 smooth-transition">
                    <td className="px-6 py-4 text-gray-900 font-medium">{comparison.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {comparison.us ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {comparison.others ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/booking"
            className="bg-indigo-600 text-white px-8 py-4 hover:bg-indigo-700 smooth-transition rounded-lg inline-flex items-center gap-2 hover-scale"
          >
            Experience the Difference
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotAverageSection;