/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '9xl' : '8rem',
        '10xl' : '10rem'
      },
      fontFamily: {
        'merriweather' : ['Merriweather']
      },
  },
  plugins: [],
}
}
