
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';

interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ChaitanyaNaidu-3754/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const repos: GithubRepo[] = await response.json();
        
        // Get image placeholders for the repos
        const images = [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
        ];
        
        // Map repositories to project format
        const projectData = repos.slice(0, 5).map((repo, index) => ({
          title: repo.name,
          description: repo.description || `A project repository on GitHub: ${repo.name}`,
          image: images[index % images.length],
          tags: repo.topics.length > 0 ? repo.topics : ["GitHub", "Repository"],
          githubUrl: repo.html_url,
          liveUrl: repo.homepage,
        }));
        
        setProjects(projectData);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load projects. Using fallback data.');
        
        // Fallback data
        const fallbackProjects = [
          {
            title: "E-Commerce Platform",
            description: "A fully responsive e-commerce platform built with React, Next.js, and Stripe integration for payments.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Next.js", "Stripe"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754",
            liveUrl: "https://example.com"
          },
          {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates using Firebase.",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Firebase", "Tailwind"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754"
          },
          {
            title: "Weather Dashboard",
            description: "Interactive weather dashboard with data visualization using Chart.js and OpenWeather API.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
            tags: ["JavaScript", "Chart.js", "API"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754",
            liveUrl: "https://example.com"
          },
          {
            title: "AI Image Generator",
            description: "Application that generates images based on text prompts using OpenAI's DALL-E API.",
            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "OpenAI", "Node.js"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754"
          },
          {
            title: "Mobile Fitness App",
            description: "Cross-platform fitness tracking application built with Flutter and Firebase.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            tags: ["Flutter", "Firebase", "Dart"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754"
          }
        ];
        
        setProjects(fallbackProjects);
        setIsLoading(false);
      }
    };
    
    fetchGithubRepos();
  }, []);
  
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
            {error && <span className="block mt-2 text-neon-cyan">{error}</span>}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="glass rounded-lg h-80 animate-pulse">
                <div className="h-48 bg-dark-gray rounded-t-lg"></div>
                <div className="p-5">
                  <div className="h-4 bg-dark-gray rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-dark-gray rounded w-full mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-dark-gray rounded-full"></div>
                    <div className="h-6 w-16 bg-dark-gray rounded-full"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))
          )}
        </div>
        
        {/* View all projects button */}
        <div className="text-center">
          <a 
            href="https://github.com/ChaitanyaNaidu-3754" 
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
