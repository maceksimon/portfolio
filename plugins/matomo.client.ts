import type { Router } from 'vue-router'

// ~/plugins/matomo.client.ts
declare global {
  interface Window {
    _paq: any[][]
    _mtm: any[]
  }
}

export default defineNuxtPlugin(nuxtApp => {
  if (import.meta.client) {
    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    if (isLocalhost) return

    const _paq = (window._paq = window._paq || [])

    _paq.push(['enableLinkTracking'])
    _paq.push(['setTrackerUrl', 'https://phpstack-1209068-5475663.cloudwaysapps.com/matomo.php'])
    _paq.push(['setSiteId', '1'])
    _paq.push(['trackPageView'])

    const d = document
    const g = d.createElement('script')
    g.async = true
    g.src = 'https://phpstack-1209068-5475663.cloudwaysapps.com/matomo.js'
    const s = d.getElementsByTagName('script')[0]
    s.parentNode?.insertBefore(g, s)

    // Track SPA route changes
    const router: Router = nuxtApp.$router as Router
    router.afterEach(to => {
      _paq.push(['setCustomUrl', to.fullPath])
      _paq.push(['trackPageView'])
    })
  }
})
