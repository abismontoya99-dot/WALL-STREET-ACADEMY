
import React from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    title: "Desayunos Vitales",
    category: "Recetas"
  },
  {
    url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800",
    title: "Estiramientos Suaves",
    category: "Bienestar"
  },
  {
    url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    title: "Almuerzos Antiinflamatorios",
    category: "Recetas"
  },
  {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    title: "Cenas Ligeras",
    category: "Recetas"
  },
  {
    url: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    title: "Vida Activa",
    category: "Motivación"
  },
  {
    url: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800",
    title: "Ingredientes Naturales",
    category: "Nutrición"
  }
];

const GallerySection: React.FC = () => {
  return (
    <section id="recetas" className="py-24 bg-stone-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Inspiración para tu día a día</h2>
            <p className="text-xl text-stone-600 font-light">
              Echa un vistazo a lo que encontrarás dentro de nuestra guía visual. Recetas coloridas y momentos de bienestar.
            </p>
          </div>
          <button className="text-emerald-600 font-bold flex items-center gap-2 group">
            Ver todas las recetas <div className="w-8 h-px bg-emerald-600 transform transition-all group-hover:w-12"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg">
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest">{img.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
