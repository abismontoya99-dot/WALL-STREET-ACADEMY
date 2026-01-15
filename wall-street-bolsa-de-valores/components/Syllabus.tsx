
import React, { useState } from 'react';

const modules = [
  {
    id: "01",
    title: "Fundamentos del Mercado Americano",
    description: "La base sólida que separa a los apostadores de los verdaderos inversionistas profesionales.",
    lessons: [
      "Estructura del NYSE y NASDAQ",
      "Tipos de activos: Acciones, ETFs y Reits",
      "Horarios, pre-market y after-hours",
      "Psicología del inversor minorista vs institucional"
    ]
  },
  {
    id: "02",
    title: "Análisis Técnico de Precisión",
    description: "Aprende a leer el lenguaje del dinero a través de las gráficas de precio y volumen.",
    lessons: [
      "Lectura avanzada de velas japonesas",
      "Soportes y resistencias de alto impacto",
      "Teoría de Dow y fases del mercado",
      "Indicadores líderes vs rezagados (RSI, MACD, VWAP)"
    ]
  },
  {
    id: "03",
    title: "Estrategias de Day & Swing Trading",
    description: "Sistemas probados para generar ingresos en el corto y mediano plazo.",
    lessons: [
      "Patrones de continuación y reversión",
      "Trading con perfiles de volumen (Volume Profile)",
      "Gestión de entradas y salidas dinámicas",
      "Estrategias de scalping en marcos de 1 y 5 min"
    ]
  },
  {
    id: "04",
    title: "Opciones Financieras Avanzadas",
    description: "El poder del apalancamiento inteligente y la protección de capital.",
    lessons: [
      "Conceptos clave: Call, Put y Strike Price",
      "Las Griegas: Delta, Gamma, Theta y Vega",
      "Spreads, Iron Condors y Straddles",
      "Cobertura de cartera con opciones (Hedging)"
    ]
  },
  {
    id: "05",
    title: "Análisis Fundamental y Macro",
    description: "Entiende por qué se mueve el mercado antes de que ocurra el movimiento.",
    lessons: [
      "Lectura de reportes de ganancias (Earnings)",
      "Impacto de la Reserva Federal (FED) y tasas",
      "Indicadores económicos: CPI, NFP y GDP",
      "Correlaciones entre mercados (Bonos vs Acciones)"
    ]
  },
  {
    id: "06",
    title: "Gestión de Riesgo Institucional",
    description: "La diferencia entre quebrar una cuenta y construir una fortuna generacional.",
    lessons: [
      "Cálculo del tamaño de posición (Position Sizing)",
      "La regla del 1% y Drawdown control",
      "Uso de Stop Loss técnico y mental",
      "Bitácora de trading y mejora estadística"
    ]
  }
];

const Syllabus: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  return (
    <section id="modules" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Currículo Élite</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-6">Un Camino <span className="text-gradient">Hacia la Maestría.</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Selecciona un módulo para explorar las lecciones que transformarán tu visión financiera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div 
              key={m.id} 
              onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}
              className={`glass p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer group flex flex-col h-full
                ${expandedId === m.id ? 'border-amber-500/50 ring-1 ring-amber-500/20 bg-amber-500/5' : 'border-white/5 hover:border-white/20'}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-4xl font-black transition-colors ${expandedId === m.id ? 'text-amber-500' : 'text-white/10 group-hover:text-white/20'}`}>
                  {m.id}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${expandedId === m.id ? 'bg-amber-500 text-black rotate-45' : 'bg-white/5 text-white'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-amber-500">{m.title}</h4>
              <p className="text-sm text-gray-500 mb-6 font-light leading-relaxed">{m.description}</p>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === m.id ? 'max-h-[500px] opacity-100 mt-auto' : 'max-h-0 opacity-0'}`}>
                <div className="pt-6 border-t border-white/5">
                  <ul className="space-y-3">
                    {m.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></div>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-amber-500 transition-colors">
                    Ver Detalles del Módulo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block glass px-8 py-4 rounded-full border border-amber-500/10">
            <p className="text-gray-300 text-sm">
              <span className="text-amber-500 font-bold">Bonus:</span> Incluye software de simulación y acceso al Trading Floor VIP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
