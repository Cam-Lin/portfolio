/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'src/*.{html,js}',
    'public/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FF0099',
        'blue': '#38B4F2',
        'purple': '#8468DE',
        'green': '#C1E881'
      }
    },
  },
  plugins: [],
}
