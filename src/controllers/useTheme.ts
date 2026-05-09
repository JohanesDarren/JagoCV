import { useState, useEffect, useCallback } from 'react';
import { Theme, getStoredTheme } from '../features/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, isDark: theme === 'dark', toggleTheme, setTheme };
}

