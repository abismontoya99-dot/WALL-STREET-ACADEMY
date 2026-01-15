
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div>
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black italic">W</div>
            <span className="text-xl font-extrabold tracking-tighter">WALL STREET ACADEMY</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            La plataforma educativa líder en el mundo para la maestría de los mercados financieros de América del Norte. Empoderando a la próxima generación de riqueza.
          </p>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Compañía</span>
            <a href="#" className="text-sm hover:text-amber-500 transition-colors">Nosotros</a>
            <a href="#" className="text-sm hover:text-amber-500 transition-colors">Carreras</a>
            <a href="#" className="text-sm hover:text-amber-500 transition-colors">Afiliados</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Soporte</span>
            <a href="#" className="text-sm hover:text-amber-500 transition-colors">Contacto</a>
            <a href="#" className="text-sm hover:text-amber-500 transition-colors">Preguntas frecuentes</a>
            <a href="#" className="text-sm hover:text-amber-500 transition-colors">Términos</a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-amber-500 hover:text-black cursor-pointer transition-colors">𝕏</div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-amber-500 hover:text-black cursor-pointer transition-colors">IG</div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-amber-500 hover:text-black cursor-pointer transition-colors">YT</div>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2026 Wall Street Academy. Todos los derechos reservados.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-white/5">
        <p className="text-[9px] text-gray-700 text-center uppercase tracking-widest leading-loose">
          Descargo de responsabilidad: El trading de acciones y opciones conlleva un riesgo significativo y no es adecuado para todos los inversores. El rendimiento pasado no es indicativo de resultados futuros. Todo el contenido proporcionado tiene fines educativos únicamente y no constituye asesoramiento financiero.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
