/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e0e6ed',
          100: '#b3c1d1',
          200: '#869cb5',
          300: '#597799',
          400: '#2d5283',
          500: '#0d1b2a',
          600: '#0b1724',
          700: '#09131e',
          800: '#070f18',
          900: '#050a11',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff9d9',
          200: '#fff1b3',
          300: '#ffe98d',
          400: '#ffe166',
          500: '#ffd700',
          600: '#d9b800',
          700: '#b39a00',
          800: '#8d7b00',
          900: '#665d00',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
