import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import NotAverageSection from '../components/NotAverageSection';
import ProcessSection from '../components/ProcessSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <NotAverageSection />
      <ProcessSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;