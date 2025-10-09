<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <div v-if="data" class="mt-4 sm:mt-12 container prose prose-lg mx-auto">
    <ContentRenderer :value="data" />
  </div>
</template>
