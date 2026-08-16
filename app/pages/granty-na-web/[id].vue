<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('grants').path(route.path).first()
})

if (data.value) {
  useSeoMeta({
    title: data.value.title,
    description: data.value.description,
  })
  defineOgImageComponent('Simon', { title: data.value.title })
}
</script>

<template>
  <div v-if="data" class="mt-4 sm:mt-12 container prose prose-lg mx-auto">
    <Breadcrumbs :items="[{ label: t('title'), to: '/granty-na-web' }, { label: data.title }]" />
    <ContentRenderer :value="data" />
  </div>
</template>

<i18n lang="json">
{
  "cs": {
    "title": "Granty na web"
  },
  "en": {
    "title": "Web Grants"
  }
}
</i18n>
