import React from 'react';
import { cn } from '../../utils/cn';

interface FormFieldProps {
  label: string;
  required?: boolean;
  className?: string;
  /** Span di dalam grid (misal: 'sm:col-span-2', 'md:col-span-2') */
  colSpan?: string;
  children: React.ReactNode;
}

export default function FormField({
  label,
  required = false,
  className,
  colSpan,
  children,
}: FormFieldProps) {
  return (
    <div className={cn('space-y-1.5', colSpan, className)}>
      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        {label}
        {required && ' *'}
      </label>
      {children}
    </div>
  );
}
