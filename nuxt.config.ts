// https://nuxt.com
export default defineNuxtConfig({
  compatibilityDate: '2025-09-17',
  devtools: { enabled: true },

  modules: [
    'vuetify-nuxt-module'
  ],

  vuetify: {
    // 🛠️ LA SOLUCIÓN OFICIAL: Le añade el prefijo "V" a useLayout para evitar el choque con Nuxt
    moduleOptions: {
      prefixComposables: ['useLayout']
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
      },
      theme: {
        defaultTheme: 'light'
      }
    }
  }
})
