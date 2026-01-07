
import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const wheatData = [
  { name: 'Jan', price: 6.8 },
  { name: 'Feb', price: 7.0 },
  { name: 'Mar', price: 6.9 },
  { name: 'Apr', price: 7.2 },
  { name: 'May', price: 7.4 },
  { name: 'Jun', price: 7.5 },
];

const palmData = [
  { name: 'Jan', price: 4200 },
  { name: 'Feb', price: 4100 },
  { name: 'Mar', price: 3950 },
  { name: 'Apr', price: 3900 },
  { name: 'May', price: 3850 },
  { name: 'Jun', price: 3800 },
];

const DashboardScreen: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8 pb-20">
      {/* Page Heading & Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h2 className="text-primary font-heading font-bold tracking-wider text-sm mb-1 uppercase">Procurement Strategy</h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">2026年 市場展望レポート</h1>
          <p className="text-gray-400 mt-2 max-w-2xl text-sm leading-relaxed">
            小麦とパーム油の価格動向、需給バランス、および調達リスクの包括的分析。
            <span className="text-secondary ml-2 whitespace-nowrap">AI予測モデル更新済み: 2025/12/15</span>
          </p>
        </div>
        <button className="group flex items-center gap-3 bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-[#2A2A2A] text-white px-5 py-3 rounded-lg transition-all shadow-lg hover:shadow-primary/10">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">download</span>
          <span className="text-sm font-bold">レポート出力 (PDF)</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-[#1E1E1E] p-5 rounded-2xl border border-[#2A2A2A] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
            <span className="material-symbols-outlined text-9xl">public</span>
          </div>
          <div className="flex justify-between items-start z-10">
            <span className="text-gray-400 text-sm font-medium">世界インフレ率予測</span>
            <span className="material-symbols-outlined text-primary">trending_flat</span>
          </div>
          <div className="z-10">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white font-heading">3.2%</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">-0.5% YoY</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">安定傾向・地域差あり</p>
          </div>
        </div>
        <div className="bg-[#1E1E1E] p-5 rounded-2xl border border-[#2A2A2A] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
            <span className="material-symbols-outlined text-9xl">directions_boat</span>
          </div>
          <div className="flex justify-between items-start z-10">
            <span className="text-gray-400 text-sm font-medium">海上運賃指数 (BDI)</span>
            <span className="material-symbols-outlined text-secondary">trending_up</span>
          </div>
          <div className="z-10">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white font-heading">1,450</span>
              <span className="text-xs font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">+1.2% MoM</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">輸送コスト微増予想</p>
          </div>
        </div>
        <div className="bg-[#1E1E1E] p-5 rounded-2xl border border-[#2A2A2A] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
            <span className="material-symbols-outlined text-9xl">shield</span>
          </div>
          <div className="flex justify-between items-start z-10">
            <span className="text-gray-400 text-sm font-medium">総合リスクスコア</span>
            <span className="material-symbols-outlined text-gray-500">verified_user</span>
          </div>
          <div className="z-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white font-heading">Medium</span>
              <div className="flex gap-1 h-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">地政学リスクを注視</p>
          </div>
        </div>
      </div>

      {/* Main Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -ml-6 w-12 flex-col items-center justify-center z-10 pointer-events-none">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent"></div>
          <div className="absolute top-12 bg-[#121212] border border-[#2A2A2A] p-2 rounded-full text-gray-500 shadow-xl">
            <span className="material-symbols-outlined text-sm">compare_arrows</span>
          </div>
        </div>

        {/* Wheat Section */}
        <section className="flex flex-col gap-4">
          <Link to="/wheat" className="block group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-primary"></div>
                <h3 className="text-xl font-heading font-bold text-white tracking-wide group-hover:text-primary transition-colors">WHEAT / 小麦</h3>
              </div>
              <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">強気相場入り</span>
            </div>
          </Link>
          
          <Link to="/wheat" className="block">
            <div className="bg-[#1E1E1E] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg relative overflow-hidden hover:border-primary/50 transition-all h-[340px] flex flex-col">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Price Forecast (USD/bu)</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-white font-heading">$7.50</span>
                    <span className="flex items-center text-sm font-bold text-emerald-400">
                      <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                      +2.4%
                    </span>
                  </div>
                </div>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-md">詳細を見る</span>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={wheatData}>
                    <defs>
                      <linearGradient id="colorWheat" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2d687b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2d687b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #2A2A2A', color: '#fff' }} />
                    <Area type="monotone" dataKey="price" stroke="#2d687b" fillOpacity={1} fill="url(#colorWheat)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2A2A2A]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-gray-400 text-lg">inventory_2</span>
                <span className="text-xs text-gray-400 font-bold uppercase">在庫レベル</span>
              </div>
              <p className="text-white font-medium">逼迫 (Tight)</p>
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2">
                <div className="bg-red-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2A2A2A]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-gray-400 text-lg">flag</span>
                <span className="text-xs text-gray-400 font-bold uppercase">主要生産国</span>
              </div>
              <div className="flex gap-2">
                <div className="size-5 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0CvC53UdyLKnyLDNxnXO6dMjstPAkthR_QptgxFBYch0hWjaWT1LZh5q98g3bWk29SGoUbVbTBsH3V3rSYcS-cL9A6lnWd6OtgmVScgN92tGTiInzgXt1RnO0YlxsyCCoA0TevbtVWGh8bRm3z4Y3cFuFALZMVcEoLOLdVdrgE7IRgi4zWr6uy3Y-y04g5rlAyYE3R5aD61NNNHiAE277WdPmu3HQUusGGP_D5XH_jK55NgntGRvi9qMNU9crWNStmfpDMCotEWM")'}}></div>
                <div className="size-5 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzYfxqEqx1448_7kzhSzy5Wv3NwDkRehCVecVNRjVLKFpYUVoqTvK1aBME39bE3QYCaWXuCb1aINwr1yC9wEwy_alUprsYFzZooi2QqG_DiZIYBKmJP77Zg-T8RQaDx6Yk5YPmcGxtsC6BxKulUT7-HYRuBhg2GXgHRzUguha8qoaLymEFQYUTOFBZWquBeZ56CUOILY5d2MDH3HNeNU9DgdTm31NNzqLeFBU_QBSl0mYr4MlgwLdCVQJ4OlyylINEOByPtRZbgg8")'}}></div>
                <div className="size-5 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCXdfMtiWnyZReOX9-o7GyUqEjGYyIB7YE4nH5lJ4gJsrXpfSswRX825-dDR0gPEVSLfMhHdYmMo1c8UxPCtYMDcega_Q5Q0AhcmfXSl5nb62kcmuaSlPRxMgIrfDGd3H883Igf4O9uNDn2PTXovZeQ7HVKoVX8qx181RypSfJzSiLNJnP7hzMCYH1d-OiIExpOrb1pyvdVjgXTYtRYdC_BavCxpgJgkI_k6q2SKqYSHPgKGm5SqHaZa5t7coJsIYUCdO6xibpvaQ")'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Oil Section */}
        <section className="flex flex-col gap-4">
          <Link to="/palm" className="block group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-secondary"></div>
                <h3 className="text-xl font-heading font-bold text-white tracking-wide group-hover:text-secondary transition-colors">PALM OIL / パーム油</h3>
              </div>
              <span className="text-xs text-secondary bg-secondary/10 border border-secondary/20 px-2 py-1 rounded">調整局面</span>
            </div>
          </Link>

          <Link to="/palm" className="block">
            <div className="bg-[#1E1E1E] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg relative overflow-hidden hover:border-secondary/50 transition-all h-[340px] flex flex-col">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Price Forecast (MYR/ton)</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-white font-heading">3,800</span>
                    <span className="flex items-center text-sm font-bold text-red-400">
                      <span className="material-symbols-outlined text-sm mr-0.5">trending_down</span>
                      -1.2%
                    </span>
                  </div>
                </div>
                <span className="text-xs bg-secondary text-[#121212] font-bold px-3 py-1 rounded-md">詳細を見る</span>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={palmData}>
                    <defs>
                      <linearGradient id="colorPalm" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#bfa15f" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#bfa15f" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #2A2A2A', color: '#fff' }} />
                    <Area type="monotone" dataKey="price" stroke="#bfa15f" fillOpacity={1} fill="url(#colorPalm)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2A2A2A]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-gray-400 text-lg">water_drop</span>
                <span className="text-xs text-gray-400 font-bold uppercase">生産状況</span>
              </div>
              <p className="text-white font-medium">回復 (Recovery)</p>
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2">
                <div className="bg-secondary h-1.5 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2A2A2A]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-gray-400 text-lg">cloud</span>
                <span className="text-xs text-gray-400 font-bold uppercase">天候リスク</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">エルニーニョ</span>
                <span className="size-2 bg-yellow-500 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Strategic Verdict */}
      <div className="bg-gradient-to-r from-primary/20 via-[#1E1E1E] to-[#1E1E1E] border border-primary/30 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
        <div className="flex items-start gap-5 z-10 max-w-2xl">
          <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0">
            <span className="material-symbols-outlined text-2xl">lightbulb</span>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-1">AI調達推奨: 小麦の早期確保を推奨</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              北米の在庫逼迫予測に基づき、Q1中に2026年上半期分の小麦契約を固定することを強く推奨します。一方、パーム油はスポット購入での柔軟性を維持し、Q3の価格低下を待つのが最善策です。
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 z-10 w-full md:w-auto">
          <button className="flex-1 md:flex-none whitespace-nowrap bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-primary/20">
            シミュレーション実行
          </button>
          <Link to="/wheat" className="flex-1 md:flex-none whitespace-nowrap bg-[#2A2A2A] hover:bg-[#333] text-white font-medium py-3 px-6 rounded-lg border border-gray-700 transition-colors text-center">
            詳細分析へ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
