
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  texts, 
  delay = 2000, 
  className = ""
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Current text being processed
      const fullText = texts[index];
      
      // If deleting
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(50); // Faster when deleting
      } else {
        // If adding
        setText(fullText.substring(0, text.length + 1));
        setSpeed(100); // Normal speed when adding
      }
      
      // When text is fully typed
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } 
      // When text is fully deleted
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, texts, delay, speed]);
  
  return (
    <span className={`${className} inline-block`}>
      {text}
      <span className="animate-typewriter-blink">|</span>
    </span>
  );
};

export default TypewriterText;
