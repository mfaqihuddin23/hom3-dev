/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {},
  },
  plugins: [],
}

