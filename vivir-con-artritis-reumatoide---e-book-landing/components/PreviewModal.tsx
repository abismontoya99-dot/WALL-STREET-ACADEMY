
import React from 'react';
import { X, CheckCircle, ArrowRight, Activity } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-stone-100 hover:bg-stone-200 rounded-full text-stone-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Sidebar / Preview Info */}
        <div className="md:w-1/3 bg-emerald-50 p-8 md:p-12 flex flex-col justify-between border-r border-emerald-100">
          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Vista Previa</span>
            <h3 className="text-3xl font-bold text-stone-800 mb-6 serif">E-book Completo</h3>
            <p className="text-stone-600 mb-8 font-light leading-relaxed">
              Estás viendo una muestra reducida de las 120 páginas que transformarán tu manera de vivir con artritis.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span>50+ Recetas Antiinflamatorias</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span>Guía de estiramientos diarios</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span>Plan de alimentación de 30 días</span>
              </li>
            </ul>
          </div>
          
          <a 
            href="https://go.hotmart.com/F103807521Y" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-center hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            Comprar E-book Completo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Main Preview Content */}
        <div className="md:w-2/3 overflow-y-auto p-4 sm:p-8 bg-stone-100/50">
          <div className="space-y-8">
            {/* Page 1: Table of Contents Preview */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <span className="font-bold text-stone-500 text-xs uppercase tracking-wider">PÁGINA 05 - ÍNDICE DE CONTENIDOS</span>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium">Capítulo 1: Entendiendo la Artritis Reumatoide</span>
                  <span className="text-stone-400">12</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium">Capítulo 2: Los Pilares de la Dieta Antiinflamatoria</span>
                  <span className="text-stone-400">28</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium">Capítulo 3: Recetas para el Desayuno y Almuerzo</span>
                  <span className="text-stone-400">45</span>
                </div>
              </div>
            </div>

            {/* Page 2: Recipe Preview */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <span className="font-bold text-emerald-600 text-xs uppercase tracking-wider">Receta Estrella: Salmón al Limón</span>
                <span className="text-stone-400 text-xs">PÁGINA 42</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-stone-800 serif">Ingredientes Clave</h4>
                  <ul className="space-y-2 text-sm text-stone-600 font-light">
                    <li>• 2 filetes de salmón fresco</li>
                    <li>• 1 cda de Cúrcuma</li>
                    <li>• Zumo de medio limón</li>
                    <li>• Aceite de Oliva Virgen</li>
                  </ul>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600" 
                  alt="Salmón saludable" 
                  className="rounded-lg shadow-md object-cover h-40 w-full"
                />
              </div>
            </div>

            {/* Page 3: Exercises Preview */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-emerald-600 text-xs uppercase tracking-wider">Ejercicios de Movilidad</span>
                </div>
                <span className="text-stone-400 text-xs">PÁGINA 85</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                <div className="relative">
                   <img 
                    src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=600" 
                    alt="Mujer realizando estiramientos suaves" 
                    className="rounded-lg shadow-md object-cover h-40 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-stone-800 serif">Rutina Suave</h4>
                  <p className="text-sm text-stone-600 font-light"><b>Círculos de muñeca:</b> Rota suavemente tus manos para mejorar la circulación sin dolor.</p>
                  <p className="text-sm text-stone-600 font-light"><b>Toque de dedos:</b> Fortalece la motricidad fina cada mañana.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
