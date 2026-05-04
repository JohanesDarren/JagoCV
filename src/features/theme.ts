export function initTheme() {
  if ((window as any).__themeInitialized) return;
  (window as any).__themeInitialized = true;

  const htmlEl = document.documentElement;
  
  // 1. Initial theme setup
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
    if (!savedTheme) localStorage.setItem('theme', 'light');
  }

  // 2. Toggle function
  const toggleTheme = () => {
    if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // 3. Use Event Delegation for robustness
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('#theme-toggle') || target.closest('#theme-toggle-app')) {
      toggleTheme();
    }
  });
}
