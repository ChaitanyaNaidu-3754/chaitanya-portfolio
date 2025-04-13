
import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  location: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  description, 
  location,
  isFirst = false,
  isLast = false
}) => {
  return (
    <div className="relative flex items-start group">
      {/* Line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan/40 via-neon-magenta/40 to-neon-cyan/40 group-hover:from-neon-cyan group-hover:via-neon-magenta group-hover:to-neon-cyan transition-colors duration-300" 
           style={{ display: isLast ? 'none' : 'block' }}></div>
      
      {/* Dot */}
      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full glass-dark border border-neon-cyan/50 group-hover:border-neon-cyan group-hover:shadow-lg group-hover:shadow-neon-cyan/20 transition-all duration-300">
        <div className="w-3 h-3 rounded-full bg-neon-cyan group-hover:animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="ml-6 glass rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neon-cyan/10 group-hover:scale-[1.02] transform">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-dark-light text-neon-cyan mb-3">
          {date}
        </span>
        <h3 className="text-xl font-bold text-glow-cyan mb-2">{title}</h3>
        <p className="text-light-gray mb-2">{location}</p>
        <p className="text-sm text-light-gray">{description}</p>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Array<{
    date: string;
    title: string;
    description: string;
    location: string;
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
          location={item.location}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
