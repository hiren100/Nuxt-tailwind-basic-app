// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@kevinmarrec/nuxt-pwa'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "~/assets/css/main.scss",
  ],
  pwa: {
    workbox: {
      enabled: true
    }
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in' // default
  },
  layoutTransition: {
    name: 'slide',
    mode: 'out-in' // default
  }    
})
