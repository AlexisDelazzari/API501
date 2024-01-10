/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        'smd': '799px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
