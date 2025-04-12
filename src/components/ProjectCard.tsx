
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  className?: string;
  style?: React.CSSProperties; // Add style prop to the interface
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  className,
  style // Accept the style prop
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass rounded-lg overflow-hidden transition-all duration-300",
        "transform perspective-1000 group",
        isHovered ? "scale-[1.02] neon-border" : "scale-100",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? "perspective(1000px) rotateX(5deg) rotateY(5deg)" 
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ...style // Spread the additional style props
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-50" />
      </div>
      
      <div className="p-5">
        <h3 className={`text-xl font-bold mb-2 ${isHovered ? 'text-glow-cyan' : ''}`}>
          {title}
        </h3>
        
        <p className="text-light-gray text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full glass-dark text-neon-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-light-gray hover:text-neon-cyan transition-colors duration-300"
            aria-label="View GitHub repository"
          >
            <Github className="w-5 h-5" />
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-gray hover:text-neon-magenta transition-colors duration-300"
              aria-label="Visit live site"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
