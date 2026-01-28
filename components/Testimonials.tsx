
import React from 'react';

const students = [
  {
    name: "Alex Rivera",
    role: "Trader Full-Time",
    quote: "Wall Street Academy cambió mi vida. Pasé de perder $5,000 al mes por falta de estrategia a tener una consistencia real operando solo 2 horas al día.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Gestora de Cartera",
    quote: "La inmersión en opciones financieras fue un cambio radical. Leonardo explica conceptos complejos de nivel institucional de una forma que cualquiera puede entender.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Marco Valdivia",
    role: "Alumno Elite",
    quote: "Lo que más valoro es el acompañamiento. No es solo un curso grabado, es entrar a una comunidad de personas que hablamos el mismo lenguaje del dinero.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="success" className="py-16 md:py-20 px-6 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 italic">Casos de Éxito</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-tight">RESULTADOS <br/><span className="text-white">QUE HABLAN POR SÍ SOLOS.</span></h3>
          <p className="text-gray-500 text-base md:text-lg font-light max-w-xl mx-auto italic leading-relaxed">
            La confianza de traders que dejaron de apostar para empezar a invertir con claridad institucional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {students.map((s, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col gap-6 group hover:bg-white/5 transition-all duration-700 hover:-translate-y-1">
              <div className="relative shrink-0 flex justify-center lg:justify-start">
                <img 
                  src={s.img} 
                  alt={s.name} 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-amber-500/20 shadow-2xl group-hover:border-amber-500 transition-all duration-500" 
                />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black p-1.5 rounded-full shadow-xl">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
              </div>
              <div>
                <p className="text-sm md:text-base italic text-gray-300 mb-6 font-light leading-relaxed">"{s.quote}"</p>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h5 className="text-base font-black text-white uppercase tracking-tighter">{s.name}</h5>
                  <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em]">{s.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
