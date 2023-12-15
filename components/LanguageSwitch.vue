<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<template>
  <a
    v-if="locale !== 'en'"
    class="text-md"
    :href="switchLocalePath('en')"
    title="English"
  >
    <Icon
      name="flag:gb-1x1"
      class="h-6 w-6 flex-shrink-0 rounded-full border-2 border-white"
    />
  </a>
  <a
    v-if="locale !== 'cs'"
    class="text-md"
    :href="switchLocalePath('cs')"
    title="Čeština"
  >
    <Icon
      name="flag:cz-1x1"
      class="h-6 w-6 flex-shrink-0 rounded-full border-2 border-white"
    />
  </a>
</template>
