/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-container': '#1A1A1A',
        'dark-gray': '#222222',
        'gold-start': '#9d7035',
        'gold-end': '#c1a35e',
      },
    },
  },
  plugins: [],
}

