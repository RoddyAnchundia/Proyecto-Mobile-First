/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'fuentePrincipal' : ['Montserrat', 'sans-serif'],
      'fuenteSecundaria' : ['Overpass', 'sans-serif']
    },
    extend: {
      spacing:{
        'sizeBg' : '550px',
        'img-lg-H' : '460px',
        'img-md-H' : '650px'
      }
    },
  },
  plugins: [],
}