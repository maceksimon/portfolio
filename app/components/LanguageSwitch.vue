<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <!-- <button
    v-if="locale !== 'en'"
    class="text-md"
    @click="setLocale('en')"
    title="English"
  >
    <Icon
      name="flag:gb-1x1"
      class="h-6 w-6 flex-shrink-0 rounded-full border-2 border-gray-300"
    />
  </button> -->
  <button
    v-if="locale !== 'cs'"
    class="text-md"
    @click="setLocale('cs')"
    title="Čeština"
  >
    <Icon
      name="flag:cz-1x1"
      class="h-6 w-6 flex-shrink-0 rounded-full border-2 border-gray-300"
    />
  </button>
</template>
