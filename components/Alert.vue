<script setup lang="ts">
withDefaults(defineProps<{ icon: string }>(), {
  icon: "heroicons-outline:exclamation",
});
</script>

<template>
  <div class="rounded-md border border-red-200/25 bg-red-100 p-4 dark:bg-red-400/25">
    <div class="flex items-center">
      <div v-if="icon" class="mr-3 flex flex-shrink-0 items-center">
        <Icon class="h-5 w-5 text-red-800/75 dark:text-red-100/50" aria-hidden="true" :name="icon" />
      </div>
      <div class="alert-text not-prose flex items-center">
        <div v-if="$slots.title" class="m-0 text-base font-medium text-red-900 dark:text-red-100">
          <MDCSlot :use="$slots.title" unwrap="p" />
        </div>
        <div v-if="$slots.default" class="text-sm text-red-100">
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
