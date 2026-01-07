
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 
      "bg-primary text-white shadow-lg shadow-primary/20" : 
      "text-gray-400 hover:bg-[#2A2A2A] hover:text-white";
  };

  const iconClass = (path: string) => {
    return location.pathname === path ? "" : "group-hover:text-secondary group-hover:scale-110 transition-colors";
  };

  return (
    <aside className="w-20 lg:w-64 flex flex-col justify-between border-r border-[#2A2A2A] bg-[#161616] transition-all duration-300 z-20 shrink-0 h-screen">
      <div className="flex flex-col gap-8 p-4">
        {/* Brand */}
        <div className="flex items-center gap-3 px-2">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-[#2A2A2A]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6gSdX3HBZgrnXIE682CpB_ftW2iGKDanZ0ubkcZuKqIsviAS0bf9gL5jpZ_HVbZdqm7qHUjSV0tYFJk8wDXJGs0QSJ4u-LwkWrBVvWAsgGHNjgbUWm0h-qDuhAVgWgchGwW_8qVD_ar42ZQOQSvZJf8dhtR0T1vPK3WUlu2mplfE1A2X8wfVJKBmrE4bRqOF2mpJIOekBMW5C-HjAzI9qgoOfPltpF1SVgqhCh1fLJxBaYgEjdvMO0clQdbtrfDVOjRI0K4qN7_U")'}}></div>
          <div className="hidden lg:flex flex-col">
            <h1 className="text-white text-sm font-bold tracking-wide uppercase font-heading">Market<span className="text-primary">Intel</span></h1>
            <p className="text-gray-500 text-xs">Strategic Sourcing</p>
          </div>
        </div>
        
        {/* Nav Items */}
        <nav className="flex flex-col gap-2">
          <Link to="/" className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all group ${isActive('/')}`}>
            <span className={`material-symbols-outlined text-2xl ${iconClass('/')}`}>dashboard</span>
            <span className="hidden lg:block text-sm font-medium">市場概要</span>
          </Link>
          <Link to="/wheat" className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all group ${isActive('/wheat')}`}>
            <span className={`material-symbols-outlined text-2xl ${iconClass('/wheat')}`}>grass</span>
            <span className="hidden lg:block text-sm font-medium">小麦分析</span>
          </Link>
          <Link to="/palm" className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all group ${isActive('/palm')}`}>
            <span className={`material-symbols-outlined text-2xl ${iconClass('/palm')}`}>water_drop</span>
            <span className="hidden lg:block text-sm font-medium">パーム油分析</span>
          </Link>
          <button className="flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:bg-[#2A2A2A] hover:text-white transition-all group text-left">
            <span className="material-symbols-outlined text-2xl group-hover:text-secondary transition-colors">description</span>
            <span className="hidden lg:block text-sm font-medium">レポート</span>
          </button>
        </nav>
      </div>
      
      <div className="p-4 border-t border-[#2A2A2A]">
        <button className="flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:bg-[#2A2A2A] hover:text-white transition-all w-full text-left">
          <span className="material-symbols-outlined text-2xl">settings</span>
          <span className="hidden lg:block text-sm font-medium">設定</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
