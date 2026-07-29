<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-50 px-6 py-12 text-center sm:rounded-3xl sm:px-16 border border-gray-100">
      <h2 class="mx-auto max-w-2xl text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
        {{ t('title') }}
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-600">
        {{ t('description') }}
      </p>
      <div class="mt-6 flex items-center justify-center">
        <NuxtLink
          to="/granty-na-web"
          class="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 hover:no-underline transition-colors"
        >
          {{ t('cta') }} &rarr;
        </NuxtLink>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#grants-gradient)" fill-opacity="0.25" />
        <defs>
          <radialGradient id="grants-gradient">
            <!-- blue-200 to blue-400 -->
            <stop stop-color="#bfdbfe" />
            <stop offset="1" stop-color="#60a5fa" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<i18n lang="json">
{
  "cs": {
    "title": "Víte, že na web můžete čerpat dotace?",
    "description": "Pomůžu vám s žádostí o grant a připravím web, který splní všechny požadavky programu.",
    "cta": "Zjistit více"
  },
  "en": {
    "title": "Did you know you can get grants for your website?",
    "description": "I can help you apply for funding and build a website that meets all program requirements.",
    "cta": "Learn more"
  }
}
</i18n>
