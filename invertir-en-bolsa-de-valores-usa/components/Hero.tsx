
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611974717482-5da0027ad53b?q=80&w=2070&auto=format&fit=crop" 
          alt="Wall Street Trading Floor" 
          className="w-full h-full object-cover brightness-[0.2] scale-105 animate-[kenburns_40s_ease_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-12 md:py-16">
        <div className="inline-block glass px-4 py-1.5 rounded-full mb-6 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
          <span className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Cupos Limitados para {new Date().getFullYear()}</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.95] md:leading-[0.85] filter drop-shadow-2xl">
          DEJA DE <span className="text-gradient">ADIVINAR</span> <br className="hidden md:block"/> TU FUTURO.
        </h1>
        
        <p className="text-sm md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-tight">
          Aprende el sistema de <span className="text-white font-bold italic">Smart Money Concepts</span> que usan las instituciones para mover el mercado de EE. UU.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <a 
            href="https://go.hotmart.com/B103361602G" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-amber-500 text-black font-black px-8 md:px-10 py-3.5 md:py-4 rounded-full text-base md:text-lg hover:bg-white transition-all duration-700 hover:scale-105 inline-block shadow-[0_20px_40px_rgba(245,158,11,0.3)] uppercase tracking-tight text-center"
          >
            Comienza tu Carrera Aquí
          </a>
          <div className="flex flex-col items-center sm:items-start opacity-70 scale-90">
             <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
             </div>
             <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">4.9/5 Calificación de Alumnos</p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
