
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611974717482-5da0027ad53b?q=80&w=2070&auto=format&fit=crop" 
          alt="Wall Street Trading Floor" 
          className="w-full h-full object-cover brightness-[0.35] scale-110 animate-[kenburns_20s_ease_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block glass px-6 py-2 rounded-full mb-8 border border-amber-500/30 animate-fade-in-up shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <span className="text-amber-500 text-[11px] font-black uppercase tracking-[0.4em]">Wall Street • Formación de Alto Nivel</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter animate-fade-in-up uppercase leading-[0.9]">
          EL DINERO <br/> <span className="text-gradient">NUNCA DUERME.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Domina las estrategias institucionales de la Bolsa de EE. UU. Deja de adivinar y empieza a operar con la precisión de los grandes fondos de inversión.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://go.hotmart.com/B103361602G" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-amber-500 text-black font-black px-12 py-5 rounded-full text-xl hover:bg-white transition-all duration-500 hover:scale-105 inline-block shadow-[0_20px_50px_rgba(245,158,11,0.3)] uppercase tracking-tight"
          >
            Comienza tu Carrera Hoy
          </a>
          <a 
            href="#modules" 
            className="text-white font-bold px-10 py-5 rounded-full text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm uppercase tracking-widest text-[12px]"
          >
            Ver Programa
          </a>
        </div>
      </div>
      
      {/* Custom Keyframe for Ken Burns effect */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translate(10px, -10px); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => document.getElementById('methodology')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Descubrir</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
