import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import TypewriterText from './TypewriterText';
import { ChevronDown } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiTailwindcss, SiFirebase } from 'react-icons/si';

const HeroSection: React.FC = () => {
  const techIconsRef = useRef<HTMLDivElement>(null);
  
  // Tech icons animation
  useEffect(() => {
    if (!techIconsRef.current) return;
    
    const container = techIconsRef.current;
    const icons = [
      { 
        name: "HTML", 
        icon: FaHtml5,
        color: "#E34F26", 
        delay: 1000, 
        speed: 5 
      },
      { 
        name: "CSS", 
        icon: FaCss3Alt,
        color: "#1572B6", 
        delay: 0, 
        speed: 7 
      },
      { 
        name: "JavaScript", 
        icon: SiJavascript,
        color: "#F7DF1E", 
        delay: 2000, 
        speed: 6 
      },
      { 
        name: "React", 
        icon: FaReact,
        color: "#61DAFB", 
        delay: 500, 
        speed: 8 
      },
      { 
        name: "Tailwind", 
        icon: SiTailwindcss,
        color: "#38B2AC", 
        delay: 1500, 
        speed: 5 
      },
      { 
        name: "Firebase", 
        icon: SiFirebase,
        color: "#FFCA28", 
        delay: 3000, 
        speed: 7 
      },
      { 
        name: "TypeScript", 
        icon: SiTypescript,
        color: "#3178C6", 
        delay: 2800, 
        speed: 5 
      },
      { 
        name: "Node.js", 
        icon: FaNodeJs,
        color: "#68A063", 
        delay: 2500, 
        speed: 7 
      },
      { 
        name: "Git", 
        icon: FaGitAlt,
        color: "#F05032", 
        delay: 3500, 
        speed: 6 
      }
    ];

    // Existing animation logic here...
    icons.forEach((iconData, index) => {
      const iconElement = document.createElement('div');
      iconElement.className = `absolute opacity-0 transition-all duration-500 ease-in-out`;
      iconElement.style.left = `${Math.random() * 100}%`;
      iconElement.style.animationDelay = `${iconData.delay}ms`;

      const IconComponent = iconData.icon;
      const iconSvg = React.createElement(IconComponent, { 
        color: iconData.color, 
        size: 32 
      });

      const reactElement = React.createElement('div', {
        className: 'flex items-center justify-center w-8 h-8',
        children: iconSvg
      });

      // Convert React element to DOM
      const tempDiv = document.createElement('div');
      const root = createRoot(tempDiv);
      root.render(reactElement);

      iconElement.appendChild(tempDiv);
      container.appendChild(iconElement);
    });

    // Rest of the existing code...
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-dark-purple opacity-80"></div>
      
      {/* Animated tech icons */}
      <div ref={techIconsRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow-cyan">
          <TypewriterText text="Full-Stack Developer" delay={100} />
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-light-gray">
          Building modern web applications with cutting-edge technologies
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg bg-dark-light neon-border-cyan text-white hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg bg-dark-light neon-border-magenta text-white hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-light-gray hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
