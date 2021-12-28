const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        notes: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
