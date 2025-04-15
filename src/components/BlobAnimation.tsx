
import React from 'react';

const BlobAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neon-cyan/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-neon-magenta/20 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/2 w-72 h-72 bg-neon-blue/20 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default BlobAnimation;
