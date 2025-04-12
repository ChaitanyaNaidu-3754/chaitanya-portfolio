
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform built with React, Next.js, and Stripe integration for payments.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Next.js", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "react"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using Firebase.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Tailwind"],
      githubUrl: "https://github.com",
      category: "react"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization using Chart.js and OpenWeather API.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Chart.js", "API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "javascript"
    },
    {
      title: "AI Image Generator",
      description: "Application that generates images based on text prompts using OpenAI's DALL-E API.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "OpenAI", "Node.js"],
      githubUrl: "https://github.com",
      category: "ai"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application built with Flutter and Firebase.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: ["Flutter", "Firebase", "Dart"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "flutter"
    },
    {
      title: "Portfolio Website",
      description: "Modern developer portfolio website with animated UI components and responsive design.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com",
      category: "react"
    },
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const filters = [
    { id: "all", label: "All" },
    { id: "react", label: "React" },
    { id: "flutter", label: "Flutter" },
    { id: "ai", label: "AI" }
  ];
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-magenta">
            Projects
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents a unique challenge and solution.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'glass neon-border-cyan text-neon-cyan' 
                  : 'text-light-gray hover:text-white'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              className="animate-fade-in"
              // Add staggered animation delay
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 rounded-lg glass neon-border-magenta text-white hover:scale-105 transition-transform duration-300 animate-glow-pulse-magenta"
          >
            <Github className="mr-2 w-5 h-5" />
            View All Projects
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-magenta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsSection;
