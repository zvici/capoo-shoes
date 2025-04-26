// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "nuxt-svgo",
    "@nuxt/ui"
  ],
  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./assets/icons",
      },
    ],
  },
  app: {
    pageTransition: { name: "rotate", mode: "out-in" },
    head: {
      title: "Nike. Just Do It",
    },
  },
});
