const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class',
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1200px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
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
          darker: '#4b651c'
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
