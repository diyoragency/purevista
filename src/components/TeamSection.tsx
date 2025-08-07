import React from 'react';
import diyor from './images/diyor.jpeg'; 
import second from  './images/second.jpg'
import girl from './images/girl.jpg'

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Diyor Abdullayev",
      role: "Founder & CEO",
      image: diyor,
      bio: "Founder of our agency with deep passion for growth marketing and a vision to scale global skincare brands with impact."
    },
    {
      name: "Michael Chen",
      role: "Head of Paid Advertising",
      image: second,
      bio: "Performance marketing expert specializing in Meta and Google Ads with a proven track record of scaling DTC brands."
    },
    {
      name: "Emily Rodriguez",
      role: "Strategy Director",
      image: girl,
      bio: "Brand strategist with experience in positioning and growth for beauty and wellness companies around the world."
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our People</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            The people powering your skincare brand’s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-indigo-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm max-w-xs">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
