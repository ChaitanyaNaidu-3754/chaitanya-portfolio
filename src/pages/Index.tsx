
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import JourneySection from '@/components/JourneySection';

const Index: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "Chaitanya Naidu - Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AboutSection />
        <JourneySection />
      </div>
      <TechStack />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
