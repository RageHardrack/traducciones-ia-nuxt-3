// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "nuxt-icon"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  runtimeConfig: {
    difyApiKey: process.env.DIFY_API_KEY,
    difyBaseUrl: process.env.DIFY_BASE_URL,
    difyProjectName: process.env.DIFY_PROJECT_NAME,
  },
});