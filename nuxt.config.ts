// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxthq/ui'],
  devtools: { enabled: true },
  ui: {
    safelistColors: ['primary', 'red', 'green', 'amber', 'yellow', 'blue', 'orange']
  }
})
