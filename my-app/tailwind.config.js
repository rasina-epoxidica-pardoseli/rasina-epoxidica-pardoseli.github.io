/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#7a6088;',
          500: '#3c1053;'
        }
      },
    },
  },
  plugins: [],
}

