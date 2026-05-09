import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
  rating: number;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 fill-current ${filled ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function TestimonialCard({ quote, name, role, avatarColor, rating }: TestimonialCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="bg-white dark:bg-[#0B1221] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl shadow-slate-200/40 dark:shadow-none hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col h-full w-[85vw] md:w-[400px]">
      <div className="absolute -top-6 -right-2 text-9xl text-slate-100 dark:text-slate-800/20 font-serif leading-none select-none pointer-events-none">"</div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex gap-1.5 text-amber-400 mb-6">
          {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= rating} />)}
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-[15px] mb-8 leading-relaxed flex-1">"{quote}"</p>
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`} style={{ backgroundColor: avatarColor }}>{initial}</div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base">{name}</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
