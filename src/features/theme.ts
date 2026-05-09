export type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored as Theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function initTheme() {
  const theme = getStoredTheme();
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Also ensure the initial storage value is set
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', theme);
  }
}
