import React from 'react';

export default function CtaSection() {
  return (
    <section className="relative z-10 w-full py-24 pb-40 text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Siap Mendapatkan Wawancara Itu?</h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Bergabunglah dengan ribuan pencari kerja yang memperbarui portofolio karir mereka tanpa stres.</p>
      <button id="btn-cta-launch" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full font-bold text-xl shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1 inline-flex flex-col items-center leading-tight">
        Mulai Buat Gratis
        <span className="text-xs font-medium text-blue-100 opacity-80 mt-1">Tanpa kartu kredit</span>
      </button>
    </section>
  );
}
