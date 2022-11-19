/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'headerImg': "url('/images/image-header.jpg')",
      },
      fontFamily: { 
        "barlow": 'Barlow sans-serif',
        "fraunces": 'Fraunces serif',
      },
      fontWeight: {
        'bold': 700,
        'extra-bold': 800,
        'black': 900,

      },
      colors: {
        'Soft_red': '#FE7866',
        'Yellow' : '#F9D400',
        'Dark_desaturated_cyan' : '#24554B',
        'Dark_blue' : '#19526B',
        'Dark_moderate_cyan': '#458C7D',
        'Very_dark_desaturated_blue': '#232F3D',
        'Very_dark_grayish_blue': '#5A626C',
        'Dark_grayish_blue': '#808397',
        'Grayish_blue': '#A7AAAE',
      }
    },
  },
  plugins: [],
}
