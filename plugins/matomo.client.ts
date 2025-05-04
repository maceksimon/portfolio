import type { Router } from 'vue-router'

declare global {
  interface Window {
    _paq: any[][]
    _mtm: any[]
    startMatomoTracking: () => void
  }
}

export default defineNuxtPlugin(nuxtApp => {
  if (!import.meta.client) return

  // initialize Matomo
  window.startMatomoTracking = () => {
    // prevent double init
    if (window._paq && document.querySelector('script[src*="matomo.js"]')) return

    const _paq = (window._paq = window._paq || [])

    _paq.push(['enableLinkTracking'])
    _paq.push(['setTrackerUrl', 'https://phpstack-1209068-5475663.cloudwaysapps.com/matomo.php'])

    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    _paq.push(['setSiteId', isLocalhost ? '1' : '2'])
    _paq.push(['trackPageView'])

    const g = document.createElement('script')
    g.async = true
    g.src = 'https://phpstack-1209068-5475663.cloudwaysapps.com/matomo.js'
    document.head.appendChild(g)

    // Track SPA route changes
    const router: Router = nuxtApp.$router as Router
    router.afterEach(to => {
      _paq.push(['setCustomUrl', to.fullPath])
      _paq.push(['trackPageView'])
    })
  }
})
