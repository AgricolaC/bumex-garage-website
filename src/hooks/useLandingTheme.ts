'use client';

import { useState, useEffect } from 'react';

export type LandingTheme = 'cream' | 'titanium';

export function useLandingTheme() {
  const [theme, setTheme] = useState<LandingTheme>('titanium');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('bumex_landing_theme') as LandingTheme | null;
    if (saved === 'cream' || saved === 'titanium') {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'titanium') {
      root.classList.add('dark');
      root.classList.remove('cream-mode');
      root.style.colorScheme = 'dark';
      if (body) {
        body.style.backgroundColor = '#1B1D20';
        body.style.color = '#F4F4F5';
      }
    } else {
      root.classList.remove('dark');
      root.classList.add('cream-mode');
      root.style.colorScheme = 'light';
      if (body) {
        body.style.backgroundColor = '#E8E3DF';
        body.style.color = '#0D0D0D';
      }
    }
    if (mounted) {
      localStorage.setItem('bumex_landing_theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'cream' ? 'titanium' : 'cream'));
  };

  const selectTheme = (newTheme: LandingTheme) => {
    setTheme(newTheme);
  };

  return {
    theme,
    isCream: theme === 'cream',
    toggleTheme,
    selectTheme,
    mounted,
  };
}
