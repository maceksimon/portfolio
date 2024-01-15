// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@formkit/nuxt',
    '@nuxt/test-utils/module'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: "en-US.ts",
      },
      {
        code: 'cs',
        iso: 'cs-CZ',
        name: 'Čeština',
        file: "cs-CZ.ts",
      }
    ],
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    defaultLocale: 'cs',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  content: {
    contentHead: true,
  }
})
