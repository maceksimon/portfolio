<script setup>
defineProps(
  link,
  activeClass
)
</script>

<template>
  <a
    :key="link._path"
    :href="link._path"
    class="shrink-0"
    :class="{ 'font-bold': $route.path === link._path }"
  >
    {{ link.navTitle || link.title }}
  </a>
</template>
