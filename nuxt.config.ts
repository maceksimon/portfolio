import { definePerson } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxtjs/seo',
    'nuxt-og-image'
  ],
  i18n: {
    locales: [
      {
        code: 'cs',
        iso: 'cs-CZ',
        name: 'Čeština',
        file: "cs-CZ.ts",
      }
    ],
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: 'cs',
    detectBrowserLanguage: false,
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  site: {
    url: 'https://simonjasny.com',
    name: 'Šimon Jasný'
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Šimon Jasný',
      image: '/profile-photo.webp',
      description: 'Webový vývojář',
      url: 'https://simonjasny.com',
      sameAs: [
        'https://x.com/maceksimondev',
        'https://github.com/maceksimon'
      ],
    })
  }
})
