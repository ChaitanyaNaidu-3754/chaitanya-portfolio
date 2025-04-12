
import React, { useRef, useEffect } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  color?: 'cyan' | 'magenta' | 'mixed';
  density?: number;
  speed?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = "",
  color = 'mixed',
  density = 50,
  speed = 0.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create particles
    const particleCount = Math.floor((canvas.width * canvas.height) / (20000 / density));
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];
    
    for (let i = 0; i < particleCount; i++) {
      let particleColor: string;
      
      if (color === 'cyan') {
        particleColor = `rgba(0, ${155 + Math.random() * 100}, ${155 + Math.random() * 100}, ${0.3 + Math.random() * 0.5})`;
      } else if (color === 'magenta') {
        particleColor = `rgba(${155 + Math.random() * 100}, 0, ${155 + Math.random() * 100}, ${0.3 + Math.random() * 0.5})`;
      } else { // mixed
        particleColor = Math.random() > 0.5 
          ? `rgba(0, ${155 + Math.random() * 100}, ${155 + Math.random() * 100}, ${0.3 + Math.random() * 0.5})`
          : `rgba(${155 + Math.random() * 100}, 0, ${155 + Math.random() * 100}, ${0.3 + Math.random() * 0.5})`;
      }
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: particleColor
      });
    }
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundaries
        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [color, density, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full -z-10 ${className}`}
    />
  );
};

export default ParticleBackground;
