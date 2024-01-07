<script setup lang="ts">
const { link, variant, size } = withDefaults(
  defineProps<{ link?: string; variant?: string; size?: string }>(),
  {
    link: "",
    variant: "default",
    size: "default",
  }
);

const tag: string = link.length ? "a" : "button";
</script>

<template>
  <component
    :is="tag"
    :href="link"
    class="bg-gradient-animated inline-flex w-full items-center justify-center rounded-md border bg-gradient-to-r text-base font-semibold shadow dark:border-none md:py-3 md:px-7 md:text-lg"
    :class="{
      'border-transparent from-violet-800 via-violet-600 to-purple-500 text-white ':
        variant === 'primary',
      'border-purple-200 bg-gradient-to-r from-purple-100 via-white to-purple-100 text-purple-800 dark:from-purple-200 dark:via-purple-50 dark:to-purple-100':
        variant === 'secondary',
      'bg-purple-600  text-white transition-colors duration-150 ease-out hover:bg-purple-700':
        variant === 'default',
      'px-4 py-2': size === 'default',
      'px-5 py-3': size === 'large',
    }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>
