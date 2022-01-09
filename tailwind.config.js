module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        background: '#FEFCF5',
        backgroundSecondary: '#FFFCEF',
        primary: '#545454'
      },
      fontFamily: {
        'sans': ['Ovo', 'Alegreya', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

