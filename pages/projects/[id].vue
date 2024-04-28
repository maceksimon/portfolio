<template>
  <div v-if="project" class="text-white">
    {{ project }}
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: project, error } = await useAsyncData('project', () => queryContent(
  "projects",
  route.params.id,
  locale.value.toLowerCase()).findOne())
</script>
