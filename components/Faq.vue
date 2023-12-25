<template>
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-white">{{ $t('faq.title') }}</h2>
      <p class="mt-6 max-w-2xl text-base leading-7 text-gray-300">{{ $t('faq.perex') }} <a href="#"
          class="font-medium text-purple-400 hover:text-purple-300 underline hover:no-underline" @click.prevent="toggle()">
          {{ $t('faq.linkContact') }}
          </a> {{ $t('faq.perex2') }}</p>
      <div class="mt-20">
        <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-base font-semibold leading-7 text-white">{{ faq.question }}</dt>
            <dd class="mt-2 text-base leading-7 text-gray-300">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const { toggle } = useDialogContact()
const { locale } = useI18n()
const file = await queryContent("faq", locale.value.toLowerCase()).findOne()
const faqs = file.body
</script>
