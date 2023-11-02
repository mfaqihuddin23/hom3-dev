/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors:{ 
        'prim-txt':"#252525",
        'second-txt':"#677487",
        'accent':"#AAAAAA",
        'grey':{
          300:'#D4DBEA',
        },
        'primary':{
          500:'#CFFF41',
        },
        'secondary':{
          800:'#252525',
        }
      }, 
      fontFamily :{ 
        satoshi: ["Satoshi"], 
      } 
    },
  },
  plugins: [],
}

