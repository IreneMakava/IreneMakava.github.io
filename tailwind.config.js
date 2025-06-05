/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", 
  ],
  theme: {
    extend: {
      colors:{
        darkgreen : 'rgb(12, 29, 8)',
        lightgreen: 'rgb(168, 230, 161)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],     // custom font key
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

