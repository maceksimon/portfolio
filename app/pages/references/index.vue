<script setup lang="ts">
const { data: posts } = await useAsyncData('references', () => queryCollection('references').all())
</script>

<template>
  <div>
    <h1>Reference ({{ posts?.length }})</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
