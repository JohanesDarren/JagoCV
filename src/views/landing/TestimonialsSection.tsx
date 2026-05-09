import React from 'react';
import TestimonialCard from '../../components/ui/TestimonialCard';

// ===================================================================
// TESTIMONIAL DATA — Extracted from 12x inline card duplicates
// ===================================================================

const TESTIMONIALS = [
  { quote: 'Dulu bikin CV dan portofolio rasanya butuh waktu berhari-hari. Berkat AI jagoCV, semuanya langsung tersusun rapi, profesional, dan tajam. Gak nyangka, minggu depannya langsung dapat jadwal interview!', name: 'Andi Pratama', role: 'Frontend Developer', avatarColor: '#3B82F6', rating: 5 },
  { quote: 'Konsep dari satu profil jadi 3 format (CV ATS, Web Portfolio, dan Link in Bio) ini brilian banget! AI-nya pintar merangkai kata-kata yang persuasif. Menghemat banyak waktu buat siap-siap melamar kerja.', name: 'Siti Rahma', role: 'UX Designer', avatarColor: '#00D49C', rating: 4 },
  { quote: 'Akhirnya nemu CV builder yang benar-benar sadar struktur ATS. Dulu sering di-ghosting rekruter, tapi sejak pakai format jagoCV, profil saya lebih gampang dilirik dan sukses tembus di startup impian.', name: 'Kevin Wijaya', role: 'Product Manager', avatarColor: '#06B6D4', rating: 5 },
  { quote: 'Nggak nyangka CV hasil AI bisa sedetail ini buat role data. Sangat mempermudah menjabarkan impact project yang sebelumnya susah saya tulis sendiri. Worth it banget!', name: 'Budi Santoso', role: 'Data Analyst', avatarColor: '#8B5CF6', rating: 4 },
  { quote: 'Fitur Web Portfolio benar-benar jadi game changer buat aku show off campaign yang pernah aku jalanin. Sempet ragu tapi hasilnya jauh melebihi ekspektasi. Terima kasih jagoCV!', name: 'Rina Amelia', role: 'Digital Marketer', avatarColor: '#EC4899', rating: 4 },
  { quote: 'Mantap! Sebagai engineer sering malas nulis kata-kata yang bagus di CV, AI langsung nangkep maksudku dan jadinya profesional. Bakal rekomen ke teman-teman kampus.', name: 'Dimas Aditya', role: 'Backend Engineer', avatarColor: '#F97316', rating: 5 },
];

// Duplicate for infinite marquee effect
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 w-full py-32 px-6 bg-slate-50 dark:bg-[#070B19]/50 border-y border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[400px] bg-gradient-to-t from-blue-500/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            Cerita Sukses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Apa Kata Mereka</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">Bergabunglah dengan ribuan profesional yang telah meraih pekerjaan impian mereka berkat portofolio dan resume yang dioptimalkan oleh AI.</p>
        </div>

        <div className="relative z-10 overflow-hidden pb-8 px-4 md:px-0" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
          <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
            {MARQUEE_ITEMS.map((t, i) => (
              <TestimonialCard key={i} quote={t.quote} name={t.name} role={t.role} avatarColor={t.avatarColor} rating={t.rating} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
