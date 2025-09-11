<template>
  <!-- Feature section -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-blue-600">{{ t('highlight') }}
      </h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ t('title') }}</p>
      <p class="mt-6 text-lg leading-8 text-gray-700 text-balance">{{ t('perex') }}</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:max-w-none sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:gap-x-12 lg:max-w-none lg:grid-cols-3">
        <div v-for="feature in primaryFeatures" :key="feature.name" class="flex flex-col group">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-blue-600 border bg-blue-600/10 border-blue-300/50 group-hover:text-blue-700 group-hover:bg-blue-300/10 group-hover:border-blue-600/50 transition-colors duration-300">
              <Icon :name="feature.icon" class="h-10 w-10" aria-hidden="true" />
            </div>
            {{ feature.name }}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
            <p class="flex-auto">{{ feature.description }}</p>
          </dd>
        </div>
      </dl>
    </div>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <button
        class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
        @click="toggle()">
        {{ t("contact") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
const { toggle } = useDialogContact()

const primaryFeatures = [
  {
    name: t('service.control.title'),
    icon: 'arcticons:control-center',
    description: t('service.control.description'),
    href: '#',
  },
  {
    name: t('service.design.title'),
    icon: 'arcticons:color-palette',
    description: t('service.design.description'),
    href: '#',
  },
  {
    name: t('service.function.title'),
    icon: 'arcticons:aggregator',
    description: t('service.function.description'),
    href: '#',
  },
]
</script>

<i18n lang="json">{
  "cs": {
    "highlight": "Co z toho bude?",
    "title": "Web, kterého si každý všimne",
    "perex": "Na internetové doméně vzniká tvoje online identita. Chceš mít web, který ti bude sedět, zaujme na první pohled a bude perfektně fungovat. Jak na to? To už nech na mě.",
    "service": {
      "control": {
        "title": "Web, kterému rozumíš",
        "description": "Stavím weby tak, aby si je každý klient uměl sám upravit. Jednoduchým a intuitivním způsobem jde přidávat nové stránky a měnit ty stávající. I bez předchozí zkušenosti se v systému rychle zorientuješ. Zdarma dávám kompletní instruktáž a můžeš se mi kdykoliv ozvat s dotazy."
      },
      "design": {
        "title": "Design, co je tvůj",
        "description": "Web by měl mít styl, který tě charakterizuje. Nad každým designem přemýšlím individuálně, na základě konkrétních potřeb a představ. Všechno podle nejlepší praxe UI, UX a přístupnosti. Navíc mě baví animovat, takže moje weby umí být živé a vtipné."
      },
      "function": {
        "title": "Systém, který funguje",
        "description": "Dostat svůj projekt do online prostoru je delší proces. Od editace obsahu, přes technické nastavení, až po monitorování návštěvnosti, aktualizace a zálohy. Ty ale můžeš všechny technické kroky nechat na mě a užít si kreativní práci a funkční výsledek."
      }
    },
    "contact": "Chci web"
  },
  "en": {
    "highlight": "What will it be?",
    "title": "Web that catches every eye",
    "perex": "You can have a great-looking website that expresses your personality or the personality of your brand. Website that is both functional and captivating.",
    "service": {
      "control": {
        "title": "In your own hands",
        "description": "I build websites so that you can control them. They come with a great editing experience and a lot of flexibility. The site will accomodate any content you want to show, and you can make all the changes in a simple and easy-to-use visual editor."
      },
      "design": {
        "title": "Find your digital style",
        "description": "Your web is your online identity. This is why I handle my client's requests individually and design the products based on their needs. All this while building on a solid UI and UX knowledge, making the websites great to use. I love to make the designs come to life with interactive elements, effects and animations."
      },
      "function": {
        "title": "Online banner that impresses",
        "description": "To really draw attention, you will need to optimize for SEO. This comes included in the package. The website will be optimized for your keywords to help you get traction through google searches. You can track your progress with your favoured suite of analytics tools."
      }
    },
    "contact": "I want a website"
  }
}
</i18n>
