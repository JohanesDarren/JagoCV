import React from 'react';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative z-10 w-full py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-[11px] font-bold uppercase tracking-wider mb-6">
            Alat Editor AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.2]">Pilih Bagian, <br/>Tinggalkan Komentar.</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            Lupakan instruksi global yang membingungkan. Cukup <strong>pilih bagian mana saja</strong> pada resume Anda dan berikan komentar tentang apa yang ingin Anda ubah atau tingkatkan.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">1</div>
              <div>
                <h4 className="text-slate-800 dark:text-slate-200 font-semibold mb-1">Pilih Bagian</h4>
                <p className="text-slate-500 text-sm">Klik langsung pada paragraf, pengalaman kerja, atau tajuk tertentu di pratinjau CV Anda.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shadow-[0_0_10px_rgba(37,99,235,0.3)] flex-shrink-0">2</div>
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">Tinggalkan Komentar</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Contoh: "Buat poin-poin ini terdengar lebih profesional dan berfokus pada hasil pencapaian."</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">3</div>
              <div>
                <h4 className="text-slate-800 dark:text-slate-200 font-semibold mb-1">Langsung Disempurnakan</h4>
                <p className="text-slate-500 text-sm">AI akan fokus secara spesifik di bagian tersebut dan menyempurnakan kontennya dengan mulus.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Visual Demo */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full" />
          <div className="relative w-full max-w-md mx-auto bg-slate-100 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-700/60 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-[500px]">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50">
              <div className="w-1/2 h-6 bg-white dark:bg-slate-800 rounded mb-4" />
              <div className="w-full h-16 bg-white dark:bg-slate-800 rounded border border-blue-500/40 relative">
                <div className="absolute inset-x-0 inset-y-0 border-2 border-dashed border-blue-400 bg-blue-400/10 rounded flex items-center justify-center">
                  <span className="bg-blue-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full translate-y-[-100%] shadow-lg absolute top-0">Area Tertangkap</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-end gap-4 bg-slate-50 dark:bg-slate-950">
              <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-700 dark:text-slate-300 w-5/6 self-start">
                Saya melihat pengalaman kerja Anda belum menonjolkan dampak. Bagaimana Anda ingin memperbaikinya?
              </div>
              <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-3 text-sm text-white w-5/6 self-end">
                <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-blue-800/50 rounded mb-2 text-xs border border-blue-400/30">
                  Pengalaman Terpilih
                </div>
                <br/>
                Tulis ulang ini sepenuhnya. Fokus pada metrik di mana kami meningkatkan kinerja hingga 20%.
              </div>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <div className="flex-1 h-10 bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700" />
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
