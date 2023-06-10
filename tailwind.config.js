/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'midnight':'#b5bda4',
        'night':'#223030',
      },
      margin:{
'570px':'570px',
'500px':'500px'

      },
       width:{
'570px':'570px',
'500px':'500px',
'400px':'400px',

      }
    },
  },
  plugins: [require("daisyui")],
};

