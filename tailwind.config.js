/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors:{
        TodoBlue: "#030D25",
        BlueGrow:"#060A5D",
        TodoGreen:"#22A233",
        TodolightGreen:"#22C55E",
        TodoOrange:"#030D25" ,
        TodoYellow:"#EAB308" ,
        TodoGray:"#9CA3A6",
  
      },
    },
  },
  plugins: [],
}

