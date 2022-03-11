module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: 'class', //false, 'class', 'media'
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 4s ease-in-out infinite',
      },
      colors: {
        'body': '#FBFFFE',
        'selected-text': '#FAA916',
        'theme': '#FAA916',
        'nav': '#2A282A',
        'secondary': '#F9BD4E',
        'badge': '#726D74',
        'input-border': '#726D74',
        'input': '#2A282A',
        'dark': '#2A282A'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'roboto': ["'Roboto'", 'sans-serif'],
        'opensans': ["'Open Sans'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
