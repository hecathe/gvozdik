// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/gvozdik/",
	head: {
		charset: 'utf-8',
		viewport: 'width=device-width, initial-scale=1',
	}
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
    // "vue-yandex-maps/nuxt",
  ],
  plugins: [{ src: "~/plugins/yandex-map", mode: "client" }],
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
          isCustomElement: (tag) => tag.startsWith("swiper-"),
        },
      },
    },
  },
  //   yandexMaps: {
  //     apikey: '3298e558-aff8-4488-95dc-510505f05ade',
  //   },
});
