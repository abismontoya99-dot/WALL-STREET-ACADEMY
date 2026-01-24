
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "No son Señales, es Visión",
    description: "Deja de seguir alertas a ciegas. Aprende a identificar por qué las instituciones están comprando Amazon o Apple antes de que salga la noticia.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "El Mito de los Indicadores",
    description: "Destruimos la falsa creencia de que el RSI o el MACD te harán rico. Te enseñamos la acción del precio pura y el flujo de órdenes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.547 2.188a2 2 0 00.75 2.106l1.747 1.166a2 2 0 002.31 0l1.747-1.166a2 2 0 00.75-2.106l-.547-2.188zM8.484 8.484a2 2 0 010 2.828l-2.828 2.828a2 2 0 01-2.828 0l-2.828-2.828a2 2 0 010-2.828l2.828-2.828a2 2 0 012.828 0l2.828 2.828z" />
      </svg>
    )
  },
  {
    title: "Blindaje Emocional",
    description: "Aprende el protocolo de riesgo que usan los Hedge Funds para que una sola pérdida nunca comprometa tu capital.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="methodology" className="py-12 md:py-16 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2 italic">Por qué fracasas hoy</h2>
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase leading-tight tracking-tighter">Es hora de romper <br/><span className="text-gray-600 font-light italic">tus viejas reglas.</span></h3>
          </div>
          <p className="text-gray-400 max-w-sm border-l border-amber-500/30 pl-6 py-1 text-sm leading-relaxed font-light">
            El mercado está diseñado para quitarle el dinero a quienes no tienen un sistema institucional. Nosotros te damos las llaves del club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] group hover:bg-white/5 transition-all duration-700 cursor-default border-white/5 hover:border-amber-500/20">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 group-hover:scale-110 border border-amber-500/10">
                {f.icon}
              </div>
              <h4 className="text-lg font-black mb-3 group-hover:text-amber-500 transition-colors uppercase tracking-tighter">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
