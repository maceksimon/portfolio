<template>
  <div class="not-prose my-6 sm:my-8">
    <div class="rounded-xl border border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-5 shadow-sm">
      <label class="block text-sm sm:text-base font-medium text-gray-700 mb-2">
        Zadejte název obce nebo města
      </label>

      <Combobox v-model="selectedPlace" @update:model-value="onSelect">
        <div class="relative">
          <ComboboxInput
            class="w-full rounded-lg border border-gray-300 bg-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Např. Broumov, Náchod..."
            :display-value="(place) => place?.name || ''"
            @change="query = $event.target.value"
          />

          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
            </svg>
          </ComboboxButton>

          <TransitionRoot
            leave="transition ease-in duration-100"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <ComboboxOptions
              class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div
                v-if="filteredPlaces.length === 0 && query !== ''"
                class="px-3 sm:px-4 py-3 text-sm text-gray-500"
              >
                Žádné výsledky pro "{{ query }}"
              </div>

              <ComboboxOption
                v-for="place in filteredPlaces"
                :key="place.name"
                :value="place"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    'relative cursor-pointer select-none py-2 px-3 sm:px-4 text-sm sm:text-base',
                    active ? 'bg-blue-600 text-white' : 'text-gray-900'
                  ]"
                >
                  <span :class="['block truncate', selected ? 'font-semibold' : 'font-normal']">
                    {{ place.name }}
                  </span>
                </li>
              </ComboboxOption>
            </ComboboxOptions>
          </TransitionRoot>
        </div>
      </Combobox>

      <!-- Result display -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div v-if="result" class="mt-4">
          <!-- Success -->
          <div v-if="result.found" class="rounded-lg bg-green-50 border border-green-200 p-3 sm:p-4">
            <div class="flex items-start gap-2.5 sm:gap-3">
              <div class="flex-shrink-0 mt-0.5">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm sm:text-base font-medium text-green-800 leading-snug">
                  {{ result.place }} je v seznamu ohrožených oblastí
                </p>
                <p class="mt-1 text-sm sm:text-base text-green-700">
                  Máte nárok na <strong>5 bonusových bodů</strong> v hodnocení žádosti.
                </p>
              </div>
            </div>
          </div>

          <!-- Not found -->
          <div v-else class="rounded-lg bg-gray-50 border border-gray-200 p-3 sm:p-4">
            <div class="flex items-start gap-2.5 sm:gap-3">
              <div class="flex-shrink-0 mt-0.5">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm sm:text-base font-medium text-gray-700 leading-snug">
                  {{ result.place }} není v seznamu ohrožených oblastí
                </p>
                <p class="mt-1 text-sm sm:text-base text-gray-600">
                  Toto kritérium vám nepřinese bonusové body, ale stále můžete o grant žádat.
                </p>
              </div>
            </div>
          </div>

          <!-- Reset button -->
          <button
            @click="reset"
            class="mt-4 sm:mt-5 text-sm text-blue-600 hover:text-blue-800 underline underline-offset-2 hover:no-underline"
          >
            Zkontrolovat jiné místo
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import Fuse from 'fuse.js'

interface Place {
  name: string
}

// Dummy data - Czech places in "ohrožené oblasti"
// Replace with actual list later
const places: Place[] = [
  { name: 'Broumov' },
  { name: 'Meziměstí' },
  { name: 'Teplice nad Metují' },
  { name: 'Adršpach' },
  { name: 'Náchod' },
  { name: 'Nové Město nad Metují' },
  { name: 'Červený Kostelec' },
  { name: 'Hronov' },
  { name: 'Police nad Metují' },
  { name: 'Jaroměř' },
  { name: 'Trutnov' },
  { name: 'Úpice' },
  { name: 'Svoboda nad Úpou' },
  { name: 'Žacléř' },
  { name: 'Hostinné' },
  { name: 'Dvůr Králové nad Labem' },
  { name: 'Rychnov nad Kněžnou' },
  { name: 'Dobruška' },
  { name: 'Opočno' },
  { name: 'Kostelec nad Orlicí' },
]

const fuse = new Fuse(places, {
  keys: ['name'],
  threshold: 0.4,
  includeScore: true,
})

const query = ref('')
const selectedPlace = ref<Place | null>(null)
const result = ref<{ found: boolean; place: string } | null>(null)

const filteredPlaces = computed(() => {
  if (query.value === '') {
    return places.slice(0, 10) // Show first 10 when no query
  }

  return fuse.search(query.value).map(r => r.item).slice(0, 10)
})

function onSelect(place: Place | null) {
  if (place) {
    result.value = {
      found: true,
      place: place.name,
    }
  }
}

function reset() {
  selectedPlace.value = null
  result.value = null
  query.value = ''
}
</script>
