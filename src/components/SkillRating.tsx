
import React from 'react';

interface Skill {
  name: string;
  rating: number;
}

interface SkillRatingProps {
  skills: Skill[];
  maxRating?: number;
}

const SkillRating: React.FC<SkillRatingProps> = ({ skills, maxRating = 5 }) => {
  return (
    <div className="space-y-4 py-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-white font-medium">{skill.name}</span>
            <span className="text-xs text-light-gray">{skill.rating}/{maxRating}</span>
          </div>
          <div className="w-full h-3 bg-dark-light rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
              style={{ width: `${(skill.rating / maxRating) * 100}%` }}
            >
              <div className="absolute inset-0 animate-pulse-slow opacity-50 bg-gradient-to-r from-neon-cyan/50 to-neon-magenta/50 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillRating;
