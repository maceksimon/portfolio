<script setup lang="ts"></script>

<template>
  <div class="relative mb-8 flex flex-col-reverse sm:mb-12 sm:flex-col">
    <!-- <NuxtPicture src="/image/profile_light.png" alt="Simon Macek profile photo" aria-hidden="true" format="webp"
      :imgAttrs="{
        class:
          'bottom-0 right-0 isolate m-0 mt-4 h-full w-auto dark:hidden sm:absolute sm:mt-0',
      }"
    />
    <NuxtPicture src="/image/profile_dark.png" alt="Simon Macek profile photo" aria-hidden="true" format="webp" :imgAttrs="{
      class:
        'bottom-0 right-0 isolate m-0 mt-4 hidden h-full w-auto dark:block sm:absolute sm:mt-0',
      }"
    /> -->
    <div class="isolate">
      <div class="not-prose">
        <div
          class="mb-2 font-bold text-gray-700 dark:text-gray-200 sm:mb-4 sm:mt-12 sm:text-lg lg:mb-6 lg:text-xl">
          {{ $t('index.hero.highlight') }}
        </div>
        <h1
          class="sm:max-w-md text-4xl font-extrabold uppercase tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-7xl xl:max-w-2xl [&_strong]:bg-clip-text [&_strong]:bg-gradient-to-r [&_strong]:text-transparent from-orange-600 via-red-400 to-pink-500" v-html="$t('index.hero.title')">
        </h1>
      </div>
      <div
        class="mt-6 max-w-xs leading-relaxed tracking-normal text-gray-500 dark:text-gray-300 sm:mt-8 sm:text-lg lg:mt-12 lg:text-xl lg:leading-loose xl:max-w-none">
        {{ $t('index.hero.perex') }}
      </div>
      <!-- <div v-if="button1 || button2" class="not-prose mt-6 sm:mt-10 sm:flex">
        <div>
          <VButton :link="link1" type="primary">{{ button1 }}</VButton>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <VButton type="secondary" @click="toggleModal()">
            {{ button2 }}
          </VButton>
        </div>
      </div> -->
    </div>
  </div>
</template>
