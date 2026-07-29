<template>
  <div class="not-prose my-6 sm:my-8 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3 sm:px-6 sm:py-5">
    <dl class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
      <div v-if="deadline">
        <dt class="text-xs sm:text-sm font-medium uppercase tracking-wide text-blue-600">
          Termín podání
        </dt>
        <dd class="mt-1 text-base sm:text-lg font-semibold text-gray-900">
          {{ deadline }}
        </dd>
      </div>
      <div v-if="amount">
        <dt class="text-xs sm:text-sm font-medium uppercase tracking-wide text-blue-600">
          Poskytovaná částka
        </dt>
        <dd class="mt-1 text-base sm:text-lg font-semibold text-gray-900">
          {{ amount }}
        </dd>
      </div>
      <div v-if="budget">
        <dt class="text-xs sm:text-sm font-medium uppercase tracking-wide text-blue-600">
          Rozpočet projektu
        </dt>
        <dd class="mt-1 text-base sm:text-lg font-semibold text-gray-900">
          {{ budget }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  deadline?: string
  amount?: string
  budget?: string
}>()
</script>
