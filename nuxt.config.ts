// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1', 
      title: 'Nuxt 3 starter app',
      meta: [
        { name: 'description', content: 'My nuxt 3 stater.' }
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' }
  },    
  css: [
    "@/assets/css/main.scss"
  ],
})
