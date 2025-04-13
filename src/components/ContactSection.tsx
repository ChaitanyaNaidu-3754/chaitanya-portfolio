
import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { ElegantShape } from './ui/component';

const ContactSection: React.FC = () => {
  const email = "chaitu.3754@gmail.com";
  const resumeUrl = "https://drive.google.com/file/d/1yHALtQHvSVYPB0QTY-zvnPqSGq3B_ott/view?usp=sharing";
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-magenta">
            Contact Me
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Interested in working together? Let's connect and discuss your project!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        {/* Contact container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="glass rounded-xl p-8 animate-fade-in-left">
            <h3 className="text-xl font-bold mb-6 text-glow-cyan">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-light-gray mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg bg-dark-light border border-dark-gray text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-light-gray mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg bg-dark-light border border-dark-gray text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-light-gray mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 rounded-lg bg-dark-light border border-dark-gray text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-dark-light neon-border-cyan text-white hover:scale-105 transition-transform duration-300 animate-glow-pulse"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col justify-between animate-fade-in-right">
            <div className="glass rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-glow-cyan">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center mr-4">
                    <Mail className="text-neon-magenta" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-light-gray">Email</p>
                    <a href={`mailto:${email}`} className="text-white hover:text-neon-cyan transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center mr-4">
                    <FileText className="text-neon-cyan" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-light-gray">Resume</p>
                    <a 
                      href={resumeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-neon-cyan transition-colors"
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-glow-cyan">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/ChaitanyaNaidu-3754" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a 
                  href={`mailto:${email}`}
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Mail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-magenta/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        
        {/* Add elegant shapes */}
        <ElegantShape
          delay={0.3}
          width={400}
          height={100}
          rotate={15}
          gradient="from-neon-cyan/[0.05]"
          className="right-[5%] top-[10%]"
        />
        
        <ElegantShape
          delay={0.5}
          width={350}
          height={90}
          rotate={-10}
          gradient="from-neon-magenta/[0.05]"
          className="left-[5%] bottom-[10%]"
        />
      </div>
    </section>
  );
};

export default ContactSection;
