/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F6F6F6',
        'custom-light-gray': '#EDEDED',
        'custom-lighter-gray': '#EDEEED',
        'custom-medium-gray': '#797979',
        'custom-dark-gray': '#474747',
        'custom-darker-gray': '#606160',
        'custom-black': '#1C1C1C',
        'custom-dark-black': '#161618',
        'custom-green': '#149610',
        'custom-light-green': '#D9F7D7',
      },
      fontFamily: {
        'axiforma': ['Axiforma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
