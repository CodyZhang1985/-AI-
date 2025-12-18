import React from 'react';
import { AppView } from '../types';
import { Terminal, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 glass-panel border-b-0 rounded-none border-white/10 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-gradient-to-tr from-neon-cyan to-neon-blue flex items-center justify-center">
          <span className="text-black font-bold font-mono">H</span>
        </div>
        <span className="text-white font-bold tracking-wide hidden sm:block">海纳万商 <span className="font-light text-gray-400">| 智能先锋</span></span>
      </div>

      <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-white/10">
        <button
          onClick={() => onChangeView(AppView.PLAN)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all ${
            currentView === AppView.PLAN 
              ? 'bg-white/10 text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="flex items-center gap-2">
            <Terminal size={16} />
            <span>先锋计划</span>
          </span>
        </button>
        <button
          onClick={() => onChangeView(AppView.CURRICULUM)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all ${
            currentView === AppView.CURRICULUM 
              ? 'bg-white/10 text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>课程体系</span>
          </span>
        </button>
      </div>
    </nav>
  );
};