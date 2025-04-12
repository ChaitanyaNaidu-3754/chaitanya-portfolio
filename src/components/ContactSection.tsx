
import React, { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import { Github, Linkedin, Mail, CheckCircle, FileText } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { ElegantShape } from './ui/component';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form (simple validation for demo)
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    // For demo purposes we'll just show a success message
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formState);
    setFormSubmitted(true);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset the submitted state after showing success animation
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-cyan">
            Let's Connect
          </h2>
          <p className="text-light-gray max-w-xl mx-auto">
            Have a project in mind or want to chat? Drop me a message and I'll get back to you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-3 glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-glow-magenta">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6 relative">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-light border border-dark-gray rounded-lg focus:neon-border-cyan focus:outline-none focus:box-glow-cyan transition-shadow"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="mb-6 relative">
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-light border border-dark-gray rounded-lg focus:neon-border-cyan focus:outline-none focus:box-glow-cyan transition-shadow"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="mb-6 relative">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-light border border-dark-gray rounded-lg focus:neon-border-cyan focus:outline-none focus:box-glow-cyan transition-shadow"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="relative w-full py-3 px-6 rounded-lg glass-dark text-white neon-border-magenta hover:box-glow-magenta transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {formSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 animate-pulse" />
                      Message Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="glass p-8 rounded-xl mb-6 flex-1">
              <h3 className="text-2xl font-bold mb-6 text-glow-cyan">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-neon-cyan" />
                  <a href="mailto:chaitu.3754@gmail.com" className="text-light-gray hover-underline-animation">
                    chaitu.3754@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center mt-4">
                  <FileText className="w-5 h-5 mr-3 text-neon-magenta" />
                  <a 
                    href="https://drive.google.com/file/d/1yHALtQHvSVYPB0QTY-zvnPqSGq3B_ott/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-light-gray hover-underline-animation"
                  >
                    View Resume
                  </a>
                </div>
                
                <p className="text-light-gray mt-4">
                  Currently accepting new projects and collaborations. 
                  Feel free to reach out for any inquiries!
                </p>
              </div>
            </div>
            
            {/* Social links */}
            <div className="glass p-8 rounded-xl flex-1">
              <h3 className="text-2xl font-bold mb-6 text-glow-cyan">Social Links</h3>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://github.com/ChaitanyaNaidu-3754" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 rounded-lg glass-dark hover:neon-border-cyan transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 mr-3 text-light-gray group-hover:text-neon-cyan transition-colors" />
                  <span className="text-light-gray group-hover:text-white transition-colors">GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 rounded-lg glass-dark hover:neon-border-magenta transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 mr-3 text-light-gray group-hover:text-neon-magenta transition-colors" />
                  <span className="text-light-gray group-hover:text-white transition-colors">LinkedIn</span>
                </a>
                
                <a 
                  href="https://drive.google.com/file/d/1yHALtQHvSVYPB0QTY-zvnPqSGq3B_ott/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 rounded-lg glass-dark hover:neon-border-magenta transition-all duration-300 group"
                >
                  <FileText className="w-5 h-5 mr-3 text-light-gray group-hover:text-neon-magenta transition-colors" />
                  <span className="text-light-gray group-hover:text-white transition-colors">Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Particle background */}
      <ParticleBackground density={30} color="mixed" className="opacity-30" />
      
      {/* Add elegant shapes */}
      <ElegantShape
        delay={0.2}
        width={400}
        height={100}
        rotate={15}
        gradient="from-neon-cyan/[0.05]"
        className="left-[5%] top-[10%]"
      />
      
      <ElegantShape
        delay={0.4}
        width={350}
        height={90}
        rotate={-10}
        gradient="from-neon-magenta/[0.05]"
        className="right-[5%] bottom-[15%]"
      />
    </section>
  );
};

export default ContactSection;
