/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        green: {
          200: '#E0F1E8',
          500: '#86A2A5',
          600: '#0C7D69',
          900: '#2A4144',
        }
      }
    },
  },
  plugins: [],
}