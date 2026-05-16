import React from 'react';
import { cn } from '../../utils/cn';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: { text: string; included: boolean }[];
  ctaLabel: string;
  onCtaClick?: () => void;
  variant?: 'default' | 'featured' | 'premium';
}

export default function PricingCard({ name, description, price, priceSuffix, features, ctaLabel, onCtaClick, variant = 'default' }: PricingCardProps) {
  const wrapperStyles = {
    default: 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-blue-500/30',
    featured: 'bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#1e293b] border-blue-200 dark:border-blue-900 shadow-xl shadow-blue-500/10 hover:border-blue-400 dark:hover:border-blue-700',
    premium: 'bg-gradient-to-br from-slate-900 via-[#1e293b] to-slate-900 dark:from-[#0f1115] dark:via-[#1a1c23] dark:to-[#0f1115] border-amber-500/40 shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:border-amber-500/60 overflow-hidden group',
  };

  const btnStyles = {
    default: 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800',
    featured: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5',
    premium: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 border-none',
  };

  const isPremium = variant === 'premium';
  const textColor = isPremium ? 'text-white' : 'text-slate-900 dark:text-white';
  const descColor = isPremium ? 'text-slate-300' : 'text-sm text-slate-500 dark:text-slate-400';
  const checkColor = isPremium ? 'text-amber-500' : variant === 'featured' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500';

  return (
    <div className={cn('rounded-[2.5rem] p-8 border transition-all flex flex-col h-full transform hover:-translate-y-1 relative', wrapperStyles[variant])}>
      {isPremium && <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
      <div className={cn('mb-6', isPremium && 'relative z-10')}>
        <h3 className={cn('text-xl font-bold mb-2', textColor)}>{name}</h3>
        <p className={cn('text-sm', descColor)}>{description}</p>
      </div>
      <div className={cn('mb-8', isPremium && 'relative z-10')}>
        <span className={cn('text-4xl font-extrabold', textColor)}>{price}</span>
        <span className={cn('font-medium', isPremium ? 'text-amber-500/80' : 'text-slate-500 dark:text-slate-400')}>{priceSuffix}</span>
      </div>
      <ul className={cn('space-y-4 mb-8 flex-1', isPremium && 'relative z-10')}>
        {features.map((f, i) => (
          <li key={i} className={cn('flex items-start gap-3', !f.included && 'opacity-50')}>
            <svg className={cn('w-5 h-5 mt-0.5 shrink-0', f.included ? checkColor : 'text-slate-400')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.included ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'} />
            </svg>
            <span className={cn('text-sm', isPremium ? 'text-slate-200' : f.included ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400')}>{f.text}</span>
          </li>
        ))}
      </ul>
      <button onClick={onCtaClick} className={cn('w-full py-3.5 rounded-xl transition-colors mt-auto', btnStyles[variant], isPremium && 'relative z-10')}>
        {ctaLabel}
      </button>
    </div>
  );
}
