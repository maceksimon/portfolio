<template>
  <div v-if="project" class="text-white">
    {{ project }}
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<script setup>
const route = useRoute()
const { data: project, error } = await useAsyncData('project', () => queryContent('projects', route.params.id).findOne())
</script>
