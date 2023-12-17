<template>
  <div>
    <h1>{{ $t("blog.title") }}</h1>
    <div
      class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article v-for="post in posts" :key="post.id"
        class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-24 lg:pt-40">
        <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <time :datetime="post.created" class="mr-8">{{ formatDate(post.created) }}</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <!-- <img :src="post.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10" /> -->
              {{ post.authorName }}
            </div>
          </div>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
          <LocLink :to="stripTrailingLocale(post._path!)">
            <span class="absolute inset-0" />
            {{ post.title }}
          </LocLink>
        </h3>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}

const posts = await queryContent("blog")
  .where({
    locale: locale.value.toLowerCase()
  })
  .find()

function stripTrailingLocale(path: string): string {
  return path.replace(locale.value.toLowerCase(), "")
}
</script>
