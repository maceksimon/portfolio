<template>
  <div class="my-8 sm:my-12 lg:my-16">
    <div class="px-4 sm:px-6 lg:px-8">
      <header class="max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {{ t("title") }}
        </h1>
        <p class="mt-6 prose prose-invert">
          {{ t("perex") }}
        </p>
      </header>
      <div class="mt-16 sm:mt-20">
        <ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <!-- <li v-for="project in projects"
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 border border-transparent hover:border-white/20 transition-colors">
            <NuxtPicture :src="project.fields.image" aria-hidden="true" format="jpg" :imgAttrs="{
            class: 'absolute inset-0 -z-10 h-full w-full object-cover'
          }" /> -->
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <!-- Title and link -->
            <!-- <h3 class="mt-3 text-lg font-semibold leading-6 text-white hover:text-gray-200 transition-colors">
              <a v-if="project._path" :href="stripTrailingLocale(project._path)">
                <span class="absolute inset-0" />
                {{ project.title }}
              </a>
            </h3> -->
          <!-- </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n({
  useScope: 'local'
})

// const { data: projects } = await useAsyncData(
//   'projects',
//   () => queryContent('projects').where({
//     locale: locale.value.toLowerCase()
//   })
//     .find()
// )

function stripTrailingLocale(path: string): string {
  return path.replace(locale.value.toLowerCase(), "")
}
</script>


<i18n lang="json">
  {
    "en": {
      "title": "Projects in the online space",
      "perex": "This portfolio grows stronger with time, old project saw seeds of new ones. Projects get niftier and richer with experience and the garden expands organically through the word of mouth."
    },
    "cs": {
      "title": "Projekty v online prostoru",
      "perex": "Webové stránky, které se rozsvítily na digitální síti."
    }
  }
</i18n>
