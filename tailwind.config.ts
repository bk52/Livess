import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-logo-light': '#FE251B',
        'color-logo-dark': '#C51104',
        'color-counter-terrorist': '#5D79AE',
        'color-terrorist': '#CCBA7C',
        'color-success': '#88DF00',
        'color-danger': '#FF1C5C',
        'color-warning': '#FFCC00',
        'color-info': '#16A4D8',
        'color-primary': '#222430',
        'color-secondary': '#5E627E',
        'text-secondary': '#CED0DA',
        'text-primary': '#FCFBFE',
        'color-ct-table': 'rgba(93,121,174,0.2)',
        'color-t-table': 'rgba(204,186,124,0.2)',
      },
      fontSize: {
        h1: ['2.5rem', { fontWeight: 'bold' }],
        h2: [
          '2.25rem',
          {
            fontWeight: 'bold',
          },
        ],
        h3: [
          '2rem',
          {
            fontWeight: 'bold',
          },
        ],
        h4: [
          '1.75rem',
          {
            fontWeight: 'bold',
          },
        ],
        h5: [
          '1.5rem',
          {
            fontWeight: 'bold',
          },
        ],
        h6: [
          '1.125rem',
          {
            fontWeight: 'bold',
          },
        ],
        p: ['1rem', 'normal'],
        infoCard: ['1rem', 'normal'],
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        rapier: ['Rapier', 'sans-serif'],
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
} as Config;
