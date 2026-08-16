<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

const props = withDefaults(defineProps<{
  items: BreadcrumbItem[]
  center?: boolean
}>(), {
  center: false
})

const { t } = useI18n({ useScope: 'local' })

const crumbs = computed<BreadcrumbItem[]>(() => [
  { label: t('home'), to: '/' },
  ...props.items,
])

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: crumbs.value.map(crumb => ({
      name: crumb.label,
      item: crumb.to,
    })),
  }),
])
</script>

<template>
  <nav aria-label="Breadcrumb" class="not-prose mb-6 text-sm">
    <ol
      class="flex flex-wrap items-center gap-1.5 list-none pl-0 text-gray-500"
      :class="{ 'justify-center': center }"
    >
      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center gap-1.5">
        <NuxtLink
          v-if="crumb.to && index < crumbs.length - 1"
          :to="crumb.to"
          class="hover:text-blue-600 transition-colors"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span
          v-else
          class="max-w-[200px] truncate font-medium text-gray-900 sm:max-w-xs"
          aria-current="page"
        >
          {{ crumb.label }}
        </span>
        <svg
          v-if="index < crumbs.length - 1"
          class="h-4 w-4 shrink-0 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<i18n lang="json">
{
  "cs": {
    "home": "Úvod"
  },
  "en": {
    "home": "Home"
  }
}
</i18n>
