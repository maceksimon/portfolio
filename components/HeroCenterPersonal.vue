<template>
  <div class="relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ t('title') }}</h2>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 text-balance">
        {{ t("description") }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
          class="rounded-md bg-gray-50 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
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
    "description": "Chcete nové stránky a nesedí vám přístup webových studií a marketingových agentur? Jde to i bez firemních zástupců, technických termínů, a nepřehledných kalkulací. Jestli je vám bližší dohodnout se osobně, přímo s vývojářem, který mluví vaším jazykem, zkuste mi napsat.",
    "contact": "Poslat zprávu"
  },
  "en": {
    "title": "Great websites are not just for big companies.",
    "description": "You don't need to have a large budget to get a website that looks and works exactly the way you want. Modern technologies enable efficient development that is both fast and cheap. Do you want to know how if it can work for you? Hit me up and I will walk you through it. Your dream website might be closer than you think.",
    "contact": "Message me"
  }
}
</i18n>
