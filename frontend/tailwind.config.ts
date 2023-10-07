import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'sans'],
      },
      padding: {
        'calc-lg': 'calc(5vh + 3vw)',
        'calc-plus-arrow': 'calc(5vh + 3vw + 64px)',
        'calc-md': 'calc(4vh + 2vw)',
      },
      gap: {
        'calc-lg': 'calc(5vh + 3vw)',
        'calc-md': 'calc(4vh + 2vw)',
        'calc-sm': 'calc(3vh + 1vw)',
      },
      colors: {
        primary: '#7fa0ad',
        secondary: '#516f8b',
        ternary: '#17365d',
        info: '#2b5667',
        grey: '#d0d9e4',
        'deep-blue': '#0249af',
        'light-blue': '#4a94c4',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'blue-500': '#2276FC',
        'yellow-100': '#fef7da',
      },
      fontWeight: {
        100: '100',
        200: '200',
        400: '400',
        600: '600',
        700: '700',
        900: '900',
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        tighter: '-.04em',
      },
      spacing: {
        28: '7rem',
      },
      lineHeight: {
        tight: '1.2',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    ({ addUtilities }: { addUtilities: Function }) => {
      const newUtilities = {
        '.justify-self-center': {
          'justify-self': 'center',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
