
import React from 'react';
import TypewriterText from './TypewriterText';
import { ChevronDown } from 'lucide-react';
import BlobAnimation from './BlobAnimation';
import FallingTechIcons from './FallingTechIcons';
import { Button } from './ui/button';
import { BackgroundPaths } from './ui/background-paths';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Effects */}
      <BackgroundPaths />
      
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow-cyan">
            Hi, I'm Chaitanya Naidu
          </h1>
          <div className="h-16 mb-6">
            <TypewriterText 
              texts={[
                "UI/UX Designer", 
                "Full Stack Developer", 
                "Cloud Explorer"
              ]} 
              delay={3000} 
              className="text-xl md:text-3xl font-medium text-neon-magenta"
            />
          </div>
          <p className="text-lg md:text-xl mb-8 text-light-gray">
            Crafting innovative web solutions with modern technologies for exceptional user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              variant="outline"
              className="px-6 py-6 rounded-lg bg-dark-medium border-neon-magenta text-white hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.7)] animate-bounce-subtle"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
            <Button 
              variant="outline"
              className="px-6 py-6 rounded-lg bg-dark-medium border-neon-cyan text-white hover:scale-110 transition-transform duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>
        </div>
        
        {/* Right side - Profile Photo with tech icons */}
        <div className="w-full md:w-2/5 flex justify-center relative">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-50 rounded-2xl filter blur-xl transform scale-105 animate-glow-pulse"></div>
            
            {/* Profile image */}
            <img 
              src="/lovable-uploads/04e3574a-9b90-4966-aa3e-ad040f1aa8f4.png"
              alt="Chaitanya Naidu" 
              className="relative z-10 w-72 h-72 object-cover object-center rounded-2xl border-none"
            />
            
            {/* Falling tech icons container - positioned behind the profile image */}
            <div className="absolute inset-0 -z-10 w-full h-full scale-150">
              <FallingTechIcons />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          className="text-light-gray hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>

      <BlobAnimation />
    </section>
  );
};

export default HeroSection;
