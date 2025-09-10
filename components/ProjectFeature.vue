<template>
  <div v-if="data" class="isolate mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
    <div class="mx-auto w-full flex flex-col gap-16 lg:gap-8 items-center lg:flex-row-reverse max-w-2xl sm:max-w-none">
      <div class="aspect-[7/4] shrink-0 grow">
        <!-- Mockup -->
        <iframe v-if="isLargeScreen && data.rive.mockup" :src="data.rive.mockup" loading="lazy"
          class="h-full w-full border-none"></iframe>
        <img v-else src="/image/upupaepop-mobile-mockup.webp" alt="Upupaepop mockup" class="w-full h-full object-contain">
      </div>
      <div class="lg:w-2/5 shrink-0">
        <div class="mb-2 text-lg font-semibold leading-8 tracking-tight text-blue-600">
          {{ $t("projectFeature.highlight") }}
        </div>
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 sm:max-w-md sm:text-3xl lg:text-5xl xl:max-w-3xl">
          {{ data.head.title }}
        </h2>
        <div class="mt-6 text-lg text-gray-700 text-balance">
          {{ data.head.description }}
        </div>
        <div>
          <div class="flex">
            <NuxtLink :to="data.url.web.full" target="_blank" class="relative group mt-8 text-blue-600 hover:text-blue-800">
              {{ data.url.web.readable }}
            </NuxtLink>
          </div>
          <!-- <NuxtLink :href="data._path"
            class="bg-gradient-animated mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 md:py-3 md:px-7 md:text-lg">
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
const isLargeScreen = useMediaQuery('(min-width: 768px)')

const { data } = useAsyncData("portfolioItemFeatured", () =>
  queryContent(
    "projects",
    "upupaepop",
    locale.value.toLowerCase()
  ).findOne()
);
</script>
