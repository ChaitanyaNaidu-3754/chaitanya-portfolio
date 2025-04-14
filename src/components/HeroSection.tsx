
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
      { 
        name: "HTML", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code text-[#E34F26]"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`, 
        delay: 1000, 
        speed: 5 
      },
      { 
        name: "CSS", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code text-[#1572B6]"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`, 
        delay: 0, 
        speed: 7 
      },
      { 
        name: "JavaScript", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code text-[#F7DF1E]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`, 
        delay: 2000, 
        speed: 6 
      },
      { 
        name: "React", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code text-[#61DAFB]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`, 
        delay: 500, 
        speed: 8 
      },
      { 
        name: "Tailwind", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code text-[#38B2AC]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`, 
        delay: 1500, 
        speed: 5 
      },
      { 
        name: "Firebase", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database text-[#FFCA28]"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`, 
        delay: 3000, 
        speed: 7 
      },
      { 
        name: "Cloud", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud text-[#4285F4]"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`, 
        delay: 3500, 
        speed: 6 
      },
      { 
        name: "Node.js", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server text-[#68A063]"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`, 
        delay: 2500, 
        speed: 7 
      },
    ];
    
    const iconElements: HTMLDivElement[] = [];
    
    // Create falling icons - more of them for denser animation
    const iconCount = 24; // Increased from default
    for (let i = 0; i < iconCount; i++) {
      const iconData = icons[i % icons.length];
      
      const iconEl = document.createElement('div');
      iconEl.className = 'absolute px-2 py-1 rounded glass flex items-center justify-center';
      
      // Create an icon element with SVG
      iconEl.innerHTML = iconData.icon;
      
      // Add name as text
      const textEl = document.createElement('span');
      textEl.className = 'ml-1 text-xs';
      textEl.textContent = iconData.name;
      
      iconEl.appendChild(textEl);
      
      // Position randomly but within bounds
      iconEl.style.left = `${Math.random() * 85 + 5}%`;
      iconEl.style.top = '-30px';
      iconEl.style.opacity = '0';
      
      container.appendChild(iconEl);
      iconElements.push(iconEl);
      
      // Start animation after delay
      setTimeout(() => {
        let posY = -30;
        const maxY = container.offsetHeight + 30;
        
        const animateIcon = () => {
          posY += iconData.speed / 10;
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
            iconEl.style.left = `${Math.random() * 85 + 5}%`;
            iconEl.style.opacity = '0';
          }
          
          requestAnimationFrame(animateIcon);
        };
        
        animateIcon();
      }, iconData.delay + Math.random() * 2000); // More randomized delays
    }
    
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="min-h-screen relative flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
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
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 rounded-lg bg-dark-light neon-border-cyan text-white hover:scale-105 animate-glow-pulse transition-transform duration-300"
            >
              Hire Me
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-lg bg-dark-light neon-border-magenta text-white hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </button>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="relative flex items-center justify-center animate-fade-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
          
          {/* Profile image - adjusted for better centering */}
          <div className="relative z-10">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[30%] overflow-hidden border-4 border-dark-gray animate-floating flex items-center justify-center">
              <img
                src="/lovable-uploads/9f26cdc1-6ee3-4400-8ca9-6e367d9de6e0.png"
                alt="Chaitanya Naidu"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "50% 20%" }}
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
      
      {/* Grid pattern in the top left corner */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
