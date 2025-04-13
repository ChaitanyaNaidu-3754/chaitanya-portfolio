
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
    <section id="journey" className="py-20 relative">
      <div className="mx-auto">
        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-glow-cyan">
            My Journey
          </h2>
          <p className="text-light-gray">
            The path I've taken in education and professional development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mt-4"></div>
        </div>
        
        {/* Timeline */}
        <div className="animate-fade-in">
          <Timeline items={journeyItems} />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
