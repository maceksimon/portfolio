<template>
  <!-- Feature section -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-blue-200">{{ t('highlight') }}
      </h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ t('title') }}</p>
      <p class="mt-6 text-lg leading-8 text-gray-300">{{ t('perex') }}</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:max-w-none sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:gap-x-12 lg:max-w-none lg:grid-cols-3">
        <div v-for="feature in primaryFeatures" :key="feature.name" class="flex flex-col group">
          <dt class="text-base font-semibold leading-7 text-white">
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-blue-300/90 border bg-blue-400/10 border-blue-400/25 group-hover:text-blue-300 group-hover:bg-blue-400/15 transition-colors duration-300">
              <Icon :name="feature.icon" class="h-10 w-10" aria-hidden="true" />
            </div>
            {{ feature.name }}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
            <p class="flex-auto">{{ feature.description }}</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

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
    "perex": "S internetovou doménou vzniká vaše online identita. Buďte nároční. Chtějte web, který vystihne váš charakter, bude bezchybně fungovat a zaujme na první pohled.",
    "service": {
      "control": {
        "title": "Web ve vlastních rukou",
        "description": "Stavím weby tak, abyste je měli plně pod kontrolou, mohli měnit texty i obrázky, jednoduše tvořit nové stránky i upravovat ty existující. Používám WordPress jako osvědčené open-source řešení, nastavené tak aby se používalo co nejsnáze i těm, kdo s ním ještě nemají zkušenost."
      },
      "design": {
        "title": "Digitální vizuál přesně pro vás",
        "description": "Web by měl odrážet vaši jedinečnou identitu. Proto řeším design individuálně a rád ho navrhnu přesně podle vašich potřeb. Vždy beru ohled na základní zásady UI a UX, aby byl web přehledný a dobře se používal. Baví mě oživovat design interaktivními prvky, efekty a animacemi."
      },
      "function": {
        "title": "Online vizitka, která funguje",
        "description": "Abyste byli vidět potřebujete stránky optimalizované pro internetové vyhledávače. Používám technologie, které pomáhají s indexací a splněním požadavků pro vyhledávače. To zlepšuje vaši pozici ve výsledcích vyhledávání. Díky datům o návštěvnosti můžete sledovat svůj růst a vývoj."
      }
    }
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
    }
  }
}
</i18n>
