<template>
  <div class="absolute top-0 inset-x-0 z-10">
    <div class="container mx-auto">
      <div class="max-w-2xl sm:max-w-none px-4 sm:px-6 lg:px-8">
        <Popover>
          <nav aria-label="Global" class="flex items-center justify-between py-2 sm:py-4 md:justify-center">
            <!-- Mobile navigation -->
            <NuxtLink to="/" class="font-semibold text-white md:hidden">
              Šimon Macek
            </NuxtLink>
            <div class="flex items-center md:hidden">
              <button @click="toggle()"
                class="dark:hover-gray-600 mr-2 inline-flex items-center justify-center rounded-md bg-gray-50 px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-auto text-gray-500 dark:text-gray-300"
                  viewBox="0 0 24 24">
                  <path fill="#888888"
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" />
                </svg>
                <span class="ml-2 text-sm font-semibold">
                  {{ t("contact") }}
                </span>
              </button>
              <div class="-mr-2 flex items-center">
                <PopoverButton
                  class="dark:hover-gray-600 inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300">
                  <span class="sr-only">{{ t("openMenu") }}</span>
                  <Icon name="heroicons-outline:menu-alt-3" />
                </PopoverButton>
              </div>
            </div>
            <!-- Desktop navigation -->
            <div class="hidden w-full items-center md:flex md:justify-between">
              <!-- Menu -->
              <div class="flex flex-wrap gap-4 lg:text-lg font-medium text-gray-100 md:gap-6 lg:gap-8">
                <NuxtLink v-for="link in navigation" :to="localePath(link._path)">
                  {{ link.title }}
                </NuxtLink>
              </div>
              <!-- Social icons & Color Mode -->
              <div id="navbar-icons" class="flex items-center space-x-3 text-gray-100 transition md:space-x-4">
                <button @click="toggle()"
                  class="dark:hover-gray-600 mr-2 inline-flex items-center justify-center h-full w-full bg-white/10 hover:bg-white/25 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-300 px-3 py-2 text-grey-200 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
                  <Icon name="mi:email" size="20px" />
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
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              v-slot="{ close }">
              <div
                class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-700 dark:text-gray-300">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div class="text-xl font-bold">{{ t("menu") }}</div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="dark:hover-text-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300">
                      <span class="sr-only">{{ t("closeMenu") }}</span>
                      <Icon name="heroicons-outline:x" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <NuxtLink v-for="link in navigation" :to="localePath(link._path)">
                    {{ link.title }}
                  </NuxtLink>
                  <!-- <MenuLink
                    v-for="link in navigation"
                    :key="link._path"
                    :link="link"
                    active-class="font-bold"
                    class="menu-link dark:hover-bg-gray-500 dark:hover-text-white block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200"
                    @click="close()"
                  /> -->
                  <div class="space-x-3 px-3 py-2 text-gray-500 transition">
                    <SocialIcons />
                    <LanguageSwitch />
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

const navigation = [
  {
    title: 'Home',
    _path: '/',
  },
  {
    title: 'Projects',
    _path: '/projects',
  },
  {
    title: 'Blog',
    _path: '/blog',
  },
  {
    title: 'About',
    _path: '/about',
  },
]
</script>

<i18n lang="json">
  {
    "cs": {
      "closeMenu": "Zavřít hlavní menu",
      "contact": "Napište mi",
      "menu": "Menu",
      "openMenu": "Otevřít hlavní menu"
    },
    "en": {
      "closeMenu": "Close main menu",
      "contact": "Contact me",
      "menu": "Menu",
      "openMenu": "Open main menu"
    }
  }
</i18n>
