import React from 'react';

export default function FooterSection() {
  return (
    <footer className="relative z-10 w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-[#040711] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img src="/JagoCV.png" alt="jagoCV Logo" className="h-6 w-auto block dark:hidden" />
          <img src="/JagoCV%20BW.png" alt="jagoCV Logo" className="h-6 w-auto hidden dark:block" />
        </div>
        <div className="flex gap-6 text-sm text-slate-500 font-medium">
          <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Ketentuan Layanan</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Kontak</a>
        </div>
        <p className="text-sm text-slate-600">&copy; 2026 jagoCV AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
