import React, { useState } from 'react';
import { ArrowLeft, Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const BOOKING_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbyTPaVkxWbT8-xQSkM51itPy0G_DQSGR1hqJYctrJODVPKcQEbqWTn8g9z_IXahltXaqw/exec';

const BookingPage: React.FC = () => {
  const auditIncludes = [
    'Complete analysis of your current marketing performance',
    'Competitor analysis and market positioning review',
    'Growth opportunities identification',
    'Custom strategy roadmap for your brand',
    'Revenue optimization recommendations',
    'Implementation timeline and next steps',
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brand: '',
    revenue: '',
    challenge: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(BOOKING_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          Timestamp: new Date().toISOString(),
          FullName: formData.fullName,
          Email: formData.email,
          Brand: formData.brand,
          MonthlyRevenue: formData.revenue,
          Challenge: formData.challenge,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('❌ Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Free Skincare Marketing Audit
          </h1>
          <p className="text-xl text-gray-600">
            Get a comprehensive analysis of your current marketing performance and discover untapped growth opportunities for your skincare brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Your Free Audit</h2>
              <div className="space-y-4">
                {auditIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Call Details</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">45-minute consultation</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">One-on-one with our experts</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Flexible scheduling available</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 mb-4">
                "The free audit revealed opportunities we never knew existed. Within 30 days, we increased our ROAS by 300% following their recommendations."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Jessica Park</div>
                  <div className="text-sm text-gray-600">CEO, GlowSkin Beauty</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Audit</h2>

              <div className="mb-6">
                <iframe
                  src="https://calendly.com/diyoragency/30min"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Calendly Scheduling"
                  className="rounded-lg border"
                ></iframe>
              </div>

              {!submitted ? (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Or fill out this form and we'll contact you</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                      <input
                        name="brand"
                        type="text"
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your skincare brand name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Revenue</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select revenue range</option>
                        <option>$0 - $10K</option>
                        <option>$10K - $50K</option>
                        <option>$50K - $100K</option>
                        <option>$100K - $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Biggest Challenge</label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        rows={3}
                        placeholder="Tell us about your biggest marketing challenge"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 font-semibold"
                    >
                      Request Free Audit
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center pt-6 border-t">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Submission Received!</h3>
                  <p className="text-gray-700">We’ll be in touch soon. Thanks for sharing!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;