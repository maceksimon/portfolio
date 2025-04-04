<template>
  <div class="isolate overflow-hidden pt-14">
    <NuxtImg src="/image/sunrise.webp" alt="" class="max-w-2xl mx-auto absolute inset-x-0 top-0 -z-10 h-auto w-full object-cover" />
    <div class="mx-auto max-w-3xl pt-32 sm:pt-48 lg:pt-56 xl:pt-72">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-snug text-balance text-white sm:text-6xl">
          {{ t('highlight') }}<br />
          {{ t('title') }}
        </h1>
        <p class="max-w-xl mx-auto mt-6 text-balance text-lg font-medium leading-8 text-gray-300 xl:mt-12 xl:text-xl/relaxed">
          {{ t('description') }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:mt-16 xl:mt-20">
          <a href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"  @click.prevent="toggle()">
            {{ t('buttonContact') }}
          </a>
          <a href="/#projects" class="text-sm font-semibold leading-6 text-white">
            {{ t('buttonLearn') }}
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

const { toggle } = useDialogContact()
</script>

<i18n lang="json">
  {
    "cs": {
      "buttonContact": "Kontaktovat",
      "buttonLearn": "Ukázky práce",
      "description": "Navrhuju a stavím weby, které dobře vypadají, dělají svou práci a nekomplikují tu vaši.",
      "highlight": "Váš web funguje",
      "title": "když vám rozjasní den"
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
