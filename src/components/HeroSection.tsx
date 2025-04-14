
import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
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
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32">
          <path fill="#E34F26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
        </svg>`, 
        color: "#E34F26", 
        delay: 1000, 
        speed: 5 
      },
      { 
        name: "CSS", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32">
          <path fill="#1572B6" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
        </svg>`, 
        color: "#1572B6", 
        delay: 0, 
        speed: 7 
      },
      { 
        name: "JavaScript", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
          <path fill="#F7DF1E" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>`, 
        color: "#F7DF1E", 
        delay: 2000, 
        speed: 6 
      },
      { 
        name: "React", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
          <path fill="#61DAFB" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.1 40.1 61.3 96.3 79.9 4.5 1.5 9.1 2.9 13.8 4.2-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.6-67.2 10.6-1.9-7.8-3.5-15.8-4.7-24.1-9.4-49.9-1-86.3 13.8-95.6zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
        </svg>`, 
        color: "#61DAFB", 
        delay: 500, 
        speed: 8 
      },
      { 
        name: "Tailwind", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
          <path fill="#38B2AC" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"/>
        </svg>`, 
        color: "#38B2AC", 
        delay: 1500, 
        speed: 5 
      },
      { 
        name: "Firebase", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
          <path fill="#FFCA28" d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"/>
          <path fill="#FFCA28" d="M13.445 8.543l2.972 5.995-11.97 11.135z"/>
          <path fill="#FFA000" d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"/>
          <path fill="#F57F17" d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"/>
        </svg>`, 
        color: "#FFCA28", 
        delay: 3000, 
        speed: 7 
      },
      { 
        name: "TypeScript", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="32" height="32">
          <path fill="#3178C6" d="M0 200V0h400v400H0V200zm200-66.7c17.5 0 31.3.3 31.7.7.4.5 4.3 5.2 8.6 10.5l8 9.5H289.7l9.6-11.3 9.7-11.2h45l-.5.7c-.3.4-5.4 6.8-11.3 14.3l-10.7 13.5.5.5c16.5 16.7 24 36.9 22.7 61-.5 8.3-1.1 11.5-3.7 19.7-5.8 18.9-18.5 34.2-35.7 43.3-29.5 15.6-67.6 13.9-96.8-4.4-7.2-4.5-20.3-17-23-21.8l-1.7-3.1 11.8-8.6c6.5-4.8 12.1-8.6 12.4-8.6.3 0 1.9 1.9 3.6 4.3 13.7 19.2 31.1 27.8 52.4 26.1 8.9-.7 14.3-2.5 21.5-7.3 8.4-5.7 13.9-14.6 15.8-25.9 1.6-9.3-.3-20.3-4.5-26.7-4-6.1-12.2-11.6-23.2-15.5-3.4-1.2-18.8-4.8-27.9-6.5-10.7-2-16.5-3.5-24.5-6.1-17.1-5.8-30.7-14.2-40.6-25.2-5-5.5-11.8-17.1-13.9-23.6-6.9-21.5-5.5-46.9 3.8-66 12.7-26.3 41.8-42.9 75.1-43ZM250 110v30h-50l-.1-28.8L199.8 80h25.1l25.1.1V110Zm-90 60v20H80v-40h80v20Z"/>
        </svg>`, 
        color: "#3178C6", 
        delay: 2800, 
        speed: 5 
      },
      { 
        name: "Node.js", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
          <path fill="#68A063" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
        </svg>`, 
        color: "#68A063", 
        delay: 2500, 
        speed: 7 
      },
      { 
        name: "Git", 
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
          <path fill="#F05032" d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/>
        </svg>`, 
        color: "#F05032", 
        delay: 3500, 
        speed: 6 
      }
    ];

    // Clear container first
    container.innerHTML = '';

    // Create falling tech icons with animation
    icons.forEach((iconData, index) => {
      const iconElement = document.createElement('div');
      iconElement.className = `absolute opacity-0 transition-all duration-500 ease-in-out`;
      iconElement.style.left = `${Math.random() * 100}%`;
      iconElement.style.top = `-50px`;
      iconElement.style.animationDelay = `${iconData.delay}ms`;
      
      // Set the SVG icon
      iconElement.innerHTML = iconData.svg;
      
      // Apply animation to make it fall
      setTimeout(() => {
        iconElement.style.opacity = '0.7';
        iconElement.style.transform = `translateY(${Math.random() * 1000 + 500}px) rotate(${Math.random() * 360}deg)`;
        iconElement.style.transition = `transform ${10 + Math.random() * 20}s linear, opacity 1s ease-in`;
      }, iconData.delay);
      
      container.appendChild(iconElement);
      
      // Remove after animation completes and add a new one
      setTimeout(() => {
        iconElement.remove();
        
        if (techIconsRef.current) {
          // Create a new icon to replace the removed one
          const newIconElement = document.createElement('div');
          newIconElement.className = `absolute opacity-0 transition-all duration-500 ease-in-out`;
          newIconElement.style.left = `${Math.random() * 100}%`;
          newIconElement.style.top = `-50px`;
          
          // Set the SVG icon
          newIconElement.innerHTML = iconData.svg;
          
          // Apply animation
          setTimeout(() => {
            newIconElement.style.opacity = '0.7';
            newIconElement.style.transform = `translateY(${Math.random() * 1000 + 500}px) rotate(${Math.random() * 360}deg)`;
            newIconElement.style.transition = `transform ${10 + Math.random() * 20}s linear, opacity 1s ease-in`;
          }, 10);
          
          container.appendChild(newIconElement);
          
          // And repeat the process
          setTimeout(() => {
            newIconElement.remove();
          }, 15000 + Math.random() * 5000);
        }
      }, 15000 + Math.random() * 5000);
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-dark-purple opacity-80">
      </div>
      
      <div ref={techIconsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow-cyan">
          <TypewriterText texts={["Hi, I'm Chaitanya", "Full-Stack Developer", "Web Developer", "React Developer"]} delay={3000} />
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
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-light-gray hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
