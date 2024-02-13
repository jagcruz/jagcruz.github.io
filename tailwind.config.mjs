/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animated')]
};
