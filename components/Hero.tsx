
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611974717482-5da0027ad53b?q=80&w=2070&auto=format&fit=crop" 
          alt="Piso de remates de Wall Street" 
          className="w-full h-full object-cover brightness-[0.4] scale-105 animate-[pulse_10s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block glass px-4 py-1.5 rounded-full mb-8 border border-amber-500/20 animate-fade-in-up">
          <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">Mercado de EE. UU. • Formación Élite</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter animate-fade-in-up uppercase">
          DOMINA EL MUNDO <span className="text-gradient">FINANCIERO.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          El curso de élite definitivo para traders serios. Aprende los secretos de la Bolsa de EE. UU. de la mano de veteranos que viven en el mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://go.hotmart.com/B103361602G" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-amber-500 transition-all duration-300 hover:scale-105 inline-block shadow-2xl"
          >
            Inicia tu Viaje
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce cursor-pointer" onClick={() => document.getElementById('methodology')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
