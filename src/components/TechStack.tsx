import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TechStack: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const techStack = [
    { 
      name: "HTML", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#E34F26]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12">
          <path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
        </svg>
      </div>
    },
    { 
      name: "CSS", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#1572B6]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12">
          <path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
        </svg>
      </div>
    },
    { 
      name: "JavaScript", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#F7DF1E]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12">
          <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>
      </div>
    },
    { 
      name: "TypeScript", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#3178C6]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-12 h-12">
          <path fill="currentColor" d="M0 200V0h400v400H0V200zm200-66.7c17.5 0 31.3.3 31.7.7.4.5 4.3 5.2 8.6 10.5l8 9.5H289.7l9.6-11.3 9.7-11.2h45l-.5.7c-.3.4-5.4 6.8-11.3 14.3l-10.7 13.5.5.5c16.5 16.7 24 36.9 22.7 61-.5 8.3-1.1 11.5-3.7 19.7-5.8 18.9-18.5 34.2-35.7 43.3-29.5 15.6-67.6 13.9-96.8-4.4-7.2-4.5-20.3-17-23-21.8l-1.7-3.1 11.8-8.6c6.5-4.8 12.1-8.6 12.4-8.6.3 0 1.9 1.9 3.6 4.3 13.7 19.2 31.1 27.8 52.4 26.1 8.9-.7 14.3-2.5 21.5-7.3 8.4-5.7 13.9-14.6 15.8-25.9 1.6-9.3-.3-20.3-4.5-26.7-4-6.1-12.2-11.6-23.2-15.5-3.4-1.2-18.8-4.8-27.9-6.5-10.7-2-16.5-3.5-24.5-6.1-17.1-5.8-30.7-14.2-40.6-25.2-5-5.5-11.8-17.1-13.9-23.6-6.9-21.5-5.5-46.9 3.8-66 12.7-26.3 41.8-42.9 75.1-43ZM250 110v30h-50l-.1-28.8L199.8 80h25.1l25.1.1V110Zm-90 60v20H80v-40h80v20Z"/>
        </svg>
      </div>
    },
    { 
      name: "React", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#61DAFB]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.1 40.1 61.3 96.3 79.9 4.5 1.5 9.1 2.9 13.8 4.2-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.6-67.2 10.6-1.9-7.8-3.5-15.8-4.7-24.1-9.4-49.9-1-86.3 13.8-95.6zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
        </svg>
      </div>
    },
    { 
      name: "Next.js", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 394" className="w-12 h-12">
          <path fill="currentColor" d="M261.919 0.0330722H330.547V269.618H261.919V0.0330722Z"/>
          <path fill="currentColor" d="M330.547 0.0330722L330.547 269.618L394 269.618L330.547 0.0330722Z"/>
          <path fill="currentColor" d="M196.547 0.0330722L265.175 0.0330722L265.175 269.618L196.547 269.618L196.547 0.0330722Z"/>
          <path fill="currentColor" d="M196.547 0.0330722L196.547 269.618L121.978 0.0330722L196.547 0.0330722Z"/>
          <path fill="currentColor" d="M131.566 0.0330722L200.194 0.0330722L200.194 269.618L131.566 269.618L131.566 0.0330722Z"/>
          <path fill="currentColor" d="M131.566 0.0330722L200.194 269.618L67.023 269.618L131.566 0.0330722Z"/>
          <path fill="currentColor" d="M63.9736 0.0330722L132.602 0.0330722L132.602 269.618L63.9736 269.618L63.9736 0.0330722Z"/>
          <path fill="currentColor" d="M63.9736 0.0330722L63.9736 269.618L-5.14355e-05 269.618L63.9736 0.0330722Z"/>
        </svg>
      </div>
    },
    { 
      name: "Node.js", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#68A063]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12">
          <path fill="currentColor" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
        </svg>
      </div>
    },
    { 
      name: "Express", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#000000]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-12 h-12">
          <path fill="currentColor" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.975-5.291c.252-1.32 1.023-1.826 2.19-1.826 1.118 0 1.96.425 1.737 1.904l-.984 5.136c-.246 1.347-.802 1.8-2.092 1.8-1.247 0-1.979-.526-1.828-1.723zm1.439-5.345c.058-.346-.023-.388-.36-.388h-.36l.145-.83h1.45c.627 0 .855.182.729.953l-.966 5.113c-.09.5.137.563.407.563h.376l-.155.955H1.306c-.527 0-.796-.156-.67-.815l.812-5.55zm4.452-1.458l-.818 4.64a39.96 39.96 0 0 0-.248 1.597c-.06.322.004.595.249.595.245 0 .454-.157.537-.49a32.5 32.5 0 0 0 .303-1.703l.8-4.64h1.428l-.924 5.197c-.209 1.188-.7 1.735-1.95 1.735-1.03 0-1.59-.434-1.432-1.4a82.76 82.76 0 0 1 .362-1.86l.8-3.673h1.894z"/>
        </svg>
      </div>
    },
    { 
      name: "Tailwind CSS", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#38B2AC]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-12 h-12">
          <path fill="currentColor" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"/>
        </svg>
      </div>
    },
    { 
      name: "Firebase", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#FFCA28]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-12 h-12">
          <path fill="currentColor" d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"/>
          <path fill="currentColor" d="M13.445 8.543l2.972 5.995-11.97 11.135z"/>
          <path fill="currentColor" d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"/>
          <path fill="currentColor" d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"/>
        </svg>
      </div>
    },
    { 
      name: "Git", 
      icon: <div className="flex items-center justify-center w-12 h-12 text-[#F05032]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-12 h-12">
          <path fill="currentColor" d="M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915"/>
        </svg>
      </div>
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 bg-dark-light min-h-screen" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow-cyan">My Tech Stack</h2>
          <p className="text-center text-light-gray mb-16 max-w-3xl mx-auto">
            I specialize in modern web technologies. Here are the key technologies I work with:
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-dark p-6 rounded-lg shadow-lg hover:shadow-cyan neon-border-faint transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {tech.icon}
                <h3 className="mt-4 font-semibold text-lg">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
