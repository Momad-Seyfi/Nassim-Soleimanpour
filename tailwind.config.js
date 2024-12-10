/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB', // Brighter blue
        'brand-red': '#EF4444',  // Brighter red
      },
    },
  },
  plugins: [],
};