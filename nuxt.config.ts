// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/gvozdik/",
  },
  css: ["normalize.css/normalize.css", "~/assets/styles/main.scss"],
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [400, 500, 700],
        },
      },
    ],
    "@nuxtjs/svg-sprite",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/_mixins.scss" as *; @use "~/assets/styles/_variables.scss" as *;',
        },
      },
    },
    vue: {
        template: {
            compilerOptions: {
              isCustomElement: (tag) => tag.startsWith('swiper-')
            }
        }
    }
  },
});
