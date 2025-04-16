import React from 'react';
import TypewriterText from './TypewriterText';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    { name: "DataBase", rating: 4 },
    { name: "Full Stack Development", rating: 4 },
    { name: "AI Integration", rating: 4 }
  ];
  
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Shaping <TypewriterText 
              texts={["💡 ideas", "🚀 innovation", "🎨 creativity", "👁️ vision"]} 
              className="text-glow-cyan inline-block"
            /> into Real Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="glass rounded-xl p-6 animate-fade-in-left relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
            
            <div className="relative z-10 mt-6">
              <h4 className="text-xl font-semibold mb-4 text-glow-magenta">My Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-light-gray">{skill.name}</span>
                      <span className="text-neon-cyan">{skill.rating}/5</span>
                    </div>
                    <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass rounded-xl p-6 animate-fade-in-right relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-glow-magenta">My Journey</h3>
            
            <div className="relative pl-8 border-l border-neon-cyan">
              <div className="mb-8 relative">
                <div className="absolute -left-4 w-8 h-8 rounded-full bg-dark flex items-center justify-center border-2 border-neon-cyan">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-neon-cyan">Freelancer</h4>
                  <span className="text-sm text-light-gray">2025 - Present</span>
                  <p className="mt-2 text-sm text-light-gray">
                    Motivated by a passion for creating elegant web solutions, I provide comprehensive web development services, focusing on delivering value and quality to clients worldwide.
                  </p>
                </div>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-4 w-8 h-8 rounded-full bg-dark flex items-center justify-center border-2 border-neon-magenta">
                  <div className="w-3 h-3 bg-neon-magenta rounded-full"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-neon-magenta">Bachelor in Technology</h4>
                  <span className="text-sm text-light-gray">2021 - 2025, Hyderabad</span>
                  <p className="mt-2 text-sm text-light-gray">
                    Completed my Computer Science Engineering degree with specialization in AI and ML, acquiring strong foundations in modern software development principles.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 w-8 h-8 rounded-full bg-dark flex items-center justify-center border-2 border-neon-cyan">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-neon-cyan">Intermediate</h4>
                  <span className="text-sm text-light-gray">2019 - 2021, Hyderabad</span>
                  <p className="mt-2 text-sm text-light-gray">
                    Completed my intermediate education with 92% in Physics, Chemistry, and Mathematics (PCM), developing a strong analytical foundation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
          {qualities.map((quality, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-magenta/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
