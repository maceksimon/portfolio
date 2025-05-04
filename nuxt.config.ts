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

  plugins: [
    '~/plugins/matomo.client.ts',
    '~/plugins/cookieconsent.client.ts'
  ],

  experimental: {
    scanPageMeta: true,
  },

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
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: 'cs',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    pages: {
      index: {
        cs: '/',
        en: '/',
      },
      'about/index': {
        cs: '/o-mne',
        en: '/about',
      },
      'blog/index': {
        cs: '/blog',
        en: '/blog',
      },
      'blog/[slug]': {
        cs: '/blog/[slug]',
        en: '/blog/[slug]',
      },
      'projects/index': {
        cs: '/projekty',
        en: '/projects',
      },
      'projects/[slug]': {
        cs: '/projekty/[slug]',
        en: '/projects/[slug]',
      },
    }
  },

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  content: {
    contentHead: true,
  },

  compatibilityDate: '2025-05-04',
})