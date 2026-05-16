import React from 'react';

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 w-full bg-slate-100/40 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 py-32 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Satu Profil, Beragam Format Profesional</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Cukup isi profil Anda sekali, lalu ubah menjadi berbagai jenis dokumen yang memukau dan siap mencuri perhatian HRD.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: CV Optimal ATS */}
          <div className="bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:border-blue-500/30 transition-all group flex flex-col">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">CV Optimal ATS</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed flex-1">Tanpa tabel, tanpa grafik. Hanya gaya markdown murni dan semantik yang dirancang untuk lolos dengan sempurna di Workday, Greenhouse, dan sistem ATS perusahaan top lainnya.</p>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50 w-full">
              <div className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                Pratinjau Format
              </div>
              <div className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 relative overflow-hidden group-hover:border-blue-500/50 transition-colors">
                <div className="w-1/3 h-3 bg-slate-800 dark:bg-slate-200 rounded mx-auto mb-2" />
                <div className="w-1/4 h-2 bg-slate-400 dark:bg-slate-500 rounded mx-auto mb-4" />
                <div className="w-full h-px bg-slate-300 dark:bg-slate-700 mb-3" />
                <div className="w-1/4 h-2.5 bg-slate-600 dark:bg-slate-400 rounded mb-2" />
                <div className="w-full flex justify-between mb-2">
                  <div className="w-1/3 h-2 bg-slate-800 dark:bg-slate-300 rounded" />
                  <div className="w-1/5 h-2 bg-slate-400 dark:bg-slate-500 rounded" />
                </div>
                <div className="space-y-1.5 pl-3">
                  <div className="w-[90%] h-1.5 bg-slate-300 dark:bg-slate-600 rounded" />
                  <div className="w-[85%] h-1.5 bg-slate-300 dark:bg-slate-600 rounded" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
              </div>
            </div>
          </div>

          {/* Feature 2: Portfolio Web Visual */}
          <div className="bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all group flex flex-col">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Portfolio Web Visual</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed flex-1">Tampil menonjol secara visual di mata perekrut (manusia). Tipografi indah, menu samping, dan tata letak modern yang dikompilasi menjadi dokumen presentasi web rapi.</p>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50 w-full">
              <div className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                Pratinjau Format
              </div>
              <div className="w-full rounded-xl bg-slate-50 dark:bg-[#070B19] border border-slate-200 dark:border-slate-700 overflow-hidden relative group-hover:border-indigo-500/50 transition-colors flex h-[140px]">
                <div className="w-1/3 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-3 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 mb-1" />
                  <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded mt-2" />
                  <div className="w-2/3 h-1 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-1" />
                  <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded" />
                  <div className="w-3/4 h-1 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>
                <div className="flex-1 p-4 bg-slate-50 dark:bg-[#0B1221]">
                  <div className="w-1/2 h-3 bg-slate-800 dark:bg-slate-200 rounded mb-2" />
                  <div className="w-1/3 h-1.5 bg-indigo-500/50 rounded mb-4" />
                  <div className="grid grid-cols-1 gap-2">
                    <div className="h-10 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2 border-l-4 border-l-indigo-500">
                      <div className="w-1/2 h-1.5 bg-slate-800 dark:bg-slate-300 rounded mb-1.5" />
                      <div className="w-3/4 h-1 bg-slate-400 dark:bg-slate-500 rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-50 dark:from-[#0B1221] to-transparent" />
              </div>
            </div>
          </div>

          {/* Feature 3: Tautan Bio Profil */}
          <div className="bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all group flex flex-col">
            <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/40 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Tautan Bio Profil</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed flex-1">Ubah pengalaman Anda menjadi situs portofolio mini. Tampilan memukau, tata letak khusus ponsel, ideal untuk dipasang di bio Instagram/TikTok pendukung CV utama.</p>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50 w-full">
              <div className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                Pratinjau Format
              </div>
              <div className="w-full flex justify-center">
                <div className="w-[100px] h-[140px] rounded-[1.5rem] bg-slate-50 dark:bg-[#0F172A] border-[4px] border-slate-300 dark:border-slate-700 relative overflow-hidden group-hover:border-cyan-500/50 transition-colors p-3 flex flex-col items-center">
                  <div className="w-2 h-0.5 bg-slate-600 rounded-full mb-3" />
                  <div className="w-10 h-10 rounded-full bg-cyan-900 border-2 border-cyan-500 mb-2" />
                  <div className="w-16 h-1.5 bg-white rounded mb-1.5" />
                  <div className="w-10 h-1 bg-cyan-400 rounded mb-4" />
                  <div className="w-full space-y-2 mt-auto">
                    <div className="w-full h-5 bg-cyan-900/50 rounded-md border border-cyan-500/40" />
                    <div className="w-full h-5 bg-slate-800 rounded-md border border-slate-700 shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
