
import React from 'react';

const students = [
  {
    name: "Alex Rivera",
    role: "Trader a Tiempo Completo",
    quote: "Wall Street Academy cambió mi vida. Pasé de perder $5k al mes a tener años consistentes de 6 cifras.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Gestora de Cartera",
    quote: "La inmersión profunda en las griegas de opciones fue un cambio radical. Entrenamiento de nivel institucional para traders minoristas.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Marcos Vales",
    role: "Inversionista Particular",
    quote: "Lo que más valoro es la comunidad. Nunca te sientes solo operando, y el soporte de los mentores es inmediato.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Elena Rodríguez",
    role: "Estratega de Swing Trading",
    quote: "El temario sobre gestión de riesgo salvó mi cuenta. Aprendí que no se trata de cuánto ganas, sino de cuánto proteges.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="success" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase">LA CONFIANZA DE <span className="text-amber-500">MILES.</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {students.map((s, i) => (
            <div key={i} className="glass p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-center group hover:bg-white/10 transition-colors duration-500">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-amber-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src={s.img} 
                  alt={s.name} 
                  className="relative w-28 h-28 rounded-full object-cover border-2 border-amber-500/30" 
                />
              </div>
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic text-gray-300 mb-4 leading-relaxed font-light">"{s.quote}"</p>
                <h5 className="text-lg font-bold text-white">{s.name}</h5>
                <span className="text-amber-500 text-sm font-semibold tracking-wider">{s.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
