<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <h1>{{ $t("blog.title") }}</h1>
    <div
      class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <ArticleTeaser v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const posts = await queryContent("blog")
  .where({
    locale: locale.value.toLowerCase()
  })
  .find()
</script>
