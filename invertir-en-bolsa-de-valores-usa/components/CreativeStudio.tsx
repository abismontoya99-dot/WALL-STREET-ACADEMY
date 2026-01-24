
import React, { useState, useMemo } from 'react';

const CompoundCalculator: React.FC = () => {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(200);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const finalBalance = useMemo(() => {
    let total = initial;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    
    for (let i = 0; i < months; i++) {
      total = (total + monthly) * (1 + monthlyRate);
    }
    return Math.round(total);
  }, [initial, monthly, years, rate]);

  return (
    <section id="calculator" className="py-16 md:py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 italic">Proyector de Riqueza</h2>
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">EL PODER DEL <span className="text-white/40">INTERÉS COMPUESTO.</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 rounded-[2rem] border border-white/10 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Inversión Inicial</span>
                <span className="text-amber-500">${initial.toLocaleString()}</span>
              </div>
              <input type="range" min="100" max="50000" step="100" value={initial} onChange={(e) => setInitial(Number(e.target.value))} className="w-full accent-amber-500 bg-white/5" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Aporte Mensual</span>
                <span className="text-amber-500">${monthly.toLocaleString()}</span>
              </div>
              <input type="range" min="0" max="5000" step="50" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full accent-amber-500 bg-white/5" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Retorno Anual Estimado</span>
                <span className="text-amber-500">{rate}%</span>
              </div>
              <input type="range" min="1" max="30" step="1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-amber-500 bg-white/5" />
            </div>
          </div>

          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-2">
              <span className="text-green-400 text-[10px] font-black uppercase tracking-widest">Simulación a {years} años</span>
            </div>
            <h4 className="text-5xl md:text-7xl font-black text-white tracking-tighter tabular-nums">
              ${finalBalance.toLocaleString()}
            </h4>
            <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-sm">
              Este es el potencial de tu capital aplicando las estrategias institucionales de Wall Street. La bolsa de valores es el mayor generador de riqueza de la historia.
            </p>
            <div className="pt-4">
              <a href="https://go.hotmart.com/B103361602G" target="_blank" className="text-amber-500 font-bold uppercase tracking-widest text-xs border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-all">Empieza a construir esto hoy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompoundCalculator;
