// https://nuxt.com/docs/api/configuration/nuxt-config
const base = process.env.NODE_ENV === 'development' ? '/' : '/p/nuxt'

export default defineNuxtConfig({
  modules: ['@nuxthq/ui'],
  devtools: { enabled: true },
  ui: {
    safelistColors: ['primary', 'red', 'green', 'amber', 'yellow', 'blue', 'orange']
  },
  app: {
    baseURL: base
  }
})