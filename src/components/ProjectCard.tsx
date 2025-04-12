
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string | null;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`glass overflow-hidden rounded-xl transition-all duration-300 hover:box-glow-cyan group ${className}`}
      style={style}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        
        {/* Tags */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-dark-light/90 rounded-full text-neon-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow-cyan transition-colors">
          {title}
        </h3>
        <p className="text-light-gray text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Links */}
        <div className="flex justify-between items-center">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-light-gray hover:text-white transition-colors text-sm"
          >
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-light-gray hover:text-white transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
