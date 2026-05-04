/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bitter', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FAF8F4',
          dark: '#F0EBE3',
        },
        accent: {
          DEFAULT: '#2D6A4F',
          light: '#52B788',
          dark: '#1B4332',
        },
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
    },
  },
  plugins: [],
}
