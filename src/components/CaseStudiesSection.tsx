import React, { useState } from 'react';
import { X } from 'lucide-react';
import firstfront from './images/firstfront.jpg';
import firstin from './images/firstin.jpg';
import secondfront from './images/secondfront.jpg';
import secondin from './images/secondin.jpg';
import thirdfront from './images/thridfront.jpg';
import thirdin from './images/thirdin.jpg';

const CaseStudiesSection: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<any>(null);

  const caseStudies = [
    {
      image: firstfront,
      brand: "Skincare Brand Revival",
      subtitle: "Helping a skincare brand stand out & grow sustainably.",
      preview: "A smart loyalty program & influencers made the difference.",
      detailsImage: firstin,
      title: "$200K → $500K in 60 days",
      stats: [
        { label: "Ad Spend", value: "$20,000" },
        { label: "Revenue", value: "$500,000" },
        { label: "New Customer Revenue", value: "$350,000" },
        { label: "Total Sales", value: "$500,000" },
        { label: "Orders", value: "1,800" },
        { label: "New Customers", value: "85%" },
      ],
      challenge: "Struggling with repeat customers & low retention rate.",
      solution: "Implemented loyalty program, optimized email flows, and launched influencer collaborations.",
      quote: "“Consistency and community — that’s how we scaled sustainably.”"
    },
    {
      image: secondfront,
      brand: "Health & Wellness Brand Boost",
      subtitle: "Scaling a wellness brand through smart ads & content.",
      preview: "UGC, retargeting and creators built trust fast.",
      detailsImage: secondin,
      title: "$5K → $150K in 90 days",
      stats: [
        { label: "Ad Spend", value: "$5,000" },
        { label: "Revenue", value: "$150,000" },
        { label: "New Customer Revenue", value: "$120,000" },
        { label: "Total Sales", value: "$150,000" },
        { label: "Orders", value: "600" },
        { label: "New Customers", value: "90%" },
      ],
      challenge: "Low brand awareness in a competitive niche.",
      solution: "Created compelling video ads, UGC campaigns, and leveraged micro-influencers.",
      quote: "“Community trust and good storytelling turned this brand around.”"
    },
    {
      image: thirdfront,
      brand: "Tech Accessories Brand Scale",
      subtitle: "Taking a tech store from zero to scale.",
      preview: "Bundles & upsells turned browsers into buyers.",
      detailsImage: thirdin,
      title: "$0 → $220K in 4 months",
      stats: [
        { label: "Ad Spend", value: "$8,000" },
        { label: "Revenue", value: "$220,000" },
        { label: "New Customer Revenue", value: "$200,000" },
        { label: "Total Sales", value: "$220,000" },
        { label: "Orders", value: "1,000+" },
        { label: "New Customers", value: "95%" },
      ],
      challenge: "Breaking into a saturated tech market with low AOV.",
      solution: "Bundled products, improved upsells, and ran seasonal offers.",
      quote: "“Smart offers and upsells made all the difference here.”"
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Case Studies
        </h2>
        <p className="text-lg text-gray-600">
          Real results for real brands. See how we've helped businesses like yours achieve exceptional growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              onClick={() => setSelectedStudy(study)}
              className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow overflow-hidden"
            >
              <img
                src={study.image}
                alt={study.brand}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{study.brand}</h3>
                <p className="text-sm text-gray-600 mb-2">{study.subtitle}</p>
                <span className="text-xs font-semibold text-purple-600">
                  View full case study →
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedStudy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-fade-in">
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedStudy.detailsImage}
                alt={selectedStudy.brand}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedStudy.title}</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedStudy.stats.map((stat: any, idx: number) => (
                  <div key={idx}>
                    <span className="text-xs uppercase font-bold text-gray-600">{stat.label}:</span>{" "}
                    <span className="text-sm text-gray-800 font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-purple-600 uppercase mb-1">The Challenge</h4>
                <p className="text-gray-700 text-sm">{selectedStudy.challenge}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-purple-600 uppercase mb-1">Our Solution</h4>
                <p className="text-gray-700 text-sm">{selectedStudy.solution}</p>
              </div>

              <p className="text-xs italic text-gray-500">{selectedStudy.quote}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;