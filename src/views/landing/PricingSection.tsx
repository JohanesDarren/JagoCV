import React from 'react';
import PricingCard from '../../components/ui/PricingCard';

// ===================================================================
// PRICING DATA — Extracted from 3 large inline plan blocks
// ===================================================================

const PLANS = [
  {
    name: 'Biasa',
    description: 'Gratis selamanya, cocok bagi yang baru memulai.',
    price: 'Rp 0',
    priceSuffix: '/bulan',
    variant: 'default' as const,
    ctaLabel: 'Mulai Gratis',
    features: [
      { text: 'Buat hingga 2 CV', included: true },
      { text: '1 Web Portfolio (Tema Standar)', included: true },
      { text: 'Akses AI Teks (Terbatas)', included: true },
      { text: 'Ekspor Multi-Format PDF/DOCX', included: false },
    ],
  },
  {
    name: 'Go',
    description: 'Buka potensi penuh untuk memaksimalkan peluang.',
    price: 'Rp 49K',
    priceSuffix: '/bulan',
    variant: 'featured' as const,
    ctaLabel: 'Pilih Go',
    features: [
      { text: 'Buat CV Tak Terbatas', included: true },
      { text: 'Semua Tema Web Portfolio (Termasuk Premium Animasi)', included: true },
      { text: 'Akses Penuh Fitur AI (Cover Letter, Perbaikan Teks, Analisis CV)', included: true },
      { text: 'Unduh PDF Kualitas Tinggi tanpa Watermark', included: true },
    ],
  },
  {
    name: 'Ultra',
    description: 'Bayar sekali, nikmati semua fitur unggulan selamanya.',
    price: 'Rp 299K',
    priceSuffix: '/sekali bayar',
    variant: 'premium' as const,
    ctaLabel: 'Pilih Ultra',
    features: [
      { text: 'Semua Fitur Go Tanpa Batas Waktu', included: true },
      { text: 'Akses Terdahulu ke Tema & Template Baru', included: true },
      { text: 'Dukungan Prioritas 24/7 (WhatsApp & Email)', included: true },
      { text: 'Custom Subdomain (opsi link personalisasi)', included: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden z-10 bg-slate-50 dark:bg-[#070B19]">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Langkah Tepat Menuju<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Karier Impian</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Pilih paket yang paling pas untukmu. Bebaskan potensi AI dan bersiaplah memikat hati rekruter di mana saja.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
