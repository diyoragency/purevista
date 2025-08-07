import React, { useState } from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('3-days');

  const processes = {
    '3-days': {
      title: 'First 3 Days',
      description: 'Quick wins and immediate setup',
      icon: <Clock className="w-5 h-5" />,
      steps: [
        { title: 'Initial Audit', description: 'Complete analysis of your current marketing performance' },
        { title: 'Strategy Session', description: 'Deep dive into your business goals and target audience' },
        { title: 'Quick Wins', description: 'Implement immediate optimizations for instant results' }
      ]
    },
    '7-days': {
      title: 'First 7 Days',
      description: 'Foundation building and optimization',
      icon: <Target className="w-5 h-5" />,
      steps: [
        { title: 'Campaign Setup', description: 'Launch optimized ad campaigns across all platforms' },
        { title: 'Creative Development', description: 'Create high-converting ad creatives and copy' },
        { title: 'Tracking Implementation', description: 'Set up comprehensive analytics and tracking systems' },
        { title: 'Initial Optimizations', description: 'First round of data-driven optimizations' }
      ]
    },
    '30-days': {
      title: 'First 30 Days',
      description: 'Full optimization and scaling',
      icon: <CheckCircle className="w-5 h-5" />,
      steps: [
        { title: 'Performance Analysis', description: 'Deep dive into campaign performance and user behavior' },
        { title: 'Scale Optimization', description: 'Increase budget on winning campaigns and audiences' },
        { title: 'Advanced Strategies', description: 'Implement retargeting, lookalike audiences, and funnels' },
        { title: 'Monthly Review', description: 'Comprehensive performance review and strategy adjustment' },
        { title: 'Growth Planning', description: 'Plan for sustainable long-term growth and expansion' }
      ]
    }
  };

  const active = processes[activeTab as keyof typeof processes];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From onboarding to scaling here's how we transform your skincare brand.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(processes).map(([key, process]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 border transition-all duration-300
                ${
                  activeTab === key
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-100'
                }
              `}
            >
              {process.icon}
              {process.title}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-300">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              {active.title}
            </h3>
            <p className="text-base text-gray-600">{active.description}</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {active.steps.map((step, index) => (
              <div
                key={index}
                className="bg-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
