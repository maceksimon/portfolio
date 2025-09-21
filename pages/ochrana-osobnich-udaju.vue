<template>
  <div class="p-4 sm:p-8 lg:p-16 mt-12">
    <div class="prose prose-lg mx-auto">
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const post = await queryContent(
  "personal-protection",
  locale.value.toLowerCase()
).findOne()
</script>
