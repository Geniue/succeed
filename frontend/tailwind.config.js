import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F2138',
          50: '#EEF2F6',
          100: '#D7E0EA',
          200: '#AFC1D4',
          400: '#4C6C8C',
          600: '#1B324D',
          700: '#132840',
          900: '#0F2138',
          950: '#0A1626',
        },
        gold: {
          DEFAULT: '#C9A15A',
          50: '#FBF6EC',
          100: '#F3E4C4',
          300: '#DBB878',
          500: '#C9A15A',
          600: '#AD8543',
          700: '#8A6935',
        },
        sand: '#F7F5F0',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [typography],
}
