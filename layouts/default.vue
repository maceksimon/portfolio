<template>
  <div class="container mx-auto pb-8 sm:pb-16 accent-blue">
    <HeaderMenu />
    <div class="pt-16 min-h-screen">
      <slot />
    </div>
    <NetlifyFormHidden />
    <DialogContact />
  </div>
</template>

<script setup>
import NetlifyFormHidden from '~/components/NetlifyFormHidden.vue'
</script>
