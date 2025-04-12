
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "Chaitanya Naidu - Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
