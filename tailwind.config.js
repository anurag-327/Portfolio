/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      fontFamily:{
        "montserrat":["Montserrat","sans-serif"],
        "poppins":["Poppins","sans-serif"]
      },
      colors: {
        primary: "#E384FF",
        secondary: "#111010",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode:"class"
}
