// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locale: 'cs',
        defaultLocale: 'cs',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English'
          },
          {
            code: 'cs',
            iso: 'cs-CZ',
            name: 'Čeština'
          }
        ],
        vueI18n: './i18n.config.ts'
      },
    ],
    '@nuxtjs/tailwindcss'
  ],
})
