/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'peaceful-orange': '#E4692E',
      },
      boxShadow: {
        container: '0 5px 10px 1px rgba(0, 0, 0, 0.3)',
        button: '0 5px 10px 1px rgba(255, 255, 255, 0.3)',
        eventDay: '0 5px 10px 1px rgba(288, 105, 46, 0.3)',
      },
      dropShadow: {
        visibility: '0 4px 5px rgba(0,0,0,.8)',
        visibilityOrange: '0 4px 5px rgba(228,105,46,.5)',
        svg: '0 0px 5px rgba(255,255,255,.6)',
      },
    },
  },
  plugins: [],
};
