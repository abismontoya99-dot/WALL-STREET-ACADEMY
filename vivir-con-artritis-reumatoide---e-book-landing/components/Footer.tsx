
import React from 'react';
import { BookOpen, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-stone-800 pb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-emerald-500 w-8 h-8 shrink-0" />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                Vivir con Artritis Reumatoide: Recetas y Consejos Saludables
              </span>
            </div>
            <p className="text-lg max-w-md font-light">
              Nuestra misión es empoderar a las personas con artritis reumatoide a través del conocimiento y la nutrición consciente.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest text-sm">Explora</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Sobre el autor</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Recetas destacadas</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog de bienestar</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest text-sm">Conecta</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-all text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-all text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-all text-white">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm">hola@bienestararticular.com</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>© 2024 Vivir con Artritis Reumatoide: Recetas y Consejos Saludables. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
