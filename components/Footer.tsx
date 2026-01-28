
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div className="max-w-lg">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black italic">B</div>
            <span className="text-xl font-extrabold tracking-tighter uppercase">INVERTIR EN BOLSA DE VALORES USA</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            La plataforma educativa líder para la maestría de los mercados financieros de América del Norte. Empoderando a la próxima generación de riqueza a través de una educación financiera de alto nivel.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">Inversión Inteligente</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 Invertir en Bolsa de Valores USA. Todos los derechos reservados.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-10 border-t border-white/5">
        <p className="text-[9px] text-gray-700 text-center uppercase tracking-widest leading-loose">
          Descargo de responsabilidad: El trading de acciones y opciones conlleva un riesgo significativo y no es adecuado para todos los inversores. El rendimiento pasado no es indicativo de resultados futuros. Todo el contenido proporcionado tiene fines educativos únicamente y no constituye asesoramiento financiero. Compra segura procesada por Hotmart BV.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
