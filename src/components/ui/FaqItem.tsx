import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group bg-white dark:bg-[#0B1221] border border-slate-200 dark:border-slate-800 rounded-[1.5rem] p-6 shadow-sm hover:border-cyan-300 dark:hover:border-cyan-800 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300 open:shadow-lg open:shadow-cyan-500/10 open:border-cyan-200 dark:open:border-cyan-800 marker:content-['']">
      <summary className="flex justify-between items-center text-lg font-bold text-slate-900 dark:text-white cursor-pointer list-none select-none group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {question}
        <span className="transition-all duration-300 group-open:rotate-180 group-open:bg-cyan-500 group-open:text-white bg-slate-100 dark:bg-slate-800 p-2.5 rounded-full text-slate-500 dark:text-slate-400">
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="20"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </summary>
      <div className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base pt-2 pr-4 pl-4 border-l-2 border-cyan-400 ml-2">
        {answer}
      </div>
    </details>
  );
}
