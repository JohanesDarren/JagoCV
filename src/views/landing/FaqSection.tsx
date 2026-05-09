import React from 'react';
import FaqItem from '../../components/ui/FaqItem';

const FAQ_DATA = [
  { question: 'Apakah jagoCV benar-benar gratis?', answer: 'Ya, Anda dapat memulai dan membuat resume ATS atau portofolio pertama Anda secara gratis. Kami juga memiliki paket berbayar untuk fitur AI tingkat lanjut dan penyesuaian tanpa batas di masa mendatang.' },
  { question: 'Bagaimana cara kerja AI dalam menulis resume saya?', answer: 'Anda hanya perlu memasukkan detail pengalaman kerja secara mentah atau poin-poin sederhana. Mesin AI kami akan menyusunnya dengan kalimat aktif bercerita (action verbs) yang berfokus pada hasil dan pencapaian, bukan hanya tugas harian Anda, menjadikannya ramah ATS.' },
  { question: 'Apakah format CV yang dihasilkan lulus sistem ATS?', answer: 'Tentu saja! Template CV ATS kami didesain tanpa kolom ganda, tabel kompleks, atau grafis berlebihan yang biasanya menyebabkan sistem ATS (Applicant Tracking System) gagal memilah resume Anda. Strukturnya murni semantik, memudahkan scanner otomatis membedakan mana judul, instansi, dan deskripsi.' },
  { question: 'Apakah portofolio web saya mendapatkan tautan unik?', answer: 'Ya! Setiap hasil \'Web Portfolio\' atau \'Link in Bio\' yang Anda buat dirancang agar dapat diakses publik melalui URL yang bisa dengan mudah Anda tambahkan di bio profil seperti Instagram dan LinkedIn, atau dikirim langsung ke perekrut lewat WhatsApp dan Email.' },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative z-10 w-full py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-full bg-cyan-500/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Pusat Bantuan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Tanya Jawab</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl">Semua yang perlu Anda ketahui tentang menggunakan jagoCV.</p>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
