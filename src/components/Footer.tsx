
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const navLinks = [
    { name: "Home", sectionId: "hero" },
    { name: "About", sectionId: "about" },
    { name: "Skills", sectionId: "tech-stack" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" }
  ];
  
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative bg-dark-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold text-glow-cyan">Chaitanya Naidu</h3>
            <p className="text-light-gray text-sm mt-1">Full Stack Developer</p>
          </motion.div>
          
          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.sectionId)}
                className="text-light-gray hover:text-white hover-underline-animation cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        </div>
        
        <div className="border-t border-dark-gray my-8 opacity-30"></div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-light-gray text-sm mt-6 md:mt-0"
          >
            © {new Date().getFullYear()} Chaitanya Naidu. All rights reserved.
          </motion.div>
          
          {/* Scroll to top */}
          <motion.button 
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-10 h-10 rounded-full glass-dark hover:neon-border-cyan transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-neon-cyan" />
          </motion.button>
        </div>
      </div>
      
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simulated stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${Math.random() * 3}px ${Math.random() * 2}px rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
