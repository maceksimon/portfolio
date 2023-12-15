<template>
  <div v-if="data" class="not-prose">
    <div class="flex flex-col items-center lg:flex-row-reverse">
      <div class="aspect-[7/4] shrink-0 grow">
        <iframe
          v-if="data.rive.mockup"
          :src="data.rive.mockup"
          loading="lazy"
          class="h-full w-full border-none"
        ></iframe>
      </div>
      <div class="w-2/5 shrink-0">
        <div
          class="mb-2 font-bold text-blue-600 dark:text-blue-300 sm:mb-4 sm:text-lg"
        >
          {{ $t("projectFeature.highlight") }}
        </div>
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:max-w-md sm:text-3xl lg:text-5xl xl:max-w-3xl"
        >
          {{ data.head.title }}
        </h2>
        <div class="mt-6 text-lg text-gray-700 dark:text-gray-300 lg:text-xl">
          {{ data.head.description }}
        </div>
        <div>
          <div class="flex">
            <NuxtLink to="https://upupaepop.cz/" target="_blank" class="relative group mt-8">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-500">
                <span class="pr-6 text-gray-100">upupaepop.cz</span>
                <span class="pl-6 text-blue-300 group-hover:text-gray-100 transition duration-200">Check out the web &rarr;</span>
              </div>
            </NuxtLink>
          </div>
          <NuxtLink
            :href="data._path"
            class="bg-gradient-animated mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 md:py-3 md:px-7 md:text-lg"
          >
            {{ $t("projectFeature.buttonDetail") }}
          </NuxtLink>
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
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const { data } = await useAsyncData("portfolioItemFeatured", () =>
  queryContent("portfolio", "upupaepop")
    // do not fetch the root page
    .findOne()
);
</script>
