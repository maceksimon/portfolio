<template>
  <div class="relative isolate mb-8 flex flex-col-reverse sm:mb-12 sm:flex-col px-4 sm:px-6 lg:px-8">
    <div class="absolute -top-40 inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
      aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    <!-- <NuxtPicture src="/image/hero.png" alt="Users connecting to the internet" aria-hidden="true" format="png"
      :imgAttrs="{
        class:
          'bottom-0 right-0 isolate m-0 mt-4 h-full w-auto sm:absolute sm:mt-0',
      }"
    /> -->
    <div class="isolate max-w-2xl sm:max-w-none">
      <div class="not-prose">
        <div class="mb-2 font-bold text-gray-700 dark:text-gray-200 sm:mb-4 sm:mt-12 sm:text-lg lg:mb-6 lg:text-xl">
          {{ $t('index.hero.highlight') }}
        </div>
        <h1
          class="sm:max-w-md text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl xl:max-w-2xl text-gray-900 dark:text-gray-50">
          <span class="bg-clip-text bg-gradient-to-r text-transparent from-violet-500 via-purple-400 to-pink-500">{{
            $t('index.hero.titleHighlight') }}</span> <span>{{ $t('index.hero.title') }}</span>
        </h1>
      </div>
      <div class="mt-6 text-lg dark:text-gray-100 lg:text-xl">
        <p>{{ $t('index.hero.perex') }}</p>
        <p>{{ $t('index.hero.perex2') }}</p>
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
const { t } = useI18n({
  useScope: 'local'
})

const { open, toggle } = useDialogContact()
</script>
