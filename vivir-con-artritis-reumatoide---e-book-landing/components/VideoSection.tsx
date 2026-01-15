
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // ID del video de YouTube extraído de https://youtu.be/YytvOk0HDlA
  const videoId = "YytvOk0HDlA";

  return (
    <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Patrón abstracto" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight serif">Entiende mejor tu condición</h2>
            <p className="text-xl text-emerald-100/80 mb-8 font-light leading-relaxed">
              La información es clave para tomar el control. Mira este video educativo sobre la Artritis Reumatoide y cómo la nutrición antiinflamatoria puede ser tu gran aliada para reducir el dolor y recuperar movilidad.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">✓</div>
                <span>Explicación clara de la inflamación articular</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">✓</div>
                <span>Claves para un diagnóstico temprano</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">✓</div>
                <span>Importancia de la nutrición en el tratamiento</span>
              </li>
            </ul>
          </div>

          {/* Contenedor del Video */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-800/50 bg-black group">
            {!isPlaying ? (
              <button 
                className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none z-20 group" 
                onClick={() => setIsPlaying(true)}
                aria-label="Reproducir video sobre Artritis Reumatoide"
              >
                {/* Imagen de Portada: Receta Antiinflamatoria de Alta Calidad */}
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200" 
                  alt="Recetas antiinflamatorias saludables y nutritivas" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/30">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 group-active:scale-95">
                      <Play className="text-white fill-current w-8 h-8 ml-1" />
                    </div>
                    <span className="bg-emerald-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold text-xs tracking-widest shadow-lg border border-emerald-500/30 uppercase">
                      Ver Video Explicativo
                    </span>
                  </div>
                </div>
              </button>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`} 
                title="Video educativo sobre Artritis Reumatoide" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
