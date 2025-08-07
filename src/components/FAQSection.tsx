import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial improvements within the first 3-7 days, with significant results typically visible within 30 days. However, sustainable growth and optimization continue to improve over time."
    },
    {
      question: "Do you work with small skincare brands?",
      answer: "Yes! We work with skincare brands of all sizes, from startups to established companies. Our strategies are scalable and adapted to your current business stage and budget."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "Our exclusive focus on the skincare industry means we understand your unique challenges, regulations, and opportunities. We use data-driven strategies tailored specifically for beauty and skincare brands."
    },
    {
      question: "What's included in the free audit?",
      answer: "Your free audit includes a comprehensive analysis of your current marketing performance, competitor analysis, growth opportunities identification, and a custom strategy roadmap for your brand."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we don't believe in locking our clients into long-term contracts. We prefer to earn your business month by month through consistent results and exceptional service."
    },
    {
      question: "How do you measure success?",
      answer: "We track key metrics including ROAS, CAC, LTV, conversion rates, and overall revenue growth. You'll receive transparent reporting and regular performance reviews."
    }
  ];

  return (
    <section id="faq" className="pt-8 pb-20 gradient-bg scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with Pure Vista
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-all duration-200"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <Link
            to="/booking"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 inline-flex items-center gap-2"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
