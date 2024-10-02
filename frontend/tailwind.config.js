/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode:'class',
  theme: {
    extend: {
       colors: {
        lime: {
          50: '#f7fefc',
          100: '#e1fce4',
          200: '#c3f9c2',
          300: '#a4f6a1',
          400: '#85f680',
          500: '#66f05f',
          600: '#4cd74d',
          700: '#39bc3a',
          800: '#28a027',
          900: '#1a7b1d',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}