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
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animated')]
};
