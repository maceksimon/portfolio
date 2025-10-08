<template>
  <div class="my-8 sm:my-12 lg:my-16">
    <div class="px-4 sm:px-6 lg:px-8">
      <header class="max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {{ t('title') }}
        </h1>
        <p class="mt-6 prose prose-invert">
          {{ t('perex') }}
        </p>
      </header>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- <ArticleTeaser v-for="post in posts" :key="post.id" :post="post" /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

// const posts = await queryContent('blog')
//   .where({
//     locale: locale.value.toLowerCase(),
//   })
//   .find()
</script>

<i18n lang="json">
{
  "en": {
    "title": "Projects in the online space",
    "perex": "This portfolio grows stronger with time, old project saw seeds of new ones. Projects get niftier and richer with experience and the garden expands organically through the word of mouth."
  },
  "cs": {
    "title": "Texty z praxe",
    "perex": "Rád sdílím neobyčejně chytré i neobyčejně hloupé věci, na které jsem za svých víc než pět let v IT narazil. Třeba se budou hodit i vám."
  }
}
</i18n>
