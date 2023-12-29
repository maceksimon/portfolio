<template>
  <!-- Feature section -->
  <div class="mx-auto mt-32 max-w-7xl sm:mt-56 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none text-center">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-purple-300">{{ $t('serviceTeaser.highlight') }}</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ $t('serviceTeaser.title') }}</p>
      <p class="mt-6 text-lg leading-8 text-gray-300">{{ $t('serviceTeaser.perex') }}</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:gap-x-12 lg:max-w-none lg:grid-cols-3">
        <div v-for="feature in primaryFeatures" :key="feature.name" class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-white">
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-purple-400 border bg-purple-400/10 border-purple-400/25">
              <Icon :name="feature.icon" class="h-10 w-10" aria-hidden="true" />
            </div>
            {{ feature.name }}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
            <p class="flex-auto">{{ feature.description }}</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const primaryFeatures = [
  {
    name: t('serviceTeaser.service.control.title'),
    icon: 'arcticons:control-center',
    description: t('serviceTeaser.service.control.description'),
    href: '#',
  },
  {
    name: t('serviceTeaser.service.design.title'),
    icon: 'arcticons:color-palette',
    description: t('serviceTeaser.service.design.description'),
    href: '#',
  },
  {
    name: t('serviceTeaser.service.function.title'),
    icon: 'arcticons:aggregator',
    description: t('serviceTeaser.service.function.description'),
    href: '#',
  },
]
</script>
