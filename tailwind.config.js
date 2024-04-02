/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding:'3rem',
      screens: {
        xs:'320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '2100px'
      }
    },
    extend: {
      colors: {
        backgray: "#F3F3F3",
        backred: "#E73C33",
        'grey-e1': '#EAEAEA',
        'grey-e2': '#F6F6F6',

      }
    },
    fontFamily: {
      forte:'forte ',
      heading:'Adobe Garamond Pro Bold',
    }
  },
  plugins: [],
}