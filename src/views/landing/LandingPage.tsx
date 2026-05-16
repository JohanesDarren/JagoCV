import React from 'react';
import LandingNav from '../../components/layout/LandingNav';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import CtaSection from './CtaSection';
import FooterSection from './FooterSection';

/**
 * LandingPage — Orchestrator component.
 * 
 * Ini menggantikan LandingView.tsx (819 baris) dengan komposisi
 * dari section-section kecil yang masing-masing bertanggung jawab
 * atas UI-nya sendiri. Total file ini hanya ~30 baris.
 */
export default function LandingPage() {
  return (
    <div id="view-landing" className="flex-col w-full min-h-screen overflow-x-hidden block">
      {/* Background Elements */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
