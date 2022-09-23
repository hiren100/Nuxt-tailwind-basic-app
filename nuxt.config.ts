// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
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
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    meta: {
      title: 'My PWA',
      author: 'Me',
    },
    manifest: {
      name: 'Nuxt.js PWAs are so easy',
      short_name: 'Nuxt.js PWA',
      lang: 'en',
    }, 
  }
})
