module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      colors: {
        luxury: {
          gold: '#D4AF37',
          silver: '#C0C0C0',
          black: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};