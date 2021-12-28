export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "zsgomori-digital-garden",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/vue-tailwind"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/components/icons"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  },

  hooks: {
    // Add document to data before it is stored: https://content.nuxtjs.org/advanced#contentfilebeforeinsert
    "content:file:beforeInsert": (document) => {
      if (document.extension === ".md") {
        const { format } = require("date-fns");
        const readingTime = require("reading-time");

        document.createdAt = {
          raw: document.createdAt,
          formatted: format(new Date(document.createdAt), "MMMM, dd yyyy"),
        };

        document.updatedAt = {
          raw: document.updatedAt,
          formatted: format(new Date(document.updatedAt), "MMMM, dd yyyy"),
        };

        document.readingTime = readingTime(document.text);
      }
    },
  },
};
