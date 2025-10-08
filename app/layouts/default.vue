<template>
  <div class="overflow-x-clip">
    <div class="container mx-auto pb-8 sm:pb-16 accent-blue bg-white">
      <HeaderMenu />
      <div class="pt-16 min-h-screen">
        <slot />
      </div>
      <NetlifyFormHidden />
      <DialogContact />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import NetlifyFormHidden from '~/components/NetlifyFormHidden.vue'
</script>
