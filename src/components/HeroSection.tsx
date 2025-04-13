
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#E34F26" d="M5.08 0L4.126 12.24h13.746L17.08 0H5.08z"></path><path fill="#EF652A" d="M14.347 3.324H11.06v2.576h3.287v-2.576zm0 2.576v2.576H7.774l.23 2.576h6.343l-.23 3.324-1.955.54-1.955-.54-.115-1.404H7.774l.23 2.576 3.402 1.08 3.402-1.08.461-4.944H7.774l-.23-2.576h6.803z"></path></svg>`, 
        delay: 1000, 
        speed: 5 
      },
      { 
        name: "CSS", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#1572B6" d="M5.08 0l.944 12.24h13.746l-.944-12.24H5.08z"></path><path fill="#33A9DC" d="M16.654 10.77l-5.593 2.357-5.594-2.356.23-2.576h10.726l.231 2.576zm-5.593 4.403l-3.402-1.08-.231-2.576h2.318l.115 1.404 1.955.54 1.955-.54.115-1.404h2.318l-.23 2.576-3.402 1.08z"></path></svg>`, 
        delay: 0, 
        speed: 7 
      },
      { 
        name: "JavaScript", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#F7DF1E" d="M0 0h24v24H0z"></path><path d="M18.07 19.565c-.51.923-1.55 1.638-3.08 1.638-1.98 0-3.464-1.13-3.464-3.94V9.76h2.773v7.494c0 1.27.655 1.544 1.303 1.544.654 0 1.124-.366 1.472-.773l.996 1.54zM8.927 21.153c-1.823 0-3.015-.913-3.594-2.116l1.921-.96c.41.696 1.14 1.107 1.872 1.107.806 0 1.215-.32 1.215-.869 0-.73-.978-.977-1.872-1.338-1.261-.503-2.67-1.128-2.67-2.857 0-1.635 1.374-2.764 3.24-2.764 1.347 0 2.51.59 3.196 1.765l-1.875.96c-.341-.544-.874-.81-1.466-.81-.597 0-.939.274-.939.687 0 .637.977.85 1.913 1.25 1.261.544 2.628 1.152 2.628 2.931 0 1.848-1.557 2.95-3.57 2.95z"></path></svg>`, 
        delay: 2000, 
        speed: 6 
      },
      { 
        name: "React", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#61DAFB" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zM12 18.089c4.889 0 8.873-1.37 8.873-3.05 0-1.68-3.984-3.051-8.873-3.051-4.889 0-8.873 1.37-8.873 3.05 0 1.68 3.984 3.051 8.873 3.051z"></path><path stroke="#61DAFB" d="M6.154 11.089c2.445-4.23 5.57-6.505 7.002-5.051 1.432 1.454-.014 5.79-2.458 10.02-2.445 4.23-5.57 6.505-7.002 5.051-1.432-1.454.014-5.79 2.458-10.02z"></path><path stroke="#61DAFB" d="M17.846 11.089c-2.445-4.23-5.57-6.505-7.002-5.051-1.432 1.454.014 5.79 2.458 10.02 2.445 4.23 5.57 6.505 7.002 5.051 1.432-1.454-.014-5.79-2.458-10.02z"></path></svg>`, 
        delay: 500, 
        speed: 8 
      },
      { 
        name: "Tailwind", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#38B2AC" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>`, 
        delay: 1500, 
        speed: 5 
      },
      { 
        name: "Firebase", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#FFA000" d="M3.89 15.673L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path></svg>`, 
        delay: 3000, 
        speed: 7 
      },
      { 
        name: "Cloud", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#4285F4" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`, 
        delay: 3500, 
        speed: 6 
      },
      { 
        name: "Node.js", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="#68A063" d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.202 1.101-.493.056-.033.129-.021.182.021l1.87 1.12c.072.039.166.039.231 0l7.292-4.249c.072-.039.116-.116.116-.202V7.768c0-.085-.044-.165-.116-.201l-7.292-4.225c-.072-.039-.165-.039-.231 0L4.578 7.566c-.072.039-.113.129-.113.201v8.479c0 .077.041.165.113.201l1.994 1.157c1.076.551 1.738-.095 1.738-.734V8.437c0-.113.097-.21.21-.21h.926c.113 0 .21.094.21.21v8.434c0 1.448-.782 2.28-2.146 2.28-.422 0-.753 0-1.67-.46l-1.902-1.103A1.553 1.553 0 013 16.382V7.904c0-.579.31-1.114.811-1.403L11.1 2.252a1.583 1.583 0 011.8 0l7.292 4.249c.5.289.81.824.81 1.403v8.479c0 .579-.31 1.114-.811 1.402l-7.292 4.226a1.599 1.599 0 01-.774.201zm2.143-5.873c-3.186 0-3.862-.738-3.862-1.353 0-.113.093-.21.21-.21h.943c.107 0 .194.077.21.18.142.968.562 1.449 2.499 1.449 1.533 0 2.188-.354 2.188-1.177 0-.474-.186-.83-2.578-1.067-1.999-.198-3.241-.646-3.241-2.267 0-1.493 1.242-2.388 3.323-2.388 2.34 0 3.49.822 3.638 2.581.006.56.003.113-.056.17a.213.213 0 01-.154.061h-.943a.218.218 0 01-.204-.166c-.229-1.023-.786-1.353-2.281-1.353-1.687 0-1.884.599-1.884 1.043 0 .544.232.699 2.497.997 2.241.297 3.323.72 3.323 2.311 0 1.614-1.332 2.521-3.658 2.521z"></path></svg>`, 
        delay: 2500, 
        speed: 7 
      },
    ];
    
    const iconElements: HTMLDivElement[] = [];
    
    // Create falling icons - more of them for denser animation
    const iconCount = 36; // Increased from 24 for denser animation
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
