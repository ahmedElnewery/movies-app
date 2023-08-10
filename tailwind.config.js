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
          primary:"#6100C2",
          muted:{
            900:'#181818'
          },
          yellow:"#eab308"
      }
    },
   
  },
  plugins: [],
}
