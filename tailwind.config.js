/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#e6f4f6',
          100: '#c2e3ea',
          200: '#9ed2de',
          300: '#7ac1d2',
          400: '#56b0c6',
          500: '#76A5AE', // Your main teal
          600: '#4e8a97',
          700: '#366b74',
          800: '#244a4f',
          900: '#12292a',
        },
        teal: {
          500: '#76A5AE',
          600: '#4e8a97',
        }
      },
      fontFamily: {
        sans: ['Josefin Sans','Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}