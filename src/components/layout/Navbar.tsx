import React from 'react';

interface NavbarProps {
  userName?: string;
  userRole?: string;
  profileImageUrl?: string;
  onProfileClick?: () => void;
  onThemeToggle?: () => void;
}

export default function Navbar({ userName, userRole, profileImageUrl, onProfileClick, onThemeToggle }: NavbarProps) {
  return (
    <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#070B19]/80 backdrop-blur-md sticky top-0 z-50 animate-[slideDown_0.3s_ease_forwards]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/JagoCV.png" alt="jagoCV Logo" className="h-8 w-auto block dark:hidden" />
          <img src="/JagoCV%20BW.png" alt="jagoCV Logo" className="h-8 w-auto hidden dark:block" />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onThemeToggle} className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
            <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            <svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </button>
          <button onClick={onProfileClick} className="flex items-center gap-4 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 p-1.5 pr-2 rounded-full transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700/50 cursor-pointer">
            <div className="hidden md:block text-right">
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{userName}</div>
              <div className="text-xs text-blue-400">{userRole}</div>
            </div>
            <img src={profileImageUrl} alt="Profile" className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 object-cover" />
          </button>
        </div>
      </div>
    </nav>
  );
}
