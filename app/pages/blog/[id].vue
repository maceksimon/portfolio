<template>
  <div class="bg-gray-900 p-4 sm:p-8 lg:p-16 rounded-2xl mt-12">
    <div class="prose prose-lg prose-invert mx-auto">
      <!-- <ContentRenderer :value="post" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

// const post = await queryContent(
//   "blog",
//   route.params.id as string,
//   locale.value.toLowerCase()
// ).findOne()
</script>
