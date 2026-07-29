<template>
  <div class="not-prose my-6 sm:my-8">
    <NuxtLink
      :to="to"
      class="group relative isolate flex items-start gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-blue-100 px-4 py-3 sm:px-6 sm:py-5 overflow-hidden hover:border-blue-200 transition-all"
    >
      <!-- Gradient background -->
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#case-study-gradient)" fill-opacity="0.3" />
        <defs>
          <radialGradient id="case-study-gradient">
            <!-- blue-200 to blue-400 -->
            <stop stop-color="#bfdbfe" />
            <stop offset="1" stop-color="#60a5fa" />
          </radialGradient>
        </defs>
      </svg>

      <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600">
        <!-- Cursor click icon -->
        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      </div>
      <div class="flex-grow">
        <p class="text-sm sm:text-base font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
          <slot />
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>
