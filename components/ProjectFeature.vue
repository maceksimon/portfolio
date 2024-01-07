<template>
  <div v-if="data" class="mt-32 max-w-7xl sm:mt-56 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto flex flex-col gap-16 lg:gap-8 items-center lg:flex-row-reverse max-w-2xl sm:max-w-none">
      <div class="aspect-[7/4] shrink-0 grow">
        <!-- Mockup -->
        <!-- TODO: Use image on mobile -->
        <iframe v-if="data.rive.mockup" :src="data.rive.mockup" loading="lazy" class="h-full w-full border-none"></iframe>
      </div>
      <div class="lg:w-2/5 shrink-0">
        <div class="mb-2 text-lg font-semibold leading-8 tracking-tight text-purple-300">
          {{ $t("projectFeature.highlight") }}
        </div>
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:max-w-md sm:text-3xl lg:text-5xl xl:max-w-3xl">
          {{ data.head.title }}
        </h2>
        <div class="mt-6 text-lg text-gray-700 dark:text-gray-200 lg:text-xl">
          {{ data.head.description }}
        </div>
        <div>
          <div class="flex">
            <NuxtLink :to="data.url.web.full" target="_blank" class="relative group mt-8">
              <!-- Animated shadow -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
              </div>
              <div class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center lg:divide-x divide-gray-500">
                <span class="hidden lg:block pr-6 text-gray-100">{{ data.url.web.readable }}</span>
                <span class="lg:pl-6 text-purple-300 group-hover:text-gray-100 transition duration-200">{{
                  $t('projectFeature.buttonWebsite') }} &rarr;</span>
              </div>
            </NuxtLink>
          </div>
          <!-- <NuxtLink :href="data._path"
            class="bg-gradient-animated mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-700 via-purple-500 to-pink-400 px-4 py-2 text-base font-semibold text-white hover:bg-purple-700 md:py-3 md:px-7 md:text-lg">
            {{ $t("projectFeature.buttonDetail") }}
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Alert>
      {{ $t("alert.missingData") }}
    </Alert>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data } = await useAsyncData("portfolioItemFeatured", () =>
  queryContent(
    "portfolio",
    "upupaepop",
    locale.value.toLowerCase()
  ).findOne()
);
</script>
