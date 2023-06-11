/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        custom:['inter', 'system-ui', 'sans-serif'],
  
      },
      height : {
        '100' : '30em',
        '120' : '120px',
        '150': '150px'
      },
      width : {
        'magnifico' : '80%',
        'perfecto' : '90vw',
        'elmundo' : '90%',
        'grande' : '80vw'
      },
      spacing : {
        'perfecto' : '83%'
      }
    },
  },
  plugins: [],
}

