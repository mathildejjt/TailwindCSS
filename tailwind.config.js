/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'headerImg': "url('/images/image-header.jpg')",
      },
      fontFamily: { 
        "Barlow": ['Barlow, sans-serif'],
        "Fraunces": 'Fraunces serif',
      },
   
      colors: {
        'Soft_red': '#FE7866',
        'Yellow' : '#F9D400',
        'Dark_desaturated_cyan' : '#386F63',
        'Dark_blue' : '#19526B',
        'Dark_moderate_cyan': '#458C7D',
        'Very_dark_desaturated_blue': '#232F3D',
        'Very_dark_grayish_blue': '#5A626C',
        'Dark_grayish_blue': '#808397',
        'Grayish_blue': '#A7AAAE',
        'Grayish_cyan':'#7EBEB0',
      }
    },
  },
  plugins: [],
}
