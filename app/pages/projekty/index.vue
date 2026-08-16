<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

const { data: posts } = await useAsyncData('projekty', () => queryCollection('projekty').all())

useSeoMeta({
  title: t('seoTitle'),
  description: t('seoDescription'),
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
    <Breadcrumbs :items="[{ label: t('title') }]" center />
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ t('title') }}
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-700 text-balance">
        {{ t('intro') }}
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="post.path"
        class="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
      >
        <div v-if="post.image" class="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <NuxtImg
            :src="post.image"
            :alt="post.title"
            class="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
          />
          <div v-if="post.tags?.length" class="absolute left-3 top-3 flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-700 backdrop-blur-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="flex flex-grow flex-col p-6">
          <h2 class="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
            {{ post.title }}
          </h2>
          <p v-if="post.description" class="mt-3 flex-grow text-sm text-gray-600 line-clamp-3">
            {{ post.description }}
          </p>
          <div class="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
            {{ t('readMore') }}
            <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "cs": {
    "title": "Projekty",
    "intro": "Přehled webů a projektů, na kterých jsem pracoval.",
    "readMore": "Zobrazit detail",
    "seoTitle": "Projekty | Šimon Jasný",
    "seoDescription": "Přehled webů a projektů, na kterých jsem pracoval."
  },
  "en": {
    "title": "Projects",
    "intro": "An overview of websites and projects I've worked on.",
    "readMore": "View details",
    "seoTitle": "Projects | Šimon Jasný",
    "seoDescription": "An overview of websites and projects I've worked on."
  }
}
</i18n>
