/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      backgroundImage: {
        'TitleCover': "url('./Images/TitleCover.png')",
        'PageCover': "url('./Images/PageCover.png')",
      }
    },
  },
  plugins: [],
}
