
import React from 'react';
import { Utensils, Heart, CheckCircle, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Utensils className="w-8 h-8 text-emerald-600" />,
    title: "50+ Recetas Antiinflamatorias",
    description: "Platos deliciosos diseñados para reducir la inflamación sistémica sin sacrificar el sabor."
  },
  {
    icon: <Heart className="w-8 h-8 text-emerald-600" />,
    title: "Consejos de Bienestar",
    description: "Ejercicios de bajo impacto y técnicas de relajación específicas para la salud articular."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
    title: "Guía de Suplementos",
    description: "Información veraz sobre qué suplementos tienen base científica para ayudar a tus articulaciones."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
    title: "Diario de Síntomas",
    description: "Herramientas descargables para monitorizar tu evolución y detectar qué alimentos te sientan mejor."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="contenido" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Mucho más que un libro de recetas</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            Este recurso ha sido creado pensando en quienes buscan un enfoque integral para manejar la artritis desde el hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-stone-50 hover:bg-emerald-50 transition-all border border-stone-100 hover:border-emerald-200">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
