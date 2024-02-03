/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins' , 'sans-serif'],
        'roboto' : ['Roboto' , 'sans-serif'],
        'Josefin' : ['Josefin Sans' , 'sans-serif'],
      },
      boxShadow:{
        'nav-shadow' :['0px 2px 13px 0px #0000001A'],
        'card-shadow' :['23px 44px 47px 0px #00000033'],        
        'card-hover' :['10px 20px 30px 0px #00000033'],     
        'next-btn-shadow' :['3px 5px 22px 0px #00000014'],     

        
        
      }
    },
  },
  plugins: [],
}




