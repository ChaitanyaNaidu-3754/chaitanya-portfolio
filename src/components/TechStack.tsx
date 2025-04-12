
import React, { useRef, useEffect } from 'react';

const TechStack: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const techStack = [
    { name: "HTML", experience: "4 years" },
    { name: "CSS", experience: "4 years" },
    { name: "JavaScript", experience: "3 years" },
    { name: "TypeScript", experience: "2 years" },
    { name: "React", experience: "3 years" },
    { name: "Next.js", experience: "2 years" },
    { name: "Node.js", experience: "2 years" },
    { name: "Express", experience: "2 years" },
    { name: "MongoDB", experience: "2 years" },
    { name: "Firebase", experience: "2 years" },
    { name: "AWS", experience: "1 year" },
    { name: "Google Cloud", experience: "1 year" },
    { name: "Tailwind CSS", experience: "2 years" },
    { name: "Git", experience: "3 years" },
    { name: "Docker", experience: "1 year" },
  ];
  
  // Auto-scrolling carousel
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const scrollSpeed = 0.5;
    let animationFrameId: number;
    let isHovered = false;
    const carousel = carouselRef.current;
    
    carousel.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
      isHovered = false;
    });
    
    const scroll = () => {
      if (!isHovered && carousel) {
        carousel.scrollLeft += scrollSpeed;
        
        // Reset scroll position when reached the end
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-dark-light">
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
              className="flex-none w-32 h-32 glass rounded-xl flex flex-col items-center justify-center p-4 group relative"
            >
              <div className="text-4xl mb-2 group-hover:text-glow-cyan transition-all duration-300 transform group-hover:scale-110">
                {tech.name.substring(0, 2)}
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
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-glow-magenta">My Technical Approach</h3>
          <p className="text-light-gray mb-4">
            I approach each project with a focus on creating scalable, maintainable solutions 
            that leverage the best tools for the job. My experience spans from front-end 
            development to back-end systems and cloud infrastructure.
          </p>
          <p className="text-light-gray">
            I'm constantly learning and adapting to new technologies, with a particular interest 
            in performance optimization, modern JavaScript frameworks, and cloud-native 
            architectures.
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgNHYyaC0ydi0yaDJ6bTIgMHYyaC0ydi0yaDJ6bS02IDBoMnYyaC0ydi0yem0yLTR2MmgtMnYtMmgyem0yLTR2Mmgtdi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
    </section>
  );
};

export default TechStack;
