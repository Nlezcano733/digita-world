module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      'sm': '500px',
      'md': '750px',
      'lg': '950px',
      'xl': '1200px',
      '2xl': '1500px'
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
