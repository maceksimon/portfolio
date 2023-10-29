<template>
  <div class="prose prose-lg">
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const post = await queryContent(
  "blog",
  route.params.slug as string,
  locale.value.toLowerCase()
).findOne()
</script>
