<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-2 text-lg font-semibold leading-8 tracking-tight text-blue-300">
      {{ t("highlight") }}
    </div>
    <h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ t('title') }}</h2>
    <p class="mt-6 max-w-2xl text-base leading-7 text-gray-300 text-balance">{{ t('perex') }} <a href="#"
        class="font-medium text-blue-300 hover:text-blue-100 underline hover:no-underline"
        @click.prevent="toggle()">
        {{ t('linkContact') }}
      </a> {{ t('perex2') }}</p>
    <div class="mt-20">
      <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
        <div v-for="faq in faqs" :key="faq.id">
          <dt class="text-base font-semibold leading-7 text-white">{{ faq.question }}</dt>
          <dd class="mt-2 text-base leading-7 text-gray-300">{{ faq.answer }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const { toggle } = useDialogContact()
const { locale, t } = useI18n({
  useScope: 'local'
})
const file = await queryContent("faq", locale.value.toLowerCase()).findOne()
const faqs = file.body
</script>


<i18n lang="json">{
  "cs": {
    "title": "Odpovědi na nejčastější otázky",
    "highlight": "Co by vás mohlo zajímat",
    "linkContact": "kontaktní formulář",
    "perex": "Pokud se chcete zeptat na cokoliv dalšího, napište mi přes ",
    "perex2": " a já se vám ozvu."
  },
  "en": {
    "title": "Frequently asked questions",
    "highlight": "What you might want to know",
    "linkContact": "the contact form",
    "perex": "If there is something else you would like to know, message me via ",
    "perex2": " and I will get back to you."
  }
}</i18n>
