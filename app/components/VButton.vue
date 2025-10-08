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
    class="bg-gradient-animated inline-flex w-full items-center justify-center rounded-md border bg-gradient-to-r text-base font-semibold shadow md:py-3 md:px-7 md:text-lg"
    :class="{
      'border-transparent from-violet-800 via-violet-600 to-blue-500 text-white ':
        variant === 'primary',
      'border-blue-200 bg-gradient-to-r from-blue-100 via-white to-blue-100 text-blue-800':
        variant === 'secondary',
      'bg-blue-600  text-white transition-colors duration-150 ease-out hover:bg-blue-700':
        variant === 'default',
      'px-4 py-2': size === 'default',
      'px-5 py-3': size === 'large',
    }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>
