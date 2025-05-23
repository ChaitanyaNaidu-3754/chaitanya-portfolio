
import React, { useEffect, useRef } from 'react';

interface TechIcon {
  id: number;
  name: string;
  svg: string;
  x: number;
  y: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
}

const FallingTechIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<TechIcon[]>([]);
  const animationRef = useRef<number | null>(null);
  
  // Initialize tech icons
  useEffect(() => {
    if (!containerRef.current) return;
    
    const techSvgs = [
      {
        name: "HTML",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="100%" height="100%">
          <path fill="#E34F26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
        </svg>`
      },
      {
        name: "JS",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100%" height="100%">
          <path fill="#F7DF1E" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>`
      },
      {
        name: "React",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
          <path fill="#61DAFB" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.1 40.1 61.3 96.3 79.9 4.5 1.5 9.1 2.9 13.8 4.2-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.6-67.2 10.6-1.9-7.8-3.5-15.8-4.7-24.1-9.4-49.9-1-86.3 13.8-95.6zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
        </svg>`
      },
      {
        name: "Flutter",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
          <path fill="#02539a" d="M 14.256 1.992 L 2.251 13.997 L 6.01 17.756 L 21.773 1.992 L 14.256 1.992 Z"/>
          <path fill="#45d1fd" d="M 14.256 11.494 L 6.01 19.74 L 9.769 23.499 L 14.256 19.012 L 21.773 11.494 L 14.256 11.494 Z"/>
        </svg>`
      },
      {
        name: "Firebase",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%">
          <path fill="#FFCA28" d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"/>
          <path fill="#FFCA28" d="M13.445 8.543l2.972 5.995-11.97 11.135z"/>
          <path fill="#FFA000" d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"/>
          <path fill="#F57F17" d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"/>
        </svg>`
      },
      {
        name: "GCloud",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M14.25 15.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm1.5 6a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5zM6.75 12.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 6a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5zM14.25 4a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 6a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5zm10.04 2.22-3.23-5.6a.75.75 0 0 0-1.02-.28l-6.75 3.9a.75.75 0 0 0 .75 1.3l6.16-3.56 3.23 5.6a.75.75 0 1 0 1.3-.75zM3.97 8.22l3.22-5.6a.75.75 0 0 1 1.03-.27l6.75 3.9a.75.75 0 0 1-.75 1.3l-6.17-3.57-3.22 5.6a.75.75 0 1 1-1.3-.74l.44-.62z"/>
        </svg>`
      }
    ];
    
    // Initialize the falling icons
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    
    const initialIcons: TechIcon[] = [];
    
    // Create multiple instances of each icon
    techSvgs.forEach((techSvg, index) => {
      for (let i = 0; i < 3; i++) {
        initialIcons.push({
          id: index * 10 + i,
          name: techSvg.name,
          svg: techSvg.svg,
          x: Math.random() * containerWidth,
          y: -100 - Math.random() * 500, // Start above the viewport
          speed: 0.5 + Math.random() * 1.5,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          size: 20 + Math.random() * 20
        });
      }
    });
    
    iconsRef.current = initialIcons;
    
    // Start animation
    const animate = () => {
      if (!containerRef.current) return;
      
      const containerHeight = containerRef.current.clientHeight;
      const containerWidth = containerRef.current.clientWidth;
      
      // Update icon positions
      iconsRef.current = iconsRef.current.map(icon => {
        const newY = icon.y + icon.speed;
        const newRotation = (icon.rotation + icon.rotationSpeed) % 360;
        
        // Reset position if icon has fallen out of view
        if (newY > containerHeight + 100) {
          return {
            ...icon,
            y: -100 - Math.random() * 200,
            x: Math.random() * containerWidth,
            rotation: newRotation
          };
        }
        
        return {
          ...icon,
          y: newY,
          rotation: newRotation
        };
      });
      
      // Render icons
      renderIcons();
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Render the icons
    const renderIcons = () => {
      if (!containerRef.current) return;
      
      // Clear previous icons
      containerRef.current.innerHTML = '';
      
      // Create and append icon elements
      iconsRef.current.forEach(icon => {
        const iconElement = document.createElement('div');
        iconElement.className = 'absolute';
        iconElement.style.left = `${icon.x}px`;
        iconElement.style.top = `${icon.y}px`;
        iconElement.style.width = `${icon.size}px`;
        iconElement.style.height = `${icon.size}px`;
        iconElement.style.transform = `rotate(${icon.rotation}deg)`;
        iconElement.style.opacity = '0.7';
        iconElement.style.transition = 'transform 0.1s linear';
        iconElement.innerHTML = icon.svg;
        
        containerRef.current?.appendChild(iconElement);
      });
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};

export default FallingTechIcons;
