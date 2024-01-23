/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  arrowParens: 'avoid',
  trailingComma: 'none',
  printWidth: 100,
  bracketSpacing: true
};
