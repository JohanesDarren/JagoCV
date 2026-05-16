import React from 'react';

interface LandingNavProps {
  onLoginClick?: () => void;
  onThemeToggle?: () => void;
}

export default function LandingNav({ onLoginClick, onThemeToggle }: LandingNavProps) {
  return (
    <nav className="w-full fixed top-0 z-50 bg-slate-50/80 dark:bg-[#070B19]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/JagoCV.png" alt="jagoCV Logo" className="h-10 w-auto block dark:hidden" />
          <img src="/JagoCV%20BW.png" alt="jagoCV Logo" className="h-10 w-auto hidden dark:block" />
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hidden md:block text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white font-medium transition-colors">Fitur</a>
          <a href="#how-it-works" className="hidden md:block text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white font-medium transition-colors">Cara Kerja</a>
          <a href="#testimonials" className="hidden md:block text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white font-medium transition-colors">Testimoni</a>
          <a href="#pricing" className="hidden md:block text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white font-medium transition-colors">Langganan</a>
          <a href="#faq" className="hidden md:block text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white font-medium transition-colors">FAQ</a>

          <button onClick={onThemeToggle} className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
            <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            <svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </button>

          <button onClick={onLoginClick} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">Masuk</button>
        </div>
      </div>
    </nav>
  );
}
