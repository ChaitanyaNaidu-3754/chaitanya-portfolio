
import React, { useRef, useEffect } from 'react';
import { Code, Database, Server, Globe, FileCode, Cloud, Github } from 'lucide-react';
import { ElegantShape } from './ui/component';

interface TechIcon {
  name: string;
  icon: React.ReactNode;
  experience: string;
}

const TechStack: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const techStack: TechIcon[] = [
    { name: "HTML", icon: <FileCode className="text-[#E34F26]" />, experience: "4 years" },
    { name: "CSS", icon: <FileCode className="text-[#1572B6]" />, experience: "4 years" },
    { name: "JavaScript", icon: <Code className="text-[#F7DF1E]" />, experience: "3 years" },
    { name: "TypeScript", icon: <Code className="text-[#3178C6]" />, experience: "2 years" },
    { name: "React", icon: <Code className="text-[#61DAFB]" />, experience: "3 years" },
    { name: "Next.js", icon: <Code className="text-[#000000]" />, experience: "2 years" },
    { name: "Node.js", icon: <Server className="text-[#68A063]" />, experience: "2 years" },
    { name: "Express", icon: <Server className="text-[#FFFFFF]" />, experience: "2 years" },
    { name: "MongoDB", icon: <Database className="text-[#4DB33D]" />, experience: "2 years" },
    { name: "Firebase", icon: <Database className="text-[#FFCA28]" />, experience: "2 years" },
    { name: "AWS", icon: <Cloud className="text-[#FF9900]" />, experience: "1 year" },
    { name: "Google Cloud", icon: <Cloud className="text-[#4285F4]" />, experience: "1 year" },
    { name: "Tailwind CSS", icon: <FileCode className="text-[#38B2AC]" />, experience: "2 years" },
    { name: "Git", icon: <Github className="text-[#F05032]" />, experience: "3 years" },
    { name: "Docker", icon: <Database className="text-[#2496ED]" />, experience: "1 year" },
  ];
  
  // Smooth auto-scrolling carousel
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    let animationId: number;
    let lastTime = 0;
    let scrollPosition = 0;
    const scrollSpeed = 0.03; // pixels per millisecond - slower for smoother scrolling
    let isHovered = false;
    
    carousel.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
      isHovered = false;
    });
    
    const smoothScroll = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime;
      }
      
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      
      if (!isHovered && carousel) {
        scrollPosition += scrollSpeed * delta;
        carousel.scrollLeft = scrollPosition;
        
        // Reset scroll position when reached the end
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
          carousel.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(smoothScroll);
    };
    
    animationId = requestAnimationFrame(smoothScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-dark-light">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-cyan">
            Tech Stack
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            The technologies I work with to bring ideas to life.
            Hover over each technology to see my experience level.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        {/* Tech carousel */}
        <div 
          ref={carouselRef} 
          className="flex overflow-x-auto scrollbar-none py-8 mb-12 gap-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Double the items for infinite scroll effect */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex-none w-32 h-32 glass rounded-xl flex flex-col items-center justify-center p-4 group relative transform transition-all duration-300 hover:scale-110 hover:box-glow-cyan"
            >
              <div className="text-4xl mb-2 group-hover:text-glow-cyan transition-all duration-300 transform group-hover:scale-110">
                {tech.icon}
              </div>
              <div className="text-sm font-medium transition-colors duration-300 group-hover:text-neon-cyan">
                {tech.name}
              </div>
              
              {/* Experience tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark-light px-3 py-1 rounded-lg text-neon-cyan text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap neon-border-cyan">
                {tech.experience}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech description */}
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4 text-glow-magenta relative z-10">My Technical Approach</h3>
          <p className="text-light-gray mb-4 relative z-10">
            I approach each project with a focus on creating scalable, maintainable solutions 
            that leverage the best tools for the job. My experience spans from front-end 
            development to back-end systems and cloud infrastructure.
          </p>
          <p className="text-light-gray relative z-10">
            I'm constantly learning and adapting to new technologies, with a particular interest 
            in performance optimization, modern JavaScript frameworks, and cloud-native 
            architectures.
          </p>
          
          {/* Cool background animation */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-magenta/10 rounded-full blur-3xl animate-pulse-slow"></div>
            
            {/* Add elegant shapes */}
            <ElegantShape
              delay={0.3}
              width={300}
              height={80}
              rotate={12}
              gradient="from-neon-cyan/[0.05]"
              className="right-0 top-0"
            />
            
            <ElegantShape
              delay={0.5}
              width={250}
              height={70}
              rotate={-15}
              gradient="from-neon-magenta/[0.05]"
              className="left-0 bottom-0"
            />
            
            {/* Animated dots */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    opacity: Math.random() * 0.7 + 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgNHYyaC0ydi0yaDJ6bTIgMHYyaC0ydi0yaDJ6bS02IDBoMnYyaC0ydi0yem0yLTR2Mmgtdi0yaDJ6bTItNHYyaC12LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz+')] opacity-5"></div>
    </section>
  );
};

export default TechStack;
