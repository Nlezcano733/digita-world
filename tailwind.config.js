module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        'md': '700px',
        'lg': '900px',
        'xl': '1200px',
        '2xl': '1500px'
      },
      fontFamily: {
        'zen': ['Zen Dots', 'sans-serif'],
        'source': ['Source Code Pro', 'sans-serif']
      },
      colors:{
        olive:{
          lighter: '#d1e7a9',
          light: '#b5d974',
          normal: '#98ca3f',
          dark: '#729a2b',
          darker: '#4b651c',
        }
      }

    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
