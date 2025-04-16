import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  
  const targetRepos = [
    "ai_interview_prep", 
    "employee_management_system-reactjs", 
    "EDA-Exploratory-Data-Analysis-on-Dataset", 
    "Task-Management-System-with-Flask-Backend", 
    "ShoppingCartApp-ReactJS"
  ];
  
  const projectImages = {
    "ai_interview_prep": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    "employee_management_system-reactjs": "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    "EDA-Exploratory-Data-Analysis-on-Dataset": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "Task-Management-System-with-Flask-Backend": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    "ShoppingCartApp-ReactJS": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
  };
  
  const projectDescriptions = {
    "ai_interview_prep": "AI-powered interview preparation platform with practice questions and feedback",
    "employee_management_system-reactjs": "React-based employee management system with comprehensive HR features",
    "EDA-Exploratory-Data-Analysis-on-Dataset": "Data analysis project exploring patterns and insights in various datasets",
    "Task-Management-System-with-Flask-Backend": "Task management application with Flask backend and responsive frontend",
    "ShoppingCartApp-ReactJS": "E-commerce shopping cart application built with React and state management"
  };
  
  const projectTags = {
    "ai_interview_prep": ["Python", "Machine Learning", "React", "NLP"],
    "employee_management_system-reactjs": ["React", "Node.js", "MongoDB", "Express"],
    "EDA-Exploratory-Data-Analysis-on-Dataset": ["Python", "Pandas", "Matplotlib", "Data Science"],
    "Task-Management-System-with-Flask-Backend": ["Flask", "Python", "SQLAlchemy", "React"],
    "ShoppingCartApp-ReactJS": ["React", "Context API", "CSS", "JavaScript"]
  };
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ChaitanyaNaidu-3754/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const repos: GithubRepo[] = await response.json();
        
        const filteredRepos = repos.filter(repo => 
          targetRepos.includes(repo.name)
        );
        
        if (filteredRepos.length < targetRepos.length) {
          const projectData = targetRepos.map(repoName => {
            const matchedRepo = repos.find(r => r.name === repoName);
            
            return {
              title: repoName,
              description: projectDescriptions[repoName as keyof typeof projectDescriptions] || 
                           (matchedRepo?.description || `${repoName} - GitHub repository`),
              image: projectImages[repoName as keyof typeof projectImages] || 
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
              tags: projectTags[repoName as keyof typeof projectTags] || ["GitHub", "Repository"],
              githubUrl: matchedRepo?.html_url || `https://github.com/ChaitanyaNaidu-3754/${repoName}`,
              liveUrl: matchedRepo?.homepage || null,
            };
          });
          
          setProjects(projectData);
        } else {
          const projectData = filteredRepos.map(repo => ({
            title: repo.name,
            description: projectDescriptions[repo.name as keyof typeof projectDescriptions] || 
                         (repo.description || `${repo.name} - GitHub repository`),
            image: projectImages[repo.name as keyof typeof projectImages] || 
                   "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
            tags: projectTags[repo.name as keyof typeof projectTags] || 
                  (repo.topics.length > 0 ? repo.topics : ["GitHub", "Repository"]),
            githubUrl: repo.html_url,
            liveUrl: repo.homepage,
          }));
          
          setProjects(projectData);
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load projects. Using fallback data.');
        
        const fallbackProjects = targetRepos.map(repoName => ({
          title: repoName,
          description: projectDescriptions[repoName as keyof typeof projectDescriptions] || 
                       `${repoName} - GitHub repository`,
          image: projectImages[repoName as keyof typeof projectImages] || 
                 "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
          tags: projectTags[repoName as keyof typeof projectTags] || ["GitHub", "Repository"],
          githubUrl: `https://github.com/ChaitanyaNaidu-3754/${repoName}`,
        }));
        
        setProjects(fallbackProjects);
        setIsLoading(false);
      }
    };
    
    fetchGithubRepos();
  }, []);
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-magenta">
            Projects
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents a unique challenge and solution.
            {error && <span className="block mt-2 text-neon-cyan">{error}</span>}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {isLoading ? (
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
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              </motion.div>
            ))
          )}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://github.com/ChaitanyaNaidu-3754" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 rounded-lg glass neon-border-magenta text-white hover:scale-105 transition-transform duration-300 animate-glow-pulse-magenta"
          >
            <Github className="mr-2 w-5 h-5" />
            View All Projects
          </a>
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-magenta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsSection;
