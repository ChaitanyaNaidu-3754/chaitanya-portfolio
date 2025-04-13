
import React, { useRef, useEffect } from 'react';
import { ElegantShape } from './ui/component';
import SkillRating from './SkillRating';

interface TechIcon {
  name: string;
  icon: string;
  experience: string;
}

const TechStack: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const techStack: TechIcon[] = [
    { 
      name: "HTML", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#E34F26" d="M5.7 1.3L4.8 13.1H19.2L18.3 1.3H5.7zM17.2 14.9H6.8L6.2 21.9L12 23.6L17.8 21.9L17.2 14.9z"/><path fill="#EF652A" d="M12 18l-3.8-1.1l-.3-3H6.4l.5 5.9l5.1 1.5V18z"/><path fill="#EBEBEB" d="M12 9.5H8.4l-.1-1.3h3.7V6.7H6.7l.1 1.3.4 4H12V9.5z"/><path fill="#EBEBEB" d="M12 18v-2.3h-1.9l-.9-.3-.1-1.4h-1.5l.2 2.9L12 18z"/><path fill="#FFF" d="M15.5 9.5l.2 1.3h-3.7V12h3.5l-.3 3.4-.9.3-1.8-.5v1.6l3.3 1-2.1-22.8h12L17.4 3.4h-9l.2 1.3h8l-.8 8.9h-3.3z"/></svg>`, 
      experience: "4 years" 
    },
    { 
      name: "CSS", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#1572B6" d="M5.7 1.3L4.8 13.1H19.2L18.3 1.3H5.7zM17.2 14.9H6.8L6.2 21.9L12 23.6L17.8 21.9L17.2 14.9z"/><path fill="#33A9DC" d="M12 18l3.8-1.1.3-3H12v-2.5h4.3l.1-1.3H12V6.7h5.3l-.4 4-1.1 5.8-3.8 1.2V18z"/><path fill="#FFF" d="M12 18v-2.3h-1.9l-.9-.3-.1-1.4h-1.5l.2 2.9L12 18z"/><path fill="#EBEBEB" d="M12 6.7v2.5H7.7l-.2-1.3-.1-1.3H12V6.7zM7.8 12h4.2v-2.5H8l.2 2.5z"/><path fill="#EBEBEB" d="M12 15.7l-.1.1-1.8-.5v1.6l3.3 1-2.1-22.8h12L12 15.7z"/></svg>`, 
      experience: "4 years" 
    },
    { 
      name: "JavaScript", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#F7DF1E" d="M0 0h24v24H0V0z"/><path d="M6.4 19.1c.5.8 1.3 1.5 2.6 1.5c1.5 0 2.5-.7 2.5-2.2c0-1.9-2.2-2.5-3.5-3c-1.9-.7-3.9-1.6-3.9-4.3c0-2.4 2-3.9 4.6-3.9c1.8 0 3.4.6 4.3 2.2L11 11.3c-.5-.8-1-1.3-2.1-1.3c-1 0-1.8.5-1.8 1.5c0 1.5 1.9 2 3.1 2.4c2.2.9 4.3 1.8 4.3 4.8c0 2.9-2.2 4.3-5.1 4.3c-2.3 0-4.4-1-5.4-2.9l2.4-1zm9.2 0c.5.8 1.1 1.5 2.3 1.5c1 0 1.6-.4 1.6-1.9V8.5h3V19c0 3.3-1.8 4.7-4.3 4.7c-2.1 0-3.7-.8-4.6-2.5l2-1.1z"/></svg>`, 
      experience: "3 years" 
    },
    { 
      name: "TypeScript", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#3178C6" d="M3 3h18v18H3V3z"/><path fill="#fff" d="M14.8 11.5h-2.4v9h-2v-9H8V10h6.8v1.5zm-7.95 5.55L7.4 18.6a4.3 4.3 0 001.3.7c.54.17 1.06.25 1.6.25.54 0 1.04-.07 1.5-.22a3.2 3.2 0 001.13-.64c.3-.28.54-.63.7-1.05.17-.41.25-.89.25-1.42 0-.4-.05-.77-.16-1.08-.1-.32-.26-.6-.49-.83a3.97 3.97 0 00-.88-.64 8.89 8.89 0 00-1.33-.52c-.33-.12-.6-.22-.81-.32a1.77 1.77 0 01-.51-.31.9.9 0 01-.26-.34 1.3 1.3 0 01-.08-.48c0-.17.03-.32.09-.44.06-.13.14-.23.25-.32.11-.08.24-.15.4-.2a1.98 1.98 0 011.02 0c.18.06.34.14.48.24a1.3 1.3 0 01.5.66l1.84-1.06a3.12 3.12 0 00-1.24-1.31 4.01 4.01 0 00-2.05-.47c-.52 0-1 .08-1.46.23a3.4 3.4 0 00-1.13.64 3 3 0 00-.72 1 3.2 3.2 0 00-.27 1.33c0 .54.07.99.2 1.35.14.36.34.66.6.9.26.24.56.45.92.62.35.17.75.33 1.18.46.34.11.62.21.85.32.23.1.42.2.56.32.14.1.25.22.31.35.07.13.1.29.1.46a.91.91 0 01-.35.76 1.61 1.61 0 01-1 .28 2.7 2.7 0 01-.84-.12 2.23 2.23 0 01-.67-.33 1.85 1.85 0 01-.48-.49 2.3 2.3 0 01-.27-.62z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "React", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#61DAFB" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zM12 18.089c4.889 0 8.873-1.37 8.873-3.05 0-1.68-3.984-3.051-8.873-3.051-4.889 0-8.873 1.37-8.873 3.05 0 1.68 3.984 3.051 8.873 3.051z"/><path stroke="#61DAFB" fill="none" d="M6.154 11.089c2.445-4.23 5.57-6.505 7.002-5.051 1.432 1.454-.014 5.79-2.458 10.02-2.445 4.23-5.57 6.505-7.002 5.051-1.432-1.454.014-5.79 2.458-10.02z"/><path stroke="#61DAFB" fill="none" d="M17.846 11.089c-2.445-4.23-5.57-6.505-7.002-5.051-1.432 1.454.014 5.79 2.458 10.02 2.445 4.23 5.57 6.505 7.002 5.051 1.432-1.454-.014-5.79-2.458-10.02z"/></svg>`, 
      experience: "3 years" 
    },
    { 
      name: "Next.js", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#000000" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "Node.js", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#68A063" d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.202 1.101-.493.056-.033.129-.021.182.021l1.87 1.12c.072.039.166.039.231 0l7.292-4.249c.072-.039.116-.116.116-.202V7.768c0-.085-.044-.165-.116-.201l-7.292-4.225c-.072-.039-.165-.039-.231 0L4.578 7.566c-.072.039-.113.129-.113.201v8.479c0 .077.041.165.113.201l1.994 1.157c1.076.551 1.738-.095 1.738-.734V8.437c0-.113.097-.21.21-.21h.926c.113 0 .21.094.21.21v8.434c0 1.448-.782 2.28-2.146 2.28-.422 0-.753 0-1.67-.46l-1.902-1.103A1.553 1.553 0 013 16.382V7.904c0-.579.31-1.114.811-1.403L11.1 2.252a1.583 1.583 0 011.8 0l7.292 4.249c.5.289.81.824.81 1.403v8.479c0 .579-.31 1.114-.811 1.402l-7.292 4.226a1.599 1.599 0 01-.774.201zm2.143-5.873c-3.186 0-3.862-.738-3.862-1.353 0-.113.093-.21.21-.21h.943c.107 0 .194.077.21.18.142.968.562 1.449 2.499 1.449 1.533 0 2.188-.354 2.188-1.177 0-.474-.186-.83-2.578-1.067-1.999-.198-3.241-.646-3.241-2.267 0-1.493 1.242-2.388 3.323-2.388 2.34 0 3.49.822 3.638 2.581.006.56.003.113-.056.17a.213.213 0 01-.154.061h-.943a.218.218 0 01-.204-.166c-.229-1.023-.786-1.353-2.281-1.353-1.687 0-1.884.599-1.884 1.043 0 .544.232.699 2.497.997 2.241.297 3.323.72 3.323 2.311 0 1.614-1.332 2.521-3.658 2.521z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "Express", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#FFFFFF" d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "MongoDB", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "Firebase", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#FFA000" d="M3.89 15.673L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "AWS", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#FF9900" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.19-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.59.16-.877.272a2.29 2.29 0 0 1-.248.096.488.488 0 0 1-.128.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-3z"/></svg>`, 
      experience: "1 year" 
    },
    { 
      name: "Google Cloud", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#4285F4" d="M12 11.55C9.64 9.35 6.48 8 3 8v8c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55z"/></svg>`, 
      experience: "1 year" 
    },
    { 
      name: "Tailwind CSS", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#38B2AC" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>`, 
      experience: "2 years" 
    },
    { 
      name: "Git", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`, 
      experience: "3 years" 
    },
    { 
      name: "Docker", 
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.185m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.638.403 2.18.45.495 1.116.768 1.999.768.187 0 .352-.007.52-.023.41 0 .99-.062 1.748-.384.113-.048.123-.134.123-.178 0-.103-.06-.154-.105-.184m-11.999 2.498c.013.175.024.348.024.52 0 .172-.01.344-.024.518-.784.145-1.602.222-2.371.235H9.36a19.109 19.109 0 01-2.496-.222l-.03-.018c-.226-1.421-.225-2.894.001-4.316.885.157 1.79.238 2.697.243.887-.006 1.775-.086 2.643-.242.226 1.422.226 2.894 0 4.315M.1 10.95c0-.005.001-.01.001-.016-.448-.003-.809-.173-1.073-.481a1.45 1.45 0 01-.36-.944v-.003c0-.367.13-.724.375-.996.276-.303.685-.473 1.153-.473h17.924c.36 2.506.089 5.68-.815 8.209-.937 2.625-2.586 3.948-4.303 3.948-1.189 0-2.162-.669-2.734-1.257-.348.747-1.237 1.271-2.223 1.271a2.536 2.536 0 01-1.678-.636c-.364.349-.856.563-1.395.563a2.09 2.09 0 01-1.17-.354 2.11 2.11 0 01-1.095.354c-.947 0-1.76-.68-1.958-1.605A9.339 9.339 0 01.1 10.95"/></svg>`, 
      experience: "1 year" 
    },
  ];
  
  // Smooth auto-scrolling carousel with improved performance
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjusted for smoother scrolling
    let isHovered = false;
    
    carousel.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
      isHovered = false;
    });
    
    const smoothScroll = () => {
      if (!isHovered && carousel) {
        scrollPosition += scrollSpeed;
        carousel.scrollLeft = scrollPosition;
        
        // Reset position when we've scrolled through half the items
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
          carousel.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(smoothScroll);
    };
    
    animationId = requestAnimationFrame(smoothScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const skillsData = [
    { name: "Frontend Development", rating: 4 },
    { name: "UX/UI Design", rating: 4 },
    { name: "Database", rating: 4 },
    { name: "Full Stack Development", rating: 4 },
    { name: "AI Integration", rating: 4 }
  ];
  
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-dark-light">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow-cyan">
            Tech Stack
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            The technologies I work with to bring ideas to life.
            Hover over each technology to see my experience level.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-6"></div>
        </div>
        
        {/* Tech carousel with smooth animation */}
        <div className="overflow-hidden py-8 mb-12">
          <div 
            ref={carouselRef} 
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the items for infinite scroll effect */}
            {[...techStack, ...techStack].map((tech, index) => (
              <div 
                key={index} 
                className="flex-none w-32 h-32 glass rounded-xl flex flex-col items-center justify-center p-4 group relative transform transition-all duration-300 hover:scale-110 hover:box-glow-cyan snap-center"
              >
                <div 
                  className="text-4xl mb-2 group-hover:text-glow-cyan transition-all duration-300 transform group-hover:scale-110"
                  dangerouslySetInnerHTML={{ __html: tech.icon }}
                ></div>
                <div className="text-sm font-medium transition-colors duration-300 group-hover:text-neon-cyan">
                  {tech.name}
                </div>
                
                {/* Experience tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark-light px-3 py-1 rounded-lg text-neon-cyan text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap neon-border-cyan">
                  {tech.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech description and skill ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-glow-magenta relative z-10">My Technical Approach</h3>
            <p className="text-light-gray mb-4 relative z-10">
              I approach each project with a focus on creating scalable, maintainable solutions 
              that leverage the best tools for the job. My experience spans from front-end 
              development to back-end systems and cloud infrastructure.
            </p>
            <p className="text-light-gray relative z-10">
              I'm constantly learning and adapting to new technologies, with a particular interest 
              in performance optimization, modern JavaScript frameworks, and cloud-native 
              architectures.
            </p>
            
            {/* Cool background animation */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-magenta/10 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Add elegant shapes */}
              <ElegantShape
                delay={0.3}
                width={300}
                height={80}
                rotate={12}
                gradient="from-neon-cyan/[0.05]"
                className="right-0 top-0"
              />
              
              <ElegantShape
                delay={0.5}
                width={250}
                height={70}
                rotate={-15}
                gradient="from-neon-magenta/[0.05]"
                className="left-0 bottom-0"
              />
            </div>
          </div>
          
          {/* Skill Ratings */}
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-glow-cyan relative z-10">My Skill Set</h3>
            <SkillRating skills={skillsData} maxRating={5} />
            
            {/* Background elements */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-neon-magenta/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Add elegant shapes */}
              <ElegantShape
                delay={0.4}
                width={300}
                height={80}
                rotate={-12}
                gradient="from-neon-magenta/[0.05]"
                className="left-0 top-0"
              />
              
              <ElegantShape
                delay={0.6}
                width={250}
                height={70}
                rotate={15}
                gradient="from-neon-cyan/[0.05]"
                className="right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgNHYyaC0ydi0yaDJ6bTIgMHYyaC0ydi0yaDJ6bS02IDBoMnYyaC0ydi0yem0yLTR2Mmgtdi0yaDJ6bTItNHYyaC12LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
    </section>
  );
};

export default TechStack;
