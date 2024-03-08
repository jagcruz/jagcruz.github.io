import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: { mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono] },
      animation: { float: 'float 3s' },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1.5rem)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      colors: {
        jagc: {
          DEFAULT: '#cc0404',
          50: '#fff0f0',
          100: '#ffe6e6',
          200: '#fec3c3',
          300: '#fda0a0',
          400: '#fc5f5f',
          500: '#cc0404',
          600: '#b40303',
          700: '#a50303',
          800: '#820303',
          900: '#690202',
          950: '#3c0101'
        },
        java: {
          50: '#f0fdfc',
          100: '#cbfcf8',
          200: '#98f7f2',
          300: '#5cece9',
          400: '#2bd4d6',
          500: '#13bec3',
          600: '#0b9096',
          700: '#0e7077',
          800: '#10595f',
          900: '#124b4f',
          950: '#042a2f'
        },
        'big-stone': {
          DEFAULT: '#1e2d3d',
          50: '#f4f7fb',
          100: '#e9eff5',
          200: '#cdddea',
          300: '#a2c0d7',
          400: '#6f9ec1',
          500: '#4d82aa',
          600: '#3b688e',
          700: '#305474',
          800: '#2b4861',
          900: '#283e52',
          950: '#1e2d3d'
        },
        'black-pearl': {
          DEFAULT: '#011627',
          50: '#eff8ff',
          100: '#ddf1ff',
          200: '#b4e4ff',
          300: '#71d0ff',
          400: '#26baff',
          500: '#00a1fd',
          600: '#0080d9',
          700: '#0065b0',
          800: '#005591',
          900: '#034777',
          950: '#011627',
          975: '#011221'
        },
        'electric-lime': {
          DEFAULT: '#d2fd00',
          50: '#feffe4',
          100: '#fbffc5',
          200: '#f5ff92',
          300: '#eaff53',
          400: '#d9fb20',
          500: '#d2fd00',
          600: '#91b500',
          700: '#6d8902',
          800: '#576c08',
          900: '#495b0c',
          950: '#263300'
        },
        daintree: {
          DEFAULT: '#004346',
          50: '#e9fffe',
          100: '#c9fffd',
          200: '#99ffff',
          300: '#54fdff',
          400: '#07efff',
          500: '#00d1ef',
          600: '#00a6c9',
          700: '#0083a1',
          800: '#086982',
          900: '#0c566d',
          950: '#002430'
        },
        lynch: {
          DEFAULT: '#607b96',
          50: '#f6f7f9',
          100: '#ebeef3',
          200: '#d3dbe4',
          300: '#adbccc',
          400: '#8098b0',
          500: '#607b96',
          600: '#4c637d',
          700: '#3e5066',
          800: '#364556',
          900: '#313b49',
          950: '#202731'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ]
};
