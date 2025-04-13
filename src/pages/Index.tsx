
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
      <AboutSection />
      <TechStack />
      <JourneySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
