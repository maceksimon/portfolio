<template>
  <div class="relative mb-8 flex flex-col-reverse sm:mb-12 sm:flex-col">
    <NuxtPicture src="/image/hero.png" alt="Users connecting to the internet" aria-hidden="true" format="png"
      :imgAttrs="{
        class:
          'bottom-0 right-0 isolate m-0 mt-4 h-full w-auto sm:absolute sm:mt-0',
      }"
    />
    <div class="isolate">
      <div class="not-prose">
        <div
          class="mb-2 font-bold text-gray-700 dark:text-gray-200 sm:mb-4 sm:mt-12 sm:text-lg lg:mb-6 lg:text-xl">
          {{ $t('index.hero.highlight') }}
        </div>
        <h1
          class="sm:max-w-md text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl xl:max-w-2xl text-gray-900 dark:text-gray-50">
          <span class="bg-clip-text bg-gradient-to-r text-transparent from-orange-600 via-red-400 to-pink-500">{{ $t('index.hero.titleHighlight') }}</span> <span>{{ $t('index.hero.title') }}</span>
        </h1>
      </div>
      <div
        class="mt-6 max-w-xs leading-relaxed tracking-normal text-gray-500 dark:text-gray-300 sm:mt-8 sm:text-lg lg:mt-12 lg:text-xl lg:leading-loose xl:max-w-none">
        {{ $t('index.hero.perex') }}
      </div>
      <div class="not-prose mt-6 sm:mt-10 sm:flex">
        <div>
          <VButton url="/portfolio" variant="primary">
            {{ $t('index.hero.buttonPortfolio') }}
          </VButton>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <VButton type="secondary" variant="secondary" @click="open()">
            {{ $t('index.hero.buttonContact') }}
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// composables
const { open, toggle } = useDialogContact()
</script>
