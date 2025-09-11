<template>
  <div class="isolate overflow-hidden pt-14">
    <!-- <NuxtImg src="/image/sunrise.webp" alt="" class="max-w-2xl mx-auto absolute inset-x-0 top-0 -z-10 h-auto w-full object-cover" /> -->
    <div class="mx-auto max-w-3xl px-4 pt-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-snug text-balance text-gray-900 sm:text-6xl">
          <span v-html="t('highlight')"></span><br />
          <span v-html="t('title')"></span>
        </h1>
        <p class="max-w-xl mx-auto mt-6 text-balance text-lg leading-8 text-gray-600 xl:mt-12 xl:text-xl/relaxed">
          {{ t('description') }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:mt-16 xl:mt-20">
          <a href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 lg:px-5 lg:py-3 lg:text-base"  @click.prevent="toggle()">
            {{ t('buttonContact') }}
          </a>
          <a href="/#projects" class="text-sm font-semibold leading-6 text-gray-900 lg:text-base">
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
      "description": "Stavím profi webovky pro fajn lidi. Řeším věci osobně a na míru.",
      "highlight": "",
      "title": "Když přestaneš řešit web a&nbsp;prostě ho máš"
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
