/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",],
  theme: {
    extend: {
      colors: {
        'primary': "#FEBC06",
        'secondary' : "#202020"
      },
      fontSize: {
        'large': "48px",

      }
    },
  },
  plugins: [],
}
