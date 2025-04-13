
import React, { useRef, useEffect } from 'react';
import TypewriterText from './TypewriterText';
import { ChevronDown } from 'lucide-react';
import { ElegantShape } from './ui/component';

const HeroSection: React.FC = () => {
  const techIconsRef = useRef<HTMLDivElement>(null);
  
  // Tech icons animation
  useEffect(() => {
    if (!techIconsRef.current) return;
    
    const container = techIconsRef.current;
    const icons = [
      { 
        name: "HTML", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#E34F26" d="M5.7 1.3L4.8 13.1H19.2L18.3 1.3H5.7zM17.2 14.9H6.8L6.2 21.9L12 23.6L17.8 21.9L17.2 14.9z"/><path fill="#EF652A" d="M12 18l-3.8-1.1l-.3-3H6.4l.5 5.9l5.1 1.5V18z"/><path fill="#EBEBEB" d="M12 9.5H8.4l-.1-1.3h3.7V6.7H6.7l.1 1.3.4 4H12V9.5z"/><path fill="#EBEBEB" d="M12 18v-2.3h-1.9l-.9-.3-.1-1.4h-1.5l.2 2.9L12 18z"/><path fill="#FFF" d="M15.5 9.5l.2 1.3h-3.7V12h3.5l-.3 3.4-.9.3-1.8-.5v1.6l3.3 1-2.1-22.8h12L17.4 3.4h-9l.2 1.3h8l-.8 8.9h-3.3z"/></svg>`, 
        delay: 1000, 
        speed: 5 
      },
      { 
        name: "CSS", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#1572B6" d="M5.7 1.3L4.8 13.1H19.2L18.3 1.3H5.7zM17.2 14.9H6.8L6.2 21.9L12 23.6L17.8 21.9L17.2 14.9z"/><path fill="#33A9DC" d="M12 18l3.8-1.1.3-3H12v-2.5h4.3l.1-1.3H12V6.7h5.3l-.4 4-1.1 5.8-3.8 1.2V18z"/><path fill="#FFF" d="M12 18v-2.3h-1.9l-.9-.3-.1-1.4h-1.5l.2 2.9L12 18z"/><path fill="#EBEBEB" d="M12 6.7v2.5H7.7l-.2-1.3-.1-1.3H12V6.7zM7.8 12h4.2v-2.5H8l.2 2.5z"/><path fill="#EBEBEB" d="M12 15.7l-.1.1-1.8-.5v1.6l3.3 1-2.1-22.8h12L12 15.7z"/></svg>`, 
        delay: 0, 
        speed: 7 
      },
      { 
        name: "JavaScript", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#F7DF1E" d="M0 0h24v24H0V0z"/><path d="M6.4 19.1c.5.8 1.3 1.5 2.6 1.5c1.5 0 2.5-.7 2.5-2.2c0-1.9-2.2-2.5-3.5-3c-1.9-.7-3.9-1.6-3.9-4.3c0-2.4 2-3.9 4.6-3.9c1.8 0 3.4.6 4.3 2.2L11 11.3c-.5-.8-1-1.3-2.1-1.3c-1 0-1.8.5-1.8 1.5c0 1.5 1.9 2 3.1 2.4c2.2.9 4.3 1.8 4.3 4.8c0 2.9-2.2 4.3-5.1 4.3c-2.3 0-4.4-1-5.4-2.9l2.4-1zm9.2 0c.5.8 1.1 1.5 2.3 1.5c1 0 1.6-.4 1.6-1.9V8.5h3V19c0 3.3-1.8 4.7-4.3 4.7c-2.1 0-3.7-.8-4.6-2.5l2-1.1z"/></svg>`, 
        delay: 2000, 
        speed: 6 
      },
      { 
        name: "React", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#61DAFB" d="M12 10.8c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2s1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2zm-6.4 4.3c.2.3.5.6.9.9C7.9 17.1 9.9 18 12 18s4.1-.9 5.5-2c.3-.3.6-.5.9-.9c.6-.8 1-1.7 1-2.5c0-.9-.3-1.8-1-2.5c-.2-.3-.5-.6-.9-.9c-1.4-1.1-3.4-2-5.5-2s-4.1.9-5.5 2c-.3.2-.6.5-.9.9c-.6.8-1 1.7-1 2.5c.1.8.4 1.7 1 2.5z"/><path fill="#61DAFB" d="M12 19.2c2.8 0 5.2-1.1 6.8-2.9c.4-.4.7-.8 1-1.2c.7-1 1.1-2.1 1.1-3.1c0-1.1-.4-2.2-1.1-3.1c-.3-.4-.6-.8-1-1.2c-1.6-1.8-4-2.9-6.8-2.9s-5.2 1.1-6.8 2.9c-.4.4-.7.8-1 1.2c-.7 1-1.1 2.1-1.1 3.1c0 1.1.4 2.2 1.1 3.1c.3.4.6.8 1 1.2c1.6 1.8 4 2.9 6.8 2.9z"/><path stroke="#61DAFB" fill="none" d="M12 19.2c3.1 0 5.5-3.9 5.5-7.2c0-3.3-2.4-7.2-5.5-7.2S6.5 8.7 6.5 12c0 3.3 2.4 7.2 5.5 7.2z"/><path stroke="#61DAFB" fill="none" d="M8.1 6.1c-1.6 2.7-1.6 7.1 0 9.8c1.6 2.7 4.3 2.7 5.9 0c1.6-2.7 1.6-7.1 0-9.8c-1.6-2.7-4.3-2.7-5.9 0M6.5 12h11"/></svg>`, 
        delay: 500, 
        speed: 8 
      },
      { 
        name: "Tailwind", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#38B2AC" d="M12 6.2c-2.3 0-3.8.9-4.5 2.7c.9-1.2 2-1.7 3.1-1.4c.7.2 1.2.6 1.6 1.1c.7.7 1.5 1.5 3.2 1.5c2.3 0 3.8-.9 4.5-2.7c-.9 1.2-2 1.7-3.1 1.4c-.7-.2-1.2-.6-1.6-1.1c-.7-.7-1.5-1.5-3.2-1.5zM7.5 12c-2.3 0-3.8.9-4.5 2.7c.9-1.2 2-1.7 3.1-1.4c.7.2 1.2.6 1.6 1.1c.7.7 1.5 1.5 3.2 1.5c2.3 0 3.8-.9 4.5-2.7c-.9 1.2-2 1.7-3.1 1.4c-.7-.2-1.2-.6-1.6-1.1c-.7-.7-1.5-1.5-3.2-1.5z"/></svg>`, 
        delay: 1500, 
        speed: 5 
      },
      { 
        name: "Firebase", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#FFA000" d="M3.9 15.7L6.3.5c.1-.5.6-.6.9-.3l2.5 4.8zM20.7 19.4l-2.3-14c-.1-.5-.6-.7-.9-.3L3.3 19.4l7.9 4.4c.5.3 1.1.3 1.6 0zM14.3 7.1L12.5 3.7c-.2-.3-.6-.3-.8 0L3.5 17.9z"/></svg>`, 
        delay: 3000, 
        speed: 7 
      },
      { 
        name: "Node.js", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#539E43" d="M12 22c-.3 0-.6-.1-.8-.2l-2.6-1.5c-.4-.2-.2-.3-.1-.3c.5-.2.6-.2 1.1-.5c.1-.1.1 0 .2 0l2 1.2c.1 0 .2 0 .2 0l7.6-4.4c.1 0 .1-.1.1-.2V8c0-.1 0-.2-.1-.2l-7.6-4.4c-.1 0-.2 0-.2 0L4.2 7.8c-.1 0-.1.1-.1.2v8.8c0 .1 0 .2.1.2l2.1 1.2c1.1.6 1.8-.1 1.8-.7V8.7c0-.1.1-.2.2-.2h1c.1 0 .2.1.2.2v8.6c0 1.4-.8 2.2-2.1 2.2c-.4 0-.7 0-1.6-.4l-2-1.2c-.5-.3-.8-.8-.8-1.4V8c0-.6.3-1.1.8-1.4l7.6-4.4c.5-.3 1.1-.3 1.6 0l7.6 4.4c.5.3.8.8.8 1.4v8.8c0 .6-.3 1.1-.8 1.4l-7.6 4.4c-.2.1-.5.2-.8.2zm2.4-6c-3.3 0-4-.8-4-1.4c0-.1.1-.2.2-.2h1c.1 0 .2.1.2.2c.1 1 .5 1.4 2.6 1.4c1.6 0 2.3-.4 2.3-1.2c0-.5-.2-.8-2.7-1.1c-2.1-.2-3.4-.7-3.4-2.3c0-1.5 1.3-2.4 3.5-2.4c2.5 0 3.7.9 3.8 2.6c0 .1 0 .1-.1.2h-1c-.1 0-.2-.1-.2-.2c-.2-1.1-.8-1.4-2.6-1.4c-1.9 0-2.1.7-2.1 1.1c0 .6.3.7 2.6 1c2.3.3 3.5.7 3.5 2.3c0 1.6-1.4 2.4-3.8 2.4z"/></svg>`, 
        delay: 2500, 
        speed: 7 
      },
      { 
        name: "MongoDB", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#47A248" d="M17.2 9.5c-1.3-5.6-4.3-7.4-4.6-8.1c-.3-.4-.5-1-1-1.5c0 .2-.1.5-.3.7c-.2.2-.8.8-1.8 1.7c-.9.9-1.8 1.8-2.4 3.5c-.6 1.6-.9 3.6-.4 6.4c.5 2.9 3.7 5.5 3.7 5.5l.2.2c.4 5.7 1.2 8.8 1.2 8.8h1.1s.9-4.9 1.8-8.8c.3-1 1.6-2.5 2.4-4.9c.8-2.2.4-3.1.1-3.5z"/></svg>`, 
        delay: 800, 
        speed: 6 
      },
      { 
        name: "Next.js", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M11.5 0c-.1 0-.3 0-.4.2L1.6 18c-.2.3 0 .7.4.7h5.9c.2 0 .4-.1.5-.2c.7-1.3 1.4-2.6 2.1-3.9l.7-1.2L16 3.9c0-.1-.1-.1-.1-.1h-4.2c-.1 0-.2.1-.2.1L8.9 9.2c-.1.1 0 .2.1.2h2c.2 0 .3.3.2.4l-3.4 5.6c-.1.2.2.4.3.2l6.1-10.5c.1-.1 0-.2-.1-.2h-1.9c-.1 0-.2-.2-.1-.3l3.2-5.3c.1-.1 0-.3-.1-.3h-3.7z"/><path d="M13.6 14.8c-.1-.1-.1-.1-.2 0l-1.3 2.3C12 17.2 12 17.3 12 17.4l-.3.5c-.1.1 0 .1.1.1h4l2-3.5c0-.1 0-.1-.1-.1h-4.1v.4z"/><path d="M22.3 18c0-.1-.1-.1-.1-.1h-3.9c-.1 0-.2.1-.1.2l.9 1.1c.1.1.2.2.4.2h2.3c.4 0 .6-.4.4-.7l.1-.7z"/><path d="M16.3 18.1c-.1 0-.2.1-.1.2l1.3 1.7c.1.1.2.2.4.2h2.6c.4 0 .6-.4.4-.7l-1.1-1.3c-.1-.1-.2-.2-.3-.2h-3.2v.1z"/></svg>`, 
        delay: 1200, 
        speed: 5 
      },
      { 
        name: "AWS", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#FF9900" d="M6.8 10c0 .3 0 .5.1.7.1.2.1.4.3.6 0 .1.1.1.1.2 0 .1 0 .2-.2.2l-.5.3a.4.4 0 0 1-.2.1c-.1 0-.2 0-.2-.1l-.3-.4c-.6.7-1.4 1.1-2.3 1.1-.7 0-1.2-.2-1.6-.6C1.9 11.7 1.7 11.2 1.7 10.5c0-.7.2-1.2.7-1.6.5-.4 1.1-.6 2-.6.3 0 .6 0 .8.1.3 0 .6.1.9.2v-.6c0-.6-.1-1-.4-1.3-.3-.2-.7-.4-1.3-.4-.3 0-.6 0-.9.1-.3.1-.6.2-.9.3l-.2.1h-.1c-.1 0-.2-.1-.2-.2v-.4c0-.1 0-.2.1-.3.1-.1.1-.1.2-.2.3-.1.6-.3 1-.4.4-.1.8-.1 1.2-.1.9 0 1.6.2 2.1.6.4.4.7 1.1.7 2v2.7zm-3.2 1.2c.3 0 .5 0 .8-.1.3-.1.5-.3.8-.5.1-.2.2-.3.3-.5V9.4c-.3-.1-.6-.2-.8-.2-.2 0-.5-.1-.7 0-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.9 0 .4.1.6.3.8.2.1.5.1.9 0zm6.4.9c-.1 0-.2 0-.3-.1-.1 0-.1-.2-.2-.3l-1.9-6.2c0-.1-.1-.2-.1-.3 0-.1.1-.2.2-.2h.8c.2 0 .3 0 .3.1l.2.3 1.3 5.3 1.2-5.3c0-.1.1-.2.2-.3.1-.1.2-.1.3-.1h.6c.2 0 .3 0 .3.1l.2.3 1.3 5.3L16.5 5c0-.1.1-.2.2-.3.1-.1.2-.1.3-.1h.7c.1 0 .2.1.2.2v.1c0 .1 0 .1-.1.2l-2 6.2c0 .1-.1.2-.2.3-.1.1-.2.1-.3.1h-.7c-.2 0-.3 0-.3-.1l-.2-.3-1.2-5-1.2 5c0 .1-.1.2-.2.3-.1.1-.2.1-.3.1h-.6zm10.3.2c-.4 0-.8 0-1.2-.1-.4-.1-.7-.2-.9-.3-.1-.1-.2-.2-.2-.2v-.1c0-.1.1-.2.2-.2h.1c.1 0 .1 0 .2.1.2.1.5.2.8.3.3.1.6.1.9.1.5 0 .9-.1 1.2-.3.3-.2.4-.4.4-.8 0-.2-.1-.4-.2-.6-.1-.2-.4-.3-.8-.4l-1.2-.4c-.6-.2-1-.4-1.3-.8-.2-.3-.4-.7-.4-1.2 0-.3.1-.6.2-.9.1-.3.3-.5.6-.7.2-.2.5-.3.8-.4.3-.1.7-.1 1-.1.2 0 .4 0 .5 0 .2 0 .4.1.5.1.2 0 .3.1.5.1.1 0 .3.1.3.1.1.1.2.1.2.2.1.1.1.1.1.2v.4c0 .2-.1.3-.2.3h-.1c-.1 0-.3-.1-.5-.2s-.6-.1-1-.1c-.4 0-.8.1-1.1.2-.2.2-.4.4-.4.7 0 .2.1.4.2.6.2.2.5.3.9.4l1.1.4c.6.2 1 .4 1.2.8.3.3.4.6.4 1.1 0 .4-.1.7-.2 1s-.3.5-.6.7c-.3.2-.5.3-.9.4-.5.1-.8.2-1.3.2zm6.3-9.4c-.9 0-1.6-.1-2.2-.2-.6-.1-1.1-.3-1.5-.5-.1-.1-.2-.2-.2-.3 0-.1 0-.2.1-.2l.4-.4c.1-.1.2-.1.2-.1h.1c.2.1.5.2.9.3.3.1.7.1 1.1.1.6 0 1.1-.1 1.4-.3.4-.2.5-.5.5-.9 0-.3-.1-.5-.3-.6-.2-.2-.5-.3-1-.3-.1 0-.3 0-.4 0s-.3 0-.4-.1c-.7-.1-1.2-.3-1.6-.7-.4-.4-.6-.8-.6-1.4c0-.4.1-.8.3-1.1.2-.3.4-.6.7-.8.3-.2.6-.4 1-.5.4-.1.8-.2 1.2-.2.5 0 .9 0 1.3.1.4.1.7.2.9.3.1.1.2.1.3.2.1.1.1.1.1.2v.4c0 .1-.1.2-.2.2-.1 0-.2 0-.4-.1-.3-.1-.5-.2-.8-.2-.3-.1-.6-.1-.9-.1-.6 0-1 .1-1.3.3-.3.2-.5.5-.5.8 0 .3.1.5.3.6.2.1.6.3 1.1.3h.9c.7.1 1.2.3 1.6.7.3.4.5.8.5 1.4 0 .4-.1.7-.2 1-.2.3-.4.5-.7.7-.3.2-.6.3-.9.4-.4.1-.8.1-1.2.1z"/><path d="M22.8 15.8c-2.6 1.9-6.4 3-9.7 3-4.6 0-8.7-1.7-11.9-4.5-.2-.2 0-.5.3-.4 3.4 2 7.6 3.2 11.9 3.2 2.9 0 6.1-.6 9.1-1.9.4-.2.8.3.3.6z"/><path d="M23.8 14.7c-.3-.4-2.2-.2-3.1-.1-.3 0-.3-.2-.1-.4 1.5-1.1 4-0.8 4.3-.4.3.4-.1 2.8-1.5 4-.2.2-.4.1-.3-.1.3-.8 1-2.6.7-3z"/></svg>`, 
        delay: 3200, 
        speed: 6 
      },
    ];
    
    const iconElements: HTMLDivElement[] = [];
    
    // Create falling icons - more of them for denser animation
    const iconCount = 36; // Increased for denser animation
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
      
      // Position randomly but within bounds - wider spread
      iconEl.style.left = `${Math.random() * 90 + 5}%`;
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
            iconEl.style.left = `${Math.random() * 90 + 5}%`;
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
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 30%" }} 
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
      
      {/* Grid pattern in the top left corner - enlarged */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6IiBmaWxsLW9wYWNpdHk9IjAiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      {/* Add elegant shapes for background effect */}
      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-neon-cyan/[0.05]"
        className="left-[-10%] top-[15%]"
      />
      
      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-neon-magenta/[0.05]"
        className="right-[-5%] bottom-[15%]"
      />
    </section>
  );
};

export default HeroSection;
