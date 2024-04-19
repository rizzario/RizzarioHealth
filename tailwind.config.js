/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      '12': ['12px',],
      '16': ['16px',],
      '18I': ['18px', {
        fontWeight: '600',
      }],
      '20I': ['20px', {
        fontWeight: '900',
      }],
      '22I': ['22px',{
        fontWeight: '600',
      }],
      '24': ['24px',],
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'orange': {
        1: '#FFD786',
        2: '#F5E085',
      },
      'lime': {
        main: colors.lime,
        1: '#D2E690',
        2: '#A2AF9F' /* Dark greyish lime green (clay) */,
      },
      'lightgreen': {
        1: '#B1E9A3',
      },
      'green': {
        1: '#7AC38F',
      },
      'teal': {
        1: '#88E0D0',
      },
      'lightcyan': {
        1: '#C7EEFF',
      },
      'cyan': {
        1: '#2DD8FF',
      },
      'grey': {
        1: '#96AFB8',
      },
    },
    screens: {
      '5per': '5%',
      '117px': '117px',
      '160px': '160px',
    },
    extend: {
    },
  },
  plugins: [
  ],
}

