<template>
  <div class="isolate overflow-hidden pt-14">
    <NuxtImg src="/image/sunrise.webp" alt="" class="max-w-2xl mx-auto absolute inset-x-0 top-0 -z-10 h-auto w-full object-cover" />
    <div class="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
      <div class="text-center">
        <div class="mb-2 font-bold text-gray-700 dark:text-gray-200 sm:mb-4 sm:mt-12 sm:text-lg lg:mb-6 lg:text-xl">
          {{ t('highlight') }}
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {{ t('title') }}
        </h1>
        <p class="mt-6 font-medium leading-8 text-gray-300">
          {{ t('description') }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
            {{ t('buttonLearn') }}
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            {{ t('buttonContact') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>

<i18n lang="json">
  {
    "cs": {
      "buttonContact": "Kontaktovat",
      "buttonLearn": "Prohlížet",
      "description": "Vytvářím digitální projekty, které vám nedají spát. ",
      "highlight": "Weby se kterými budete",
      "title": "Zářit online"
    },
    "en": {
      "buttonContact": "Contact",
      "buttonLearn": "Browse",
      "description": "I create digital projects to dazzle.",
      "highlight": "Websites that let you",
      "title": "Shine online"
    }
  }
</i18n>
