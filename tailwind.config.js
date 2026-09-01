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
          50: '#f0f3f9',
          100: '#d9e0f0',
          200: '#b3c1e0',
          300: '#8da2d1',
          400: '#6683c1',
          500: '#1a237e',
          600: '#151d6b',
          700: '#101758',
          800: '#0b1145',
          900: '#060b32',
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
