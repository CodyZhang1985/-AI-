import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { PlanView } from './components/PlanView.tsx';
import { CurriculumView } from './components/CurriculumView.tsx';
import { AppView } from './types.ts';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.PLAN);

  return (
    <div className="min-h-screen bg-surface-dark text-white font-sans selection:bg-neon-cyan selection:text-black">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="pt-16">
        {currentView === AppView.PLAN ? (
          <PlanView />
        ) : (
          <CurriculumView />
        )}
      </main>

      <footer className="border-t border-white/10 bg-surface-dark py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 海纳万商智能先锋计划 | 内部机密资料，请勿外传
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-gray-600 font-mono">
            <span>VER: 1.0.4</span>
            <span>BUILD: AI_CORE</span>
            <span>SECURE: TRUE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;