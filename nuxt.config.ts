export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ['@nuxt/content', '@pinia/nuxt']
})
