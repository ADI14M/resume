// Theme toggle with persistence
(() => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  // initialize theme
  const saved = localStorage.getItem('aditya_resume_theme');
  if (saved === 'light') body.classList.add('light-theme');
  // set toggle symbol
  toggle.textContent = body.classList.contains('light-theme') ? '☀' : '🌙';

  toggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-theme');
    localStorage.setItem('aditya_resume_theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☀' : '🌙';
  });
})();
