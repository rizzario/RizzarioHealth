/** @type {import('tailwindcss').Config} */

import { keyframes } from 'styled-components';

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
        main: colors.orange,
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
        main: colors.green,
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
      'gray': {
        main: colors.gray,
        1: '#96AFB8',
      },
    },
    extend: {
      keyframes : {
        slide: {
          '0%': { 
            transform :'translate-x-1/2',
          },
          '100%': {
            transform :'-translate-x-1/2',
          },
        }
      },
    },
  },
  plugins: [
  ],
}

