
import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <header className="h-16 border-b border-[#2A2A2A] bg-[#121212]/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-gray-500">search</span>
        <input className="bg-transparent border-none text-sm text-white placeholder-gray-600 focus:ring-0 w-48 md:w-64" placeholder="Search markets, commodities..." type="text"/>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 bg-[#1E1E1E] px-3 py-1.5 rounded-full border border-[#2A2A2A]">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span>2026 Forecast</span>
        </div>
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-[#121212]"></span>
        </button>
        <div className="size-8 rounded-full bg-cover bg-center border border-gray-700 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEI9M4R812r4WFz5WYLThNtIv3o1e4MEOr5ZRyo_AAMxfvr9zYv6JEvV1X7D5eNhhtITlm9cbzTuFW3dO1QSf9o8taYiK8Vt_fn2crQHR2E3MvpasMiPJr8RCaVkfYPuD0i3KFuWsxB6a8qhNo39O8SpjeKTgxZJ7iztOmpfnT_Haqjz87LfYuxq0l_Jr7twc3CCuxFkw10BKvj_VBf0oam20yJngv65IwI7eq29hjQsjqqy3pFS2tKQZpqqzLyVM3JOCf0ds2Cno")'}}></div>
      </div>
    </header>
  );
};

export default TopHeader;
