import { cs, en } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'

export default defineFormKitConfig({
  locales: { cs, en },
  locale: 'cs',
  config: {
    rootClasses,
  },
  messages: {
    cs: {
      validation: {
        required({ name }) {
          return `${name} je povinný údaj.`
        },
      },
      ui: {
        incomplete: 'Bohužel, některá pole nejsou vyplněna správně.',
      },
    },
  },
})
