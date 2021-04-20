module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1200px',
    },
    extend: {
      spacing:{
        container: 'var(--spacing-container)'
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
        },
        night:{
          lighter: '#273a47',
          light: '#21313c',
          normal: '#1b2831',
          dark: '#0f161b',
          darker: '#090d10',
        }
      },
      boxShadow: {
        'card-sm': '0px 0px 15px #bfbfbf',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
