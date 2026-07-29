<script setup lang="ts">
const { data: posts } = await useAsyncData('projekty', () => queryCollection('projekty').all())
</script>

<template>
  <div>
    <h1>Projekty ({{ posts?.length }})</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
