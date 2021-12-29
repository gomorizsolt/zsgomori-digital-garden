const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      // the `legacy` target effectively disables the use of `:where()` pseudo-classes
      // reason: if the target is `modern` (default), certain selectors are broken
      // for instance: .prose :where(precode) -> should be .prose where(pre code)
      // https://github.com/tailwindlabs/tailwindcss-typography/issues/232
      target: "legacy",
    }),
  ],
};
