
import React, { useRef, useEffect } from 'react';
import TypewriterText from './TypewriterText';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const techIconsRef = useRef<HTMLDivElement>(null);
  
  // Tech icons animation
  useEffect(() => {
    if (!techIconsRef.current) return;
    
    const container = techIconsRef.current;
    const icons = [
      { name: "HTML", color: "#E34F26", delay: 1000, speed: 5 },
      { name: "CSS", color: "#1572B6", delay: 0, speed: 7 },
      { name: "JavaScript", color: "#F7DF1E", delay: 2000, speed: 6 },
      { name: "React", color: "#61DAFB", delay: 500, speed: 8 },
      { name: "Tailwind", color: "#38B2AC", delay: 1500, speed: 5 },
      { name: "Firebase", color: "#FFCA28", delay: 3000, speed: 7 },
      { name: "Cloud", color: "#4285F4", delay: 3500, speed: 6 }
    ];
    
    const iconElements: HTMLDivElement[] = [];
    
    // Create falling icons
    icons.forEach(icon => {
      const iconEl = document.createElement('div');
      iconEl.className = 'absolute text-sm px-2 py-1 rounded glass';
      iconEl.textContent = icon.name;
      iconEl.style.color = icon.color;
      iconEl.style.left = `${Math.random() * 80 + 10}%`;
      iconEl.style.top = '-30px';
      iconEl.style.opacity = '0';
      
      container.appendChild(iconEl);
      iconElements.push(iconEl);
      
      // Start animation after delay
      setTimeout(() => {
        let posY = -30;
        const maxY = container.offsetHeight + 30;
        
        const animateIcon = () => {
          posY += icon.speed / 10;
          iconEl.style.transform = `translateY(${posY}px)`;
          
          // Fade in at start
          if (posY < 50) {
            iconEl.style.opacity = `${(posY + 30) / 80}`;
          }
          
          // Fade out at end
          if (posY > maxY - 100) {
            iconEl.style.opacity = `${(maxY - posY) / 100}`;
          }
          
          // Reset when out of view
          if (posY > maxY) {
            posY = -30;
            iconEl.style.left = `${Math.random() * 80 + 10}%`;
            iconEl.style.opacity = '0';
          }
          
          requestAnimationFrame(animateIcon);
        };
        
        animateIcon();
      }, icon.delay);
    });
    
    return () => {
      iconElements.forEach(el => el.remove());
    };
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen relative flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 py-12 z-10">
        {/* Left side - Text */}
        <div className="flex flex-col justify-center animate-fade-in-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-glow-cyan">Chaitanya Naidu</span>
          </h1>
          
          <div className="mb-6 text-xl sm:text-2xl">
            I'm a <TypewriterText 
              texts={["UI/UX Designer", "Full Stack Developer", "Cloud Explorer"]} 
              className="text-glow-magenta font-semibold"
            />
          </div>
          
          <p className="text-light-gray mb-8 max-w-md">
            Building modern web experiences with a focus on performance,
            accessibility, and elegant design solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-dark-light neon-border-cyan text-white hover:scale-105 animate-glow-pulse transition-transform duration-300">
              Hire Me
            </button>
            
            <button className="px-6 py-3 rounded-lg bg-dark-light neon-border-magenta text-white hover:scale-105 transition-transform duration-300">
              View Projects
            </button>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="relative flex items-center justify-center animate-fade-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
          
          {/* Profile image */}
          <div className="relative z-10">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[30%] overflow-hidden border-4 border-dark-gray animate-floating">
              <img
                src="/lovable-uploads/9f26cdc1-6ee3-4400-8ca9-6e367d9de6e0.png"
                alt="Chaitanya Naidu"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/30 to-neon-magenta/30 rounded-[30%] blur-xl -z-10"></div>
          </div>
          
          {/* Falling tech icons container */}
          <div ref={techIconsRef} className="absolute inset-0 overflow-hidden"></div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-small">
        <button onClick={scrollToAbout} className="flex flex-col items-center text-light-gray hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-magenta/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
