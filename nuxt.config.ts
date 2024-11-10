// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@vesp/nuxt-fontawesome', 'nuxt-rating'],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faCog', 'faShoppingCart', 'faGlobe', 'faSearch', "fa-chevron-up", "fa-chevron-down","fa-chevron-right","fa-chevron-left",
         "fa-greater-than", "fa-times", "faCircleExclamation", "faDisplay", "fa-mobile-screen", "fa-circle-question", "fa-cloud-arrow-down", "fa-trophy"],

    }
  },
})