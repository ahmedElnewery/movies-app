/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors:{
          dark:"#000000",
          white:"#ffffff",
          primary:"#6C63FF",
          muted:{
            900:'#1E1E1E',
            100:"#E3E3E3"
          },
          yellow:"#eab308"
      }
    },
   
  },
  plugins: [],
}
