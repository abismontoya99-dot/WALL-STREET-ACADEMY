
import React, { useState, useMemo } from 'react';
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  Brush
} from 'recharts';

const generateData = (baseVal: number, volatility: number) => {
  const data = [];
  let baseValue = baseVal;
  const startDate = new Date('2023-11-01');

  for (let i = 0; i < 100; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const change = (Math.random() - 0.45) * volatility; 
    baseValue += change;
    const prevValue = i > 0 ? data[i - 1].value : baseValue - change;
    const percentChange = ((baseValue - prevValue) / prevValue) * 100;

    data.push({
      date: date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
      fullDate: date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      value: parseFloat(baseValue.toFixed(2)),
      change: parseFloat(percentChange.toFixed(2))
    });
  }
  return data;
};

const sp500Data = generateData(5200, 40);
const nasdaqData = generateData(16000, 150);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isPositive = data.change >= 0;

    return (
      <div className="glass p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{data.fullDate}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-black text-white">${data.value.toLocaleString()}</span>
          <span className={`text-xs font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '▲' : '▼'} {Math.abs(data.change)}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const ChartShowcase: React.FC = () => {
  const [selectedMarket, setSelectedMarket] = useState<'SP500' | 'NASDAQ'>('SP500');
  
  const currentData = useMemo(() => {
    return selectedMarket === 'SP500' ? sp500Data : nasdaqData;
  }, [selectedMarket]);

  return (
    <section id="analytics" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase">
            TERMINAL DE <span className="text-amber-500">ANÁLISIS.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
            Interactúa con los mercados más importantes de EE. UU. y entiende por qué el NASDAQ lidera la tecnología mientras el S&P 500 marca la salud de la economía global.
          </p>
          
          <div className="flex gap-4 mb-12">
            <button 
              onClick={() => setSelectedMarket('SP500')}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedMarket === 'SP500' ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              S&P 500
            </button>
            <button 
              onClick={() => setSelectedMarket('NASDAQ')}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedMarket === 'NASDAQ' ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              NASDAQ 100
            </button>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 uppercase tracking-tighter">Lectura de Gráficas</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Domina marcos temporales intradía y de largo plazo para capturar los movimientos más rentables.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="glass p-8 rounded-[2.5rem] border border-white/10 relative z-10 bg-[#0a0a0a]/80">
            <div className="flex justify-between items-center mb-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Live Feed</span>
                </div>
                <h4 className="text-3xl font-black text-white">{selectedMarket === 'SP500' ? 'Standard & Poor\'s' : 'Nasdaq Index'}</h4>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-green-500">
                  {selectedMarket === 'SP500' ? '5,842.10' : '19,235.40'}
                </p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">+1.24% HOY</p>
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#4b5563', fontSize: 10 }} 
                    minTickGap={40}
                  />
                  <YAxis hide domain={['auto', 'auto']} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#f59e0b" 
                    fillOpacity={1} 
                    fill="url(#chartGradient)" 
                    strokeWidth={4} 
                    animationDuration={2000}
                  />
                  <Brush 
                    dataKey="date" 
                    height={30} 
                    stroke="#f59e0b" 
                    fill="#000"
                    travellerWidth={10}
                    gap={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-10 flex justify-between items-center border-t border-white/5 pt-6">
              <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Ejecución en ms</span>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                   <span className="text-[10px] text-gray-400 font-bold uppercase">Tendencia</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartShowcase;
