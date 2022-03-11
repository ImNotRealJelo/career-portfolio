module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: 'class', //false, 'class', 'media'
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 4s ease-in-out infinite',
      },
      colors: {
        'body': '#F7F8F3',
        'selected-text': '#7EE081',
        'theme': '#7EE081',
        'nav': '#2A282A',
        'secondary': '#62A87C',
        'badge': '#726D74',
        'input-border': '#62A87C',
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
