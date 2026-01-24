
import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleTrack = () => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 md:bottom-8 left-0 w-full z-[110] px-6 flex justify-center pointer-events-none">
      <div className="w-full max-w-[320px] pointer-events-auto">
        <a 
          href="https://go.hotmart.com/B103361602G"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTrack}
          className="group relative flex items-center justify-between bg-amber-500 hover:bg-white text-black font-black p-1 pl-5 rounded-xl shadow-[0_15px_40px_rgba(245,158,11,0.4)] transition-all duration-500 hover:scale-105 active:scale-95"
        >
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-70 leading-none mb-0.5">Cupos Disponibles</span>
            <span className="text-[10px] md:text-xs uppercase tracking-tighter">¡INSCRIBIRME AHORA!</span>
          </div>
          
          <div className="w-9 h-9 md:w-10 md:h-10 bg-black text-amber-500 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
            <svg className="w-4 h-4 md:w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-amber-500/20 blur-xl rounded-xl z-[-1] animate-pulse"></div>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
