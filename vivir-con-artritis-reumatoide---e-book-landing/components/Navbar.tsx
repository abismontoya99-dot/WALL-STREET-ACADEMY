
import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3 max-w-[60%] sm:max-w-md">
            <BookOpen className="text-emerald-600 w-8 h-8 shrink-0" />
            <span className="text-base sm:text-lg font-bold tracking-tight text-stone-800 leading-tight">
              Vivir con Artritis Reumatoide: Recetas y Consejos Saludables
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-stone-600 hover:text-emerald-600 transition-colors">Inicio</a>
            <a href="#contenido" className="text-stone-600 hover:text-emerald-600 transition-colors">El E-book</a>
            <a href="#recetas" className="text-stone-600 hover:text-emerald-600 transition-colors">Recetas</a>
            <a href="#consejos" className="text-stone-600 hover:text-emerald-600 transition-colors">Consejos</a>
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md inline-block whitespace-nowrap"
            >
              Comprar Ahora
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 animate-fade-up">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800">Inicio</a>
            <a href="#contenido" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800">El E-book</a>
            <a href="#recetas" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800">Recetas</a>
            <a href="#consejos" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800">Consejos</a>
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-center block"
            >
              Comprar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
