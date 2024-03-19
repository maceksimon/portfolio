<template>
  <div class="relative isolate overflow-hidden bg-gray-900">
    <div class="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ t('title') }}</h2>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {{ t("description") }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" @click="toggle()">
            {{ t("contact") }}
          </button>
        </div>
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

<i18n lang="json">
  {
    "cs": {
      "title": "Precizní weby nejsou jen pro velké firmy.",
      "description": "Nemusíte být zavedení podnikatelé se stotisícovým rozpočtem abyste si mohli dovolit web, který splňuje vaše představy. Moderní technologie umožňují schopným vývojářům pracovat efektivně rychle a levně. Zajímá vás jak to funguje? Dejte mi vědět a můžeme se o tom pobavit. Váš vysněný web je možná blíž než si myslíte?",
      "contact": "Napište mi"
    },
    "en": {
      "title": "Great websites are not just for big companies.",
      "description": "You don't need to have a large budget to get a website that looks and works exactly the way you want. Modern technologies enable efficient development that is both fast and cheap. Do you want to know how if it can work for you? Hit me up and I will walk you through it. Your dream website might be closer than you think.",
      "contact": "Message me"
    }
  }
</i18n>
