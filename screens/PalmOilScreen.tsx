
import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const palmChartData = [
  { name: 'Oct 01', price: 3800, ref: 3750 },
  { name: 'Oct 15', price: 4000, ref: 3900 },
  { name: 'Nov 01', price: 4150, ref: 4000 },
  { name: 'Nov 15', price: 4320, ref: 4100 },
];

const PalmOilScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-dark text-white font-display">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-sm border-b border-[#2c3335] px-6 py-4 lg:px-10">
        <div className="flex flex-wrap gap-2 mb-2 items-center">
          <Link to="/" className="text-text-muted text-xs font-medium uppercase hover:text-white transition-colors">Home</Link>
          <span className="text-text-muted text-xs">/</span>
          <span className="text-text-muted text-xs font-medium uppercase">Commodities</span>
          <span className="text-text-muted text-xs">/</span>
          <span className="text-primary text-xs font-bold uppercase">Palm Oil</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight font-display">パーム油市場詳細分析</h2>
            <p className="text-text-muted text-sm max-w-2xl mt-1">
              2026年 小麦・パーム油市場の価格動向分析レポートと食品メーカー向けの取引戦略
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-lighter hover:bg-[#2c3335] rounded-lg text-white text-sm border border-[#2c3335] transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Report PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover rounded-lg text-white text-sm shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">add_alert</span>
              Set Alert
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full space-y-8">
        {/* Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-dark p-2 rounded-xl border border-[#2c3335]">
          <div className="flex items-center gap-2 px-2">
            <button className="p-2 hover:bg-[#2c3335] rounded-full text-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-2 px-2">
              <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
              <span className="text-white text-sm font-bold font-mono">OCT 2025 - NOV 2025</span>
            </div>
            <button className="p-2 hover:bg-[#2c3335] rounded-full text-white transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="flex h-10 items-center justify-center rounded-lg bg-[#2c3335] p-1">
            <button className="px-4 h-full rounded bg-surface-dark text-white text-xs font-bold uppercase">Chart View</button>
            <button className="px-4 h-full rounded text-text-muted text-xs font-bold uppercase hover:text-white">Table View</button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surface-dark rounded-xl border border-[#2c3335] p-6 shadow-xl h-[400px] flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white text-lg font-bold font-mono uppercase tracking-wide">BMD Futures (MYR/Tonne)</h3>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"></span><span className="text-[10px] text-text-muted">Futures</span></div>
                <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500"></span><span className="text-[10px] text-text-muted">Ref Price</span></div>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={palmChartData}>
                  <defs>
                    <linearGradient id="palmGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2d687b" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#2d687b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2c3335" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#666" fontSize={10} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
                  <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #333' }} />
                  <Area type="monotone" dataKey="price" stroke="#2d687b" strokeWidth={3} fill="url(#palmGrad)" />
                  <Area type="monotone" dataKey="ref" stroke="#10b981" strokeDasharray="4 4" fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-surface-dark rounded-xl border border-[#2c3335] p-6 flex flex-col justify-center">
              <p className="text-text-muted text-xs font-medium mb-1 uppercase tracking-wider">Spot Price (Rotterdam)</p>
              <p className="text-4xl text-white font-bold font-mono">$1,045.00</p>
              <div className="flex items-center gap-1 mt-2 text-emerald-500 bg-emerald-500/10 w-fit px-2 py-0.5 rounded text-[10px] font-bold">
                <span className="material-symbols-outlined text-[12px]">trending_up</span>
                <span>+2.4% WoW</span>
              </div>
            </div>
            <div className="flex-1 bg-surface-dark rounded-xl border border-[#2c3335] p-6 flex flex-col justify-center">
              <p className="text-text-muted text-xs font-medium mb-1 uppercase tracking-wider">Export Levy (Indonesia)</p>
              <p className="text-4xl text-white font-bold font-mono">$85.00</p>
              <p className="text-[10px] text-text-muted mt-2">Effective Nov 1-15</p>
            </div>
          </div>
        </div>

        {/* Impact Factors */}
        <div>
          <h3 className="text-white text-xl font-bold font-mono uppercase tracking-wide mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            Key Impact Factors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-dark p-5 rounded-xl border border-[#2c3335] hover:border-primary transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#2c3335] rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">local_gas_station</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">High Impact</span>
              </div>
              <h4 className="text-white text-base font-bold mb-2">バイオ燃料政策 (B40)</h4>
              <p className="text-text-muted text-xs leading-relaxed mb-4">インドネシアのB40義務化は国内消費を200万トン増加させ、価格を下支えします。</p>
              <div className="h-1 w-full bg-[#2c3335] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="bg-surface-dark p-5 rounded-xl border border-[#2c3335] hover:border-orange-500 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#2c3335] rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">agriculture</span>
                </div>
                <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded uppercase">Medium Risk</span>
              </div>
              <h4 className="text-white text-base font-bold mb-2">構造的供給制約</h4>
              <p className="text-text-muted text-xs leading-relaxed mb-4">労働力不足は緩和傾向ですが、老齢樹の増加により収量回復は限定的です。</p>
              <div className="h-1 w-full bg-[#2c3335] rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="bg-surface-dark p-5 rounded-xl border border-[#2c3335] hover:border-blue-500 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#2c3335] rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">thermostat</span>
                </div>
                <span className="text-[10px] font-bold text-text-muted bg-[#2c3335] px-2 py-0.5 rounded uppercase">Neutral</span>
              </div>
              <h4 className="text-white text-base font-bold mb-2">気候変動 (La Niña)</h4>
              <p className="text-text-muted text-xs leading-relaxed mb-4">降雨増加が期待されますが、一部地域での洪水リスクに注意が必要です。</p>
              <div className="h-1 w-full bg-[#2c3335] rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="bg-surface-dark p-5 rounded-xl border border-[#2c3335] hover:border-purple-500 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#2c3335] rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <span className="text-[10px] font-bold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded uppercase">Strategic</span>
              </div>
              <h4 className="text-white text-base font-bold mb-2">EUDR・規制対応</h4>
              <p className="text-text-muted text-xs leading-relaxed mb-4">欧州森林破壊防止規則への対応コストが上昇し、供給チェーンに影響します。</p>
              <div className="h-1 w-full bg-[#2c3335] rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bullish Sentiment Box */}
        <div className="bg-gradient-to-r from-primary/10 to-surface-dark rounded-xl border border-primary/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex-1">
            <h3 className="text-white text-2xl font-bold font-mono uppercase tracking-wide mb-2">2026 Price Outlook</h3>
            <p className="text-text-muted mb-4 max-w-2xl text-sm leading-loose">
              バイオ燃料需要の構造的増加と供給の硬直性により、2026年は<strong>強気相場 (Bullish Trend)</strong> が継続する見通しです。価格下落局面でのヘッジ比率向上を推奨します。
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-emerald-500 font-bold uppercase">Support: 3,800 MYR</span>
              <span className="text-xs text-red-500 font-bold uppercase">Resistance: 4,600 MYR</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#2c3335]/50 rounded-full size-32 border-4 border-emerald-500/30">
            <span className="text-xl font-black text-white font-mono">BULLISH</span>
            <span className="text-[10px] text-text-muted uppercase tracking-widest">Sentiment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalmOilScreen;
