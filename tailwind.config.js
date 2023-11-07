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
        'accent':"#D9D9D9",
        'hvr':'#DFE1E7',
        'subdued':'#818898',
        'norm-txt':'#666D80',
        'stabilo':'#D0F500',
        'grey':{
          50:'#F8FAFB',
          200:'#F0F4FD',
          300:'#D4DBEA',
          900:'#0D0D12',
        },
        'primary':{
          100:'#F2FFCC',
          500:'#CFFF41',
        },
        'secondary':{
          50:'#F9F9F9',
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

