
import React from 'react';
import TypewriterText from './TypewriterText';
import { ChevronDown } from 'lucide-react';
import BlobAnimation from './BlobAnimation';
import FallingTechIcons from './FallingTechIcons';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Cool Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-medium">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_50%)] animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left mb-12 md:mb-0"
        >
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                className="px-6 py-6 rounded-lg bg-dark-medium border-neon-magenta text-white hover:shadow-[0_0_15px_rgba(255,0,255,0.7)]"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                className="px-6 py-6 rounded-lg bg-dark-medium border-neon-cyan text-white hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right side - Profile Photo with tech icons */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/5 flex justify-center relative"
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-50 rounded-2xl filter blur-xl transform scale-105 animate-glow-pulse"></div>
            
            {/* Profile image */}
            <img 
              src="/lovable-uploads/04e3574a-9b90-4966-aa3e-ad040f1aa8f4.png"
              alt="Chaitanya Naidu" 
              className="relative z-10 w-80 h-80 object-cover object-top rounded-2xl"
            />
            
            {/* Falling tech icons container - positioned behind the profile image */}
            <div className="absolute inset-0 -z-10 w-full h-full scale-150">
              <FallingTechIcons />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
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
      </motion.div>

      <BlobAnimation />
    </section>
  );
};

export default HeroSection;
