/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          dark: '#004d99',
        },
        secondary: {
          DEFAULT: '#00cc88',
          dark: '#009966',
        },
      },
    },
  },
  plugins: [],
};