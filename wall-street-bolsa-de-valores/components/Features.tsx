
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Señales en Tiempo Real",
    description: "Obtén acceso inmediato a configuraciones de trading de alta probabilidad curadas por nuestros analistas principales.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Análisis Técnico Avanzado",
    description: "Domina patrones de velas, niveles de Fibonacci e indicadores de momentum patentados.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Psicología y Riesgo",
    description: "Aprende a gestionar tus emociones y tu capital con protocolos de gestión de riesgo de nivel institucional.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="methodology" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Nuestra Metodología</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold uppercase">Herramientas profesionales, <span className="text-gray-500 font-light italic">al alcance de tu mano.</span></h3>
          </div>
          <p className="text-gray-400 max-w-sm border-l border-amber-500/30 pl-6 py-2">
            No enseñamos a apostar. Enseñamos especulación estratégica basada en décadas de datos e intuición de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500 cursor-default border-white/5 hover:border-amber-500/20">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                {f.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-amber-500 transition-colors uppercase tracking-tighter">{f.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
