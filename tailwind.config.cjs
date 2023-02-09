/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark_cyan': '#3c8067',
        'dark_cyan_alt': '#265040',
        'cream': '#f2ebe3',
        'very_dark_blue': '#1c232b',
        'dark_grayish_blue': '#6c7289',
      },
      fontFamily: {
        'sans': ['Montserrat', 'serif'],
        'serif': ['Fraunces', 'sans-serif'],
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}
