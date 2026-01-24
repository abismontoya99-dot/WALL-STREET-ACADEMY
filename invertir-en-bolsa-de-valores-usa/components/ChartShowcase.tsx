
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
      <div className="glass p-4 rounded-xl border border-white/10 shadow-3xl backdrop-blur-xl">
        <p className="text-[8px] text-gray-500 uppercase tracking-widest mb-1 font-black">{data.fullDate}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-black text-white">${data.value.toLocaleString()}</span>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
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
    <section id="analytics" className="py-12 md:py-16 px-6 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 lg:order-1 px-4">
          <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight uppercase tracking-tighter">
            TERMINAL DE <br/><span className="text-amber-500">ANÁLISIS PRO.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-light">
            Interactúa con los mercados más importantes de EE. UU. y entiende por qué el NASDAQ lidera la tecnología mientras el S&P 500 marca la salud de la economía global.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <button 
              onClick={() => setSelectedMarket('SP500')}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${selectedMarket === 'SP500' ? 'bg-amber-500 text-black shadow-[0_10px_30px_rgba(245,158,11,0.3)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              S&P 500
            </button>
            <button 
              onClick={() => setSelectedMarket('NASDAQ')}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${selectedMarket === 'NASDAQ' ? 'bg-amber-500 text-black shadow-[0_10px_30px_rgba(245,158,11,0.3)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              NASDAQ 100
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group px-2">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-[2rem] blur-xl opacity-10"></div>
          <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 relative z-10 bg-[#0a0a0a]/90 backdrop-blur-3xl shadow-3xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[8px] text-gray-400 font-black uppercase tracking-[0.4em]">Live Data</span>
                </div>
                <h4 className="text-xl font-black text-white tracking-tighter">{selectedMarket === 'SP500' ? 'S&P 500 Index' : 'Nasdaq 100'}</h4>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-green-500 tabular-nums">
                  {selectedMarket === 'SP500' ? '5,842.10' : '19,235.40'}
                </p>
                <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">+1.24%</p>
              </div>
            </div>

            <div className="h-[250px] md:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#4b5563', fontSize: 9, fontWeight: 'bold' }} 
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
                    strokeWidth={3} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartShowcase;
