
import React from 'react';
import TypewriterText from './TypewriterText';
import { CheckCircle, Clock, MessageSquare, Star, StarHalf, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { ElegantShape } from './ui/component';

const AboutSection: React.FC = () => {
  const qualities = [
    {
      title: "Quality Focus",
      description: "Delivering high-quality results while maintaining attention to every detail.",
      icon: <CheckCircle className="w-10 h-10 text-neon-cyan" />
    },
    {
      title: "Reliable Communication",
      description: "Keeping you updated at every step to ensure transparency and clarity.",
      icon: <MessageSquare className="w-10 h-10 text-neon-magenta" />
    },
    {
      title: "On-Time Delivery",
      description: "Making sure projects are completed on schedule, with quality & attention to detail.",
      icon: <Clock className="w-10 h-10 text-neon-cyan" />
    }
  ];
  
  const skills = [
    { name: "Frontend Development", rating: 4 },
    { name: "UX/UI Design", rating: 4 },
    { name: "Database", rating: 4 },
    { name: "Full Stack Development", rating: 4 },
    { name: "AI Integration", rating: 4 }
  ];
  
  // Function to render skill rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="w-4 h-4 text-neon-cyan" fill="#00FFFF" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalf key={i} className="w-4 h-4 text-neon-cyan" fill="#00FFFF" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-dark-gray" />);
      }
    }
    
    return stars;
  };
  
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Shaping <TypewriterText 
              texts={["💡 ideas", "🚀 innovation", "🎨 creativity", "👁️ vision"]} 
              className="text-glow-cyan inline-block"
            /> into Real Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"></div>
        </div>
        
        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About text */}
          <div className="glass rounded-xl p-6 animate-fade-in-left relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-glow-cyan">Who I Am</h3>
            <p className="text-light-gray mb-4 relative z-10">
              I am a passionate Full Stack Developer with expertise in creating responsive, 
              user-friendly applications. With a background in both design and development, 
              I bring a unique perspective to every project.
            </p>
            <p className="text-light-gray mb-4 relative z-10">
              My journey in the tech world began with a curiosity for how things work, which 
              evolved into a career building solutions that solve real problems.
            </p>
            <p className="text-light-gray mb-6 relative z-10">
              I specialize in modern JavaScript frameworks like React, along with expertise in 
              cloud technologies and UI/UX design principles.
            </p>
            
            {/* Skill rating bars */}
            <div className="space-y-4 relative z-10">
              <h4 className="text-lg font-semibold text-neon-magenta mb-2">Skills</h4>
              
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-light-gray">{skill.name}</span>
                    <div className="flex">{renderStars(skill.rating)}</div>
                  </div>
                  <div className="h-1.5 bg-dark-gray rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full"
                      style={{ width: `${(skill.rating / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cool background animation */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-magenta/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
            
            {/* Add elegant shapes for additional effects */}
            <ElegantShape
              delay={0.2}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-neon-cyan/[0.05]"
              className="right-[-5%] bottom-[5%]"
            />
          </div>
          
          {/* Timeline */}
          <div className="glass rounded-xl p-6 animate-fade-in-right relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-glow-magenta">My Journey</h3>
            
            <div className="relative pl-8 border-l-2 border-gradient-to-b from-neon-cyan via-neon-magenta to-neon-cyan">
              {/* Timeline item 1 - Freelancer */}
              <div className="mb-8 relative group">
                <div className="absolute -left-[25px] w-10 h-10 flex items-center justify-center rounded-full bg-dark border-2 border-neon-cyan box-glow-cyan z-10">
                  <Briefcase className="w-5 h-5 text-neon-cyan" />
                </div>
                <div className="glass-dark rounded-lg p-4 transform transition-all duration-300 group-hover:translate-x-2 group-hover:neon-border-cyan group-hover:box-glow-cyan">
                  <h4 className="text-lg font-semibold flex items-center">
                    <span className="text-glow-cyan">Freelancer</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-neon-cyan/10 text-xs text-neon-cyan">2025 - Present</span>
                  </h4>
                  <p className="mt-2 text-light-gray">
                    Motivated by a passion for creating elegant web solutions, I provide comprehensive web development services, focusing on delivering value and quality to clients worldwide.
                  </p>
                </div>
                
                {/* Connecting glow effect */}
                <div className="absolute -left-[19px] top-[40px] w-0.5 h-8 bg-gradient-to-b from-neon-cyan to-neon-magenta opacity-80"></div>
              </div>
              
              {/* Timeline item 2 - Bachelor's */}
              <div className="mb-8 relative group">
                <div className="absolute -left-[25px] w-10 h-10 flex items-center justify-center rounded-full bg-dark border-2 border-neon-magenta box-glow-magenta z-10">
                  <GraduationCap className="w-5 h-5 text-neon-magenta" />
                </div>
                <div className="glass-dark rounded-lg p-4 transform transition-all duration-300 group-hover:translate-x-2 group-hover:neon-border-magenta group-hover:box-glow-magenta">
                  <h4 className="text-lg font-semibold flex items-center">
                    <span className="text-glow-magenta">Bachelor in Technology</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-neon-magenta/10 text-xs text-neon-magenta">2021 - 2025</span>
                  </h4>
                  <span className="text-sm text-light-gray">Hyderabad</span>
                  <p className="mt-2 text-light-gray">
                    Completed my Computer Science Engineering degree with specialization in AI and ML, acquiring strong foundations in modern software development principles.
                  </p>
                </div>
                
                {/* Connecting glow effect */}
                <div className="absolute -left-[19px] top-[40px] w-0.5 h-8 bg-gradient-to-b from-neon-magenta to-neon-cyan opacity-80"></div>
              </div>
              
              {/* Timeline item 3 - Intermediate */}
              <div className="relative group">
                <div className="absolute -left-[25px] w-10 h-10 flex items-center justify-center rounded-full bg-dark border-2 border-neon-cyan box-glow-cyan z-10">
                  <Calendar className="w-5 h-5 text-neon-cyan" />
                </div>
                <div className="glass-dark rounded-lg p-4 transform transition-all duration-300 group-hover:translate-x-2 group-hover:neon-border-cyan group-hover:box-glow-cyan">
                  <h4 className="text-lg font-semibold flex items-center">
                    <span className="text-glow-cyan">Intermediate</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-neon-cyan/10 text-xs text-neon-cyan">2019 - 2021</span>
                  </h4>
                  <span className="text-sm text-light-gray">Hyderabad</span>
                  <p className="mt-2 text-light-gray">
                    Completed my intermediate education with 92% in Physics, Chemistry, and Mathematics (PCM), developing a strong analytical foundation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cool background animation */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-neon-magenta/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Add elegant shapes for additional effects */}
            <ElegantShape
              delay={0.4}
              width={250}
              height={70}
              rotate={15}
              gradient="from-neon-magenta/[0.05]"
              className="left-[-5%] top-[10%]"
            />
          </div>
        </div>
        
        {/* Quality cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualities.map((quality, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:neon-border group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {quality.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-glow-cyan">
                  {quality.title}
                </h3>
                <p className="text-light-gray text-sm">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-magenta/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
