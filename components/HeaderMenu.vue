<template>
  <div class="fixed top-0 inset-x-0 z-10 bg-gradient-to-b from-white/90 to-white/0">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl sm:max-w-none">
        <Popover>
          <nav aria-label="Global" class="flex items-center justify-between py-2 sm:py-4 md:justify-center">
            <!-- Mobile navigation -->
            <NuxtLink to="/#home" class="shrink-0 text-lg text-gray-900 md:hidden">
              <svg class="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80"><circle cx="40" cy="31" r="26" fill="url(#a)"/><circle cx="40" cy="49" r="26" fill="#000"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(0 26 -26 0 40 31)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs></svg>
            </NuxtLink>
            <div class="flex items-center md:hidden">
              <button @click="toggle()"
                class="mr-2 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto text-gray-300"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" />
                </svg>
                <span class="ml-2 text-xs font-semibold">
                  {{ t("contact") }}
                </span>
              </button>
              <div class="-mr-2 flex items-center">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md p-2 bg-gray-900 text-gray-200 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span class="sr-only">{{ t("openMenu") }}</span>
                  <Icon name="heroicons-outline:menu-alt-3" />
                </PopoverButton>
              </div>
            </div>
            <!-- Desktop navigation -->
            <div class="hidden w-full items-center md:flex md:justify-between">
              <!-- Menu -->
              <div class="flex flex-wrap gap-4 lg:text-lg font-medium text-gray-900 md:gap-6 lg:gap-8 2xl:gap-12">
                <NuxtLink v-for="link in navigation" :to="localePath(link._path)">
                  {{ link.title }}
                </NuxtLink>
              </div>
              <!-- Social icons & Color Mode -->
              <div id="navbar-icons" class="flex items-center space-x-4 md:space-x-6 text-gray-900 transition">
                <button @click.prevent="toggle()"
                  class="inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                  <Icon name="mi:email" size="18px" class="text-gray-300" />
                  <span class="ml-2 text-sm font-semibold">{{ t("contact") }}</span>
                </button>
                <SocialIcons />
                <LanguageSwitch />
              </div>
            </div>
          </nav>
          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform transition md:hidden"
              v-slot="{ close }">
              <div
                class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 ">
                <div class="flex items-center justify-between px-4 pt-2">
                  <div class="text-xl font-bold">{{ t("menu") }}</div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md p-2 bg-gray-900 text-gray-200 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span class="sr-only">{{ t("closeMenu") }}</span>
                      <Icon name="heroicons-outline:x" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-5 pt-4 pb-6">
                  <div class="flex flex-col gap-2">
                    <NuxtLink v-for="link in navigation" :to="localePath(link._path)">
                      {{ link.title }}
                    </NuxtLink>
                  </div>
                  <!-- <MenuLink
                    v-for="link in navigation"
                    :key="link._path"
                    :link="link"
                    active-class="font-bold"
                    class="menu-link dark:hover-bg-gray-500 dark:hover-text-white block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200"
                    @click="close()"
                  /> -->
                  <div class="space-x-3 pt-6 text-gray-300 transition">
                    <div class="flex items-center gap-4">
                      <SocialIcons />
                    </div>
                    <!-- <LanguageSwitch /> -->
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const { t } = useI18n({
  useScope: 'local'
})

const localePath = useLocalePath()

const { toggle } = useDialogContact()

const navigation: { title: string, _path: string }[] = [
  {
    title: t('menuHome'),
    _path: '/#home',
  },
  {
    title: t('menuProjects'),
    _path: '/#projects',
  },
  {
    title: t('menuTestimonials'),
    _path: '/#testimonials',
  },
  {
    title: t('menuFaq'),
    _path: '/#faq',
  },
  // {
  //   title: t('menuBlog'),
  //   _path: localePath('/blog'),
  // },
  // {
  //   title: t('menuAbout'),
  //   _path: localePath('/o-mne'),
  // },
]
</script>

<i18n lang="json">
  {
    "cs": {
      "closeMenu": "Zavřít hlavní menu",
      "contact": "Napište mi",
      "menu": "Menu",
      "menuAbout": "O mně",
      "menuBlog": "Blog",
      "menuHome": "Úvod",
      "menuProjects": "Realizace",
      "menuTestimonials": "Reference",
      "menuFaq": "FAQ",
      "openMenu": "Otevřít hlavní menu"
    },
    "en": {
      "closeMenu": "Close main menu",
      "contact": "Contact me",
      "menu": "Menu",
      "menuAbout": "About me",
      "menuBlog": "Blog",
      "menuHome": "Home",
      "menuProjects": "Projects",
      "menuTestimonials": "Testimonials",
      "menuFaq": "FAQ",
      "openMenu": "Open main menu"
    }
  }
</i18n>
