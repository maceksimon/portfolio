<template>
  <div class="relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ t('title') }}</h2>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 text-balance">
        {{ t("description") }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
          class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          @click="toggle()">
          {{ t("contact") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
const { toggle } = useDialogContact()
</script>

<i18n lang="json">{
  "cs": {
    "title": "Web bez agentury",
    "description": "Pokud přemýšlíte o nových stránkách, ale nesedí vám přístup webových studií a marketingových agentur, jde to i jinak. Bez firemních zástupců, technických výrazů a nepřehledných kalkulací. Je vám bližší domluvit se přímo s vývojářem, který mluví jasně a k věci? Napište mi.",
    "contact": "Poslat zprávu"
  },
  "en": {
    "title": "Great websites are not just for big companies.",
    "description": "You don't need to have a large budget to get a website that looks and works exactly the way you want. Modern technologies enable efficient development that is both fast and cheap. Do you want to know how if it can work for you? Hit me up and I will walk you through it. Your dream website might be closer than you think.",
    "contact": "Message me"
  }
}
</i18n>
