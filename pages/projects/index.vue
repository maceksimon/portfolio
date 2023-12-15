<template>
  <div class="sm:px-8 mt-16 sm:mt-32">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <header class="max-w-2xl">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Things I’ve made
              trying to put my dent in the universe.</h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’ve worked on tons of little projects over the
              years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something
              that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
            </p>
          </header>
          <div class="mt-16 sm:mt-20">
            <ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              <li v-for="project in projects"
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <NuxtPicture :src="project.imageUrl" aria-hidden="true" format="jpg" :imgAttrs="{
                  class: 'absolute inset-0 -z-10 h-full w-full object-cover'
                }" />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <!-- Title and link -->
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <a :href="project.href">
                    <span class="absolute inset-0" />
                    {{ project.title }}
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'KSKA',
    href: '#',
    description:
      'Web pro Katedru sociální a kulturní antropologie.',
    imageUrl:
      '/image/portfolio/kska-homepage-desktop.png',
  },
  // More posts...
]
</script>
