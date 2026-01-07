
import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const detailedWheatData = [
  { name: 'Jan', cbot: 6.2, fob: 6.8 },
  { name: 'Feb', cbot: 6.3, fob: 6.9 },
  { name: 'Mar', cbot: 6.1, fob: 6.75 },
  { name: 'Apr', cbot: 6.5, fob: 7.1 },
  { name: 'May', cbot: 6.7, fob: 7.3 },
  { name: 'Jun', cbot: 6.45, fob: 7.12 },
];

const WheatScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Breadcrumbs Header */}
      <header className="h-16 border-b border-border-color bg-background-dark/95 backdrop-blur-sm flex items-center justify-between px-6 z-10 shrink-0">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-text-muted hover:text-white">Home</Link>
          <span className="text-text-muted">/</span>
          <span className="text-text-muted">2026 Report</span>
          <span className="text-text-muted">/</span>
          <span className="text-white font-medium">小麦市場詳細分析</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-surface-dark border border-border-color hover:border-primary/50 text-white px-3 py-1.5 rounded text-xs transition-colors">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>2025年1月 - 2026年12月</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
          {/* Title and actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 font-heading">小麦市場詳細分析</h2>
              <p className="text-text-muted text-sm max-w-2xl">
                2026年 価格動向分析、リスク要因、および食品メーカー向け取引戦略レポート
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-surface-dark border border-border-color text-white rounded-lg text-sm hover:bg-surface-lighter transition-colors">共有</button>
              <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors">レポート出力 (PDF)</button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Charts & Data */}
            <div className="xl:col-span-8 space-y-6">
              <div className="bg-surface-dark border border-border-color rounded-xl p-6 shadow-sm relative overflow-hidden h-[450px] flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading tracking-wide">価格推移：CBOT先物 vs FOB現物</h3>
                    <p className="text-xs text-text-muted mt-1">単位: USD/Bushel</p>
                  </div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-right">
                      <p className="text-xs text-text-muted uppercase font-bold">CBOT 最新</p>
                      <p className="text-2xl font-bold text-white tracking-tight">$6.45 <span className="text-xs text-accent-red">-1.2%</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={detailedWheatData}>
                      <defs>
                        <linearGradient id="colorCbot" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2d687b" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#2d687b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                      <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #333' }} />
                      <Legend verticalAlign="top" align="right" />
                      <Area name="CBOT Futures" type="monotone" dataKey="cbot" stroke="#2d687b" strokeWidth={3} fillOpacity={1} fill="url(#colorCbot)" />
                      <Area name="FOB Physical" type="monotone" dataKey="fob" stroke="#888" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-surface-dark border border-border-color rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-border-color bg-surface-lighter/30">
                  <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wide">市場データ詳細</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-lighter text-xs text-text-muted font-bold uppercase border-b border-border-color">
                        <th className="p-4">日付</th>
                        <th className="p-4 text-right">始値 (Open)</th>
                        <th className="p-4 text-right">終値 (Close)</th>
                        <th className="p-4 text-right">前日比</th>
                        <th className="p-4 text-right">出来高</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-mono divide-y divide-border-color">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="p-4 text-white">2026-06-15</td>
                        <td className="p-4 text-right text-text-muted">642.50</td>
                        <td className="p-4 text-right text-white font-bold">645.00</td>
                        <td className="p-4 text-right text-accent-red">-1.25%</td>
                        <td className="p-4 text-right text-text-muted">124K</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors bg-surface-lighter/10">
                        <td className="p-4 text-white">2026-06-14</td>
                        <td className="p-4 text-right text-text-muted">650.00</td>
                        <td className="p-4 text-right text-white font-bold">653.25</td>
                        <td className="p-4 text-right text-accent-green">+0.50%</td>
                        <td className="p-4 text-right text-text-muted">98K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Insights Column */}
            <div className="xl:col-span-4 space-y-6">
              <div className="bg-surface-dark border border-border-color rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-color">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider">マーケットインサイト</h3>
                </div>

                <div className="p-4 bg-surface-lighter/30 rounded-lg border border-border-color">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-sm">供給過剰予測</h4>
                    <span className="text-[10px] font-bold text-accent-green bg-accent-green/10 px-2 py-0.5 rounded uppercase">Low Risk</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">オーストラリアとロシアでの記録的な豊作により、供給が需要を上回る見込みです。</p>
                </div>

                <div className="p-4 bg-surface-lighter/30 rounded-lg border border-border-color">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-sm">地政学的リスク</h4>
                    <span className="text-[10px] font-bold text-accent-red bg-accent-red/10 px-2 py-0.5 rounded uppercase">High Alert</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">黒海穀物回廊の合意不確実性が、短期的なボラティリティ要因となっています。</p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                  <h4 className="text-white text-sm font-bold flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                    推奨アクション
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed italic">
                    食品メーカーは現時点での長期契約を避け、Q3に向けたスポット購入比率を高めることを推奨します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheatScreen;
