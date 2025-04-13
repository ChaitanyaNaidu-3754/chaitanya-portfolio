
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';
import { ElegantShape } from './ui/component';

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
        
        const allRepos = await response.json();
        
        // The specific repositories we want to display
        const targetRepoNames = [
          'ai_interview_prep', 
          'employee_management_system-reactjs', 
          'EDA-Exploratory-Data-Analysis-on-Dataset', 
          'Task-Management-System-with-Flask-Backend', 
          'ShoppingCartApp-ReactJS'
        ];
        
        // Filter the repos to get only the ones we want
        const filteredRepos = allRepos.filter((repo: any) => 
          targetRepoNames.includes(repo.name)
        );
        
        // Data for the specific repositories with custom descriptions and images
        const projectData = [
          {
            repoName: 'ai_interview_prep',
            description: 'A smart interview preparation platform that uses AI to provide personalized feedback on responses.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'AI', 'Python']
          },
          {
            repoName: 'employee_management_system-reactjs',
            description: 'Comprehensive employee management system with analytics dashboard and performance tracking.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Firebase', 'Chart.js']
          },
          {
            repoName: 'EDA-Exploratory-Data-Analysis-on-Dataset',
            description: 'Interactive data analysis tool that visualizes complex datasets for easier insights extraction.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            tags: ['Python', 'Pandas', 'Matplotlib']
          },
          {
            repoName: 'Task-Management-System-with-Flask-Backend',
            description: 'Intuitive task management application with real-time updates and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
            tags: ['Flask', 'Python', 'JavaScript']
          },
          {
            repoName: 'ShoppingCartApp-ReactJS',
            description: 'Modern e-commerce platform with seamless checkout experience and real-time inventory management.',
            image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Redux', 'NodeJS']
          }
        ];
        
        // Map repositories to project format with custom data
        const mappedProjects = filteredRepos.map((repo: any) => {
          // Find the custom data for this repo
          const customData = projectData.find(p => p.repoName === repo.name);
          
          return {
            title: repo.name, // Keep original GitHub repo name
            description: customData?.description || repo.description || `A project repository on GitHub: ${repo.name}`,
            image: customData?.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
            tags: customData?.tags || repo.topics || ["GitHub", "Repository"],
            githubUrl: repo.html_url,
            liveUrl: repo.homepage,
          };
        });
        
        setProjects(mappedProjects);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load projects. Using fallback data.');
        
        // Fallback data with original repo names
        const fallbackProjects = [
          {
            title: "ai_interview_prep",
            description: "A smart interview preparation platform that uses AI to provide personalized feedback on responses.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "AI", "Python"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754/ai_interview_prep"
          },
          {
            title: "employee_management_system-reactjs",
            description: "Comprehensive employee management system with analytics dashboard and performance tracking.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Firebase", "Chart.js"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754/employee_management_system-reactjs"
          },
          {
            title: "EDA-Exploratory-Data-Analysis-on-Dataset",
            description: "Interactive data analysis tool that visualizes complex datasets for easier insights extraction.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            tags: ["Python", "Pandas", "Matplotlib"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754/EDA-Exploratory-Data-Analysis-on-Dataset"
          },
          {
            title: "Task-Management-System-with-Flask-Backend",
            description: "Intuitive task management application with real-time updates and team collaboration features.",
            image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
            tags: ["Flask", "Python", "JavaScript"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754/Task-Management-System-with-Flask-Backend"
          },
          {
            title: "ShoppingCartApp-ReactJS",
            description: "Modern e-commerce platform with seamless checkout experience and real-time inventory management.",
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Redux", "NodeJS"],
            githubUrl: "https://github.com/ChaitanyaNaidu-3754/ShoppingCartApp-ReactJS"
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
      
      {/* Add elegant shapes */}
      <ElegantShape
        delay={0.2}
        width={400}
        height={100}
        rotate={20}
        gradient="from-neon-cyan/[0.05]"
        className="right-[5%] top-[10%]"
      />
      
      <ElegantShape
        delay={0.4}
        width={350}
        height={90}
        rotate={-15}
        gradient="from-neon-magenta/[0.05]"
        className="left-[5%] bottom-[10%]"
      />
    </section>
  );
};

export default ProjectsSection;
