<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

const { data: articles } = await useAsyncData('grants', () => queryCollection('grants').all())

useSeoMeta({
  title: t('seoTitle'),
  description: t('seoDescription'),
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ t('title') }}
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-700 text-balance">
        {{ t('intro') }}
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="article.path"
        class="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
      >
        <h2 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {{ article.title }}
        </h2>
        <p v-if="article.description" class="mt-3 flex-grow text-sm text-gray-600 line-clamp-3">
          {{ article.description }}
        </p>
        <div class="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
          {{ t('readMore') }}
          <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "cs": {
    "title": "Granty na web",
    "intro": "Přehled dotací a grantů pro financování webových projektů. Píšu o tom, jak na žádosti, co je potřeba připravit a jaké jsou podmínky jednotlivých programů.",
    "readMore": "Číst více",
    "seoTitle": "Granty na web | Šimon Jasný",
    "seoDescription": "Přehled dotací a grantů pro financování webových projektů. Jak na žádosti a co je potřeba připravit."
  },
  "en": {
    "title": "Web Grants",
    "intro": "Overview of grants and funding opportunities for web projects. I write about how to apply, what to prepare, and what the requirements are for different programs.",
    "readMore": "Read more",
    "seoTitle": "Web Grants | Šimon Jasný",
    "seoDescription": "Overview of grants and funding opportunities for web projects. How to apply and what to prepare."
  }
}
</i18n>
