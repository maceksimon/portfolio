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
  content: {
    contentHead: true,
  }
})
