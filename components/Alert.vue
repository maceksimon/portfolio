<script setup lang="ts">
withDefaults(defineProps<{ icon: string }>(), {
  icon: "heroicons-outline:exclamation",
});
</script>

<template>
  <div class="rounded-md border border-orange-200 bg-orange-100 p-4 dark:bg-orange-400/25">
    <div class="flex items-center">
      <div v-if="icon" class="mr-3 flex flex-shrink-0 items-center">
        <Icon class="h-5 w-5 text-orange-800/75 dark:text-orange-100/50" aria-hidden="true" :name="icon" />
      </div>
      <div class="alert-text not-prose flex items-center">
        <div v-if="$slots.title" class="m-0 text-base font-medium text-orange-900 dark:text-orange-100">
          <MDCSlot :use="$slots.title" unwrap="p" />
        </div>
        <div v-if="$slots.default" class="mt-2 text-sm text-orange-700">
          <MDCSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.not-prose :deep(a) {
  color: var(--tw-prose-links);
  @apply underline;

  &:hover {
    @apply border-none no-underline;
  }
}

.dark .not-prose :deep(a) {
  color: var(--tw-prose-invert-links);
}
</style>
