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
      'cat-loading': {
        'body-color': 'var(--color-cat-body)',
        tail: 'var(--color-cat-tail)',
        tummy: 'var(--color-cat-tummy)',
        border: 'var(--color-cat-border)',
      },
    },
    animation: {
      'loading-cat': '2.74s linear infinite loading-cat',
      'loading-cat-body': '2.74s linear infinite loading-cat-body',
      'loading-cat-foot': '2.74s linear infinite loading-cat-foot',
      'image-animation': '18s linear infinite image-animation',
      wave: '25s cubic-bezier(.55, .5, .45, .5) infinite wave',
      'theme-neko-rotate': 'rotate 2s cubic-bezier(.7, 0, 0, 1)',
      'slide-up-big-in': 'slide-up-big-in 0.5s',
      'slide-down-in': 'slide-down-in 0.3s',
      'slide-up-in': 'slide-up-in 0.3s',
      blur: 'blur 0.8s ease-in-out forwards',
      shake: 'shake 1s',
    },
    keyframes: {
      'loading-cat': {
        '0%': { transform: 'rotate(0deg)' },
        '10%': { transform: 'rotate(-80deg)' },
        '20%': { transform: 'rotate(-180deg)' },
        '40%': { transform: 'rotate(-245deg)' },
        '50%': { transform: 'rotate(-250deg)' },
        '68%': { transform: 'rotate(-300deg)' },
        '90%': { transform: 'rotate(-560deg)' },
        '100%': { transform: 'rotate(-720deg)' },
      },
      'loading-cat-body': {
        '0%': { clipPath: 'polygon(50% 50%, 0% 50%, 0% 100%, 100% 100%, 100% 20%)' },
        '10%': { clipPath: 'polygon(50% 50%, 30% 120%, 50% 100%, 100% 100%, 100% 20%)' },
        '20%': { clipPath: 'polygon(50% 50%, 100% 90%, 120% 90%, 100% 100%, 100% 20%)' },
        '40%': { clipPath: 'polygon(50% 50%, 100% 45%, 120% 45%, 120% 50%, 100% 20%)' },
        '50%': { clipPath: 'polygon(50% 50%, 100% 45%, 120% 45%, 120% 50%, 100% 20%)' },
        '65%': { clipPath: 'polygon(50% 50%, 100% 65%, 120% 65%, 120% 50%, 100% 20%)' },
        '80%': { clipPath: 'polygon(50% 50%, 75% 130%, 120% 65%, 120% 50%, 100% 20%)' },
        '90%': { clipPath: 'polygon(50% 50%, -20% 110%, 50% 120%, 100% 100%, 100% 20%)' },
        '100%': { clipPath: 'polygon(50% 50%, 0% 50%, 0% 100%, 100% 100%, 100% 20%)' },
      },
      'loading-cat-foot': {
        '0%': { transform: 'rotate(-10deg)' },
        '10%': { transform: 'rotate(-100deg)' },
        '20%': { transform: 'rotate(-145deg)' },
        '35%': { transform: 'rotate(-190deg)' },
        '50%': { transform: 'rotate(-195deg)' },
        '70%': { transform: 'rotate(-165deg)' },
        '100%': { transform: 'rotate(-10deg)' },
      },
      'image-animation': {
        '0%': {
          opacity: '0',
          'animation-timing-function': 'ease-in',
        },
        '2%': {
          opacity: '1',
        },
        '8%': {
          opacity: '1',
          transform: 'scale(1.05)',
          'animation-timing-function': 'ease-out',
        },
        '17%': {
          opacity: '1',
          transform: 'scale(1.1)',
        },
        '25%': {
          opacity: '0',
          transform: 'scale(1.1)',
        },
        '100%': { opacity: '0' },
      },
      wave: {
        '0%': {
          transform: 'translate3d(-90px, 0, 0)',
        },
        '100%': {
          transform: 'translate3d(85px, 0, 0)',
        },
      },
      rotate: {
        from: {
          transform: 'rotate(0)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      'slide-up-big-in': {
        from: {
          opacity: '0',
          transform: 'translateY(80px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'slide-down-in': {
        from: {
          opacity: '0',
          transform: 'translateY(-18px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'slide-up-in': {
        from: {
          opacity: '0',
          transform: 'translateY(10px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      blur: {
        from: {
          filter: 'blur(10px)',
        },
        to: {
          filter: 'blur(0)',
        },
      },
      shake: {
        '0%': {
          transform: 'scale(1)',
        },
        '10%, 20%': {
          transform: 'scale(.9) rotate(3deg)',
        },
        '30%, 50%, 70%, 90%': {
          transform: 'scale(1.1) rotate(-3deg)',
        },
        '40%, 60%, 80%': {
          transform: 'scale(1.1) rotate(3deg)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
    },
    extend: {
      backgroundImage: {
        'cat-loading-headfoot': 'var(--bg-cat-head-foot)',
        'cat-loading-body': `var(--bg-cat-body)`,
        'cat-loading-head-after': `var(--bg-cat-head-after)`,
        'nav-bg': `linear-gradient(-225deg, var(--color-cyan-light) 0, var(--color-pink-light) 100%)`,
      },
      spacing: {
        'cat-loading-outer-r': 'var(--size-cat-outer-r)',
        'cat-loading-tummy-w': 'var(--size-cat-tummy-w)',
        'cat-loading-border-w': 'var(--size-cat-border-w)',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
export default config;
