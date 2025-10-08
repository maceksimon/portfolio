import { defineNuxtPlugin } from '#app'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export default defineNuxtPlugin((nuxtApp) => {
  const link = '/ochrana-osobnich-udaju'

  CookieConsent.run({
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {
        enabled: false
      }
    },
    language: {
      default: 'cs',
      autoDetect: 'browser',
      translations: {
        cs: {
          consentModal: {
            title: 'Aby se vám web dobře používal (Souhlas s cookies)',
            description: `Pro co nejpohodlnější používání webu potřebuji váš <a href="${link}">souhlas</a> se zpracováním souborů cookies.`,
            acceptAllBtn: 'Povolit vše',
            showPreferencesBtn: 'Nastavení',
            acceptNecessaryBtn: 'Pouze nezbytné',
            revisionMessage:
              '<br><br><span style="font-weight: bold !important;">Upozornění!</span> Pravidla a podmínky se změnily od Vaší poslední návštěvy.'
          },
          preferencesModal: {
            title: 'Nastavení cookies',
            acceptAllBtn: 'Souhlasím se všemi cookies',
            acceptNecessaryBtn: 'Pouze nezbytné',
            savePreferencesBtn: 'Souhlasím s vybranými cookies',
            closeIconLabel: 'Zavřít',
            serviceCounterLabel: 'Služba|Služby',
            sections: [
              {
                title: 'Přizpůsobte si cookies',
                description: 'Upravte si cookies dle vlastních preferencí.'
              },
              {
                title:
                  'Technické cookies <span style="font-size:12px;font-style:italic;">nezbytné pro správné fungování webu</span>',
                description:
                  'Tyto cookies jsou potřeba kvůli správnému fungování webu. Nelze je vypnout.',
                linkedCategory: 'necessary'
              },
              {
                title:
                  'Analytické cookies <span style="font-size:12px;font-style:italic;">pro zlepšování kvality webu</span>',
                description:
                  'Pomáhají nám měřit výkon webu a vylepšovat služby.',
                linkedCategory: 'analytics'
              },
              {
                title: 'Více informací',
                description: `Potřebujeme váš <a class="cc-link" href="${link}">souhlas</a> se zpracováním cookies, abychom vám mohli zobrazovat informace v souladu s vaším souhlasem.`
              }
            ]
          }
        }
      }
    },
    guiOptions: {
      consentModal: {
        layout: 'bar',
        position: 'bottom center'
      },
      preferencesModal: {
        layout: 'box'
      }
    },
    onFirstConsent: ({ cookie }: { cookie: CookieConsent.CookieValue }) => {
      if (CookieConsent.acceptedCategory('analytics')) {
        window.startMatomoTracking?.()
      }
    },
    onConsent: ({ cookie }: { cookie: CookieConsent.CookieValue }) => {
      if (CookieConsent.acceptedCategory('analytics')) {
        window.startMatomoTracking?.()
      }
    }
  })
})
