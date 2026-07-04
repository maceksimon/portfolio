<script setup lang="ts">
const { data: articles } = await useAsyncData('grants', () => queryCollection('grants').all())
</script>

<template>
  <div>
    <h1>Granty na web</h1>
    <p><!-- TODO: intro text --></p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        <p v-if="article.description">{{ article.description }}</p>
      </li>
    </ul>
  </div>
</template>
