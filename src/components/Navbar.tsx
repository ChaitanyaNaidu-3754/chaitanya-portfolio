
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl sm:text-2xl font-bold text-glow-cyan">
              DevPortfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-light-gray hover:text-white hover-underline-animation"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-light-gray hover:text-white hover-underline-animation"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-light-gray hover:text-white hover-underline-animation"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-light-gray hover:text-white hover-underline-animation"
            >
              Contact Me
            </button>
            <a 
              href="https://drive.google.com/file/d/1yHALtQHvSVYPB0QTY-zvnPqSGq3B_ott/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 rounded-lg bg-dark-light neon-border-magenta text-white hover:scale-105 transition-transform duration-300"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark mt-2 px-4 py-5 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-light-gray hover:text-white py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-light-gray hover:text-white py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-light-gray hover:text-white py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-light-gray hover:text-white py-2"
            >
              Contact Me
            </button>
            <a 
              href="https://drive.google.com/file/d/1yHALtQHvSVYPB0QTY-zvnPqSGq3B_ott/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 rounded-lg bg-dark-light neon-border-magenta text-white text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
