import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', 'index.html'],
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'grey-0': 'rgb(var(--color-grey-0) / <alpha-value>)',
      'grey-1': 'rgb(var(--color-grey-1) / <alpha-value>)',
      'grey-2': 'rgb(var(--color-grey-2) / <alpha-value>)',
      'grey-3': 'rgb(var(--color-grey-3) / <alpha-value>)',
      'grey-4': 'rgb(var(--color-grey-4) / <alpha-value>)',
      'grey-5': 'rgb(var(--color-grey-5) / <alpha-value>)',
      'grey-6': 'rgb(var(--color-grey-6) / <alpha-value>)',
      'grey-7': 'rgb(var(--color-grey-7) / <alpha-value>)',
      'grey-8': 'rgb(var(--color-grey-8) / <alpha-value>)',
      'grey-9': 'rgb(var(--color-grey-9) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)',
      aqua: 'rgb(var(--color-aqua) / <alpha-value>)',
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      grey: 'rgb(var(--color-grey) / <alpha-value>)',
      'pink-light': 'var(--color-pink-light)',
      'cyan-light': 'var(--color-cyan-light)',
      red: 'var(--color-red)',
      pink: 'var(--color-pink)',
      orange: 'var(--color-orange)',
      'pink-light-a3': 'var(--color-pink-light-a3)',
      'pink-light-a5': 'var(--color-pink-light-a5)',
      'pink-light-a7': 'var(--color-pink-light-a7)',
    },
  },
  darkMode: 'selector',
  plugins: [],
};
export default config;
