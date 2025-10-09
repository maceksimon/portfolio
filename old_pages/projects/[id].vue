<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16">
    <!-- Breadcrumb -->
    <Breadcrumbs />
    <div class="prose prose-invert">
      <ContentDoc :path="`/projects/${route.params.id}/${locale.toLowerCase()}`" />
      <!-- <ContentRenderer :value="project" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

// const { data: project, error } = await useAsyncData('project', () => queryContent(
//   "projects",
//   route.params.id,
//   locale.value.toLowerCase()).findOne())
</script>
