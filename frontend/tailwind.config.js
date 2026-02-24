/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.js', './App.{js,jsx}', './src/**/*.{js,jsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'app-dark': '#0a0a0f',
        brand: '#6366f1',
      },
    },
  },
  plugins: [],
};
