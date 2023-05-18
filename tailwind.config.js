/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': '470px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'nh': {'raw': '(min-width: 1024px) and (max-width: 1500px) and (max-height: 1000px)'},
      },
    },
  },
  plugins: [],

}

