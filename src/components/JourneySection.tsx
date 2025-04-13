
import React from 'react';
import Timeline from './TimeLine';
import { ElegantShape } from './ui/component';

const JourneySection: React.FC = () => {
  const journeyItems = [
    {
      date: "2025 - Present",
      title: "Freelancer",
      description: "Providing web development services with a strong focus on creating visually stunning and functional websites that meet client needs. Motivated by my passion for building innovative digital experiences.",
      location: "Remote"
    },
    {
      date: "2021 - 2025",
      title: "Bachelor in Technology",
      description: "Computer Science Engineering with specialization in AI and ML. Exploring the cutting-edge intersection of software development and artificial intelligence.",
      location: "Hyderabad"
    },
    {
      date: "2019 - 2021",
      title: "Intermediate",
      description: "Completed my intermediate education with Physics, Chemistry, and Mathematics (PCM) with 92% marks.",
      location: "Hyderabad"
    }
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-cyan">
            My Journey
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            The path I've taken in education and professional development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        {/* Timeline */}
        <div className="animate-fade-in">
          <Timeline items={journeyItems} />
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-magenta/5 rounded-full blur-3xl"></div>
      
      {/* Add elegant shapes */}
      <ElegantShape
        delay={0.2}
        width={300}
        height={80}
        rotate={15}
        gradient="from-neon-cyan/[0.05]"
        className="right-[10%] top-[20%]"
      />
      
      <ElegantShape
        delay={0.4}
        width={250}
        height={70}
        rotate={-10}
        gradient="from-neon-magenta/[0.05]"
        className="left-[10%] bottom-[20%]"
      />
    </section>
  );
};

export default JourneySection;
