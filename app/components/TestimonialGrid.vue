<template>
  <div class="relative isolate mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
    <div
      class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div
      class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      aria-hidden="true"
    >
      <div
        class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div>
      <div class="mx-auto text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-blue-600">
          {{ t('highlight') }}
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ t('title') }}
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
      >
        <figure
          class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
        >
          <blockquote class="p-6 font-medium tracking-tight text-gray-900 sm:p-12 sm:text-lg">
            <p>{{ featuredTestimonial.body }}</p>
          </blockquote>
          <figcaption
            class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap"
          >
            <img
              class="size-10 flex-none rounded-full bg-gray-50"
              :src="featuredTestimonial.author.imageUrl"
              alt=""
            />
            <div class="flex-auto">
              <div class="font-semibold text-gray-900">{{ featuredTestimonial.author.name }}</div>
              <div class="text-gray-600">{{ featuredTestimonial.author.project }}</div>
            </div>
            <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
          </figcaption>
        </figure>
        <div
          v-for="(columnGroup, columnGroupIdx) in testimonials"
          :key="columnGroupIdx"
          class="space-y-8 xl:contents xl:space-y-0"
        >
          <div
            v-for="(column, columnIdx) in columnGroup"
            :key="columnIdx"
            :class="[
              (columnGroupIdx === 0 && columnIdx === 0) ||
              (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                ? 'xl:row-span-2'
                : 'xl:row-start-1',
              'space-y-8',
            ]"
          >
            <figure
              v-for="testimonial in column"
              :key="testimonial.author.handle"
              class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote class="text-gray-900">
                <p>{{ testimonial.body }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img
                  class="size-10 rounded-full bg-gray-50"
                  :src="testimonial.author.imageUrl"
                  alt=""
                />
                <div>
                  <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                  <div class="text-gray-600">{{ testimonial.author.project }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const featuredTestimonial = {
  id: 'upupaepop',
  body: 'Zařídit si vkusnej a funkční web je pro mě jako zařizovat si svůj pokojíček. Je pro mě zásadní ho mít úplně podle svých představ. Dneska jsou na všechno šablony, ale těžko se mi do nich vkládají vlastní nápady. Šimon moje představy hned chápal a nacházel pro ně funkční technický řešení. Administraci webu mi nastavil na míru a je super easy, a když náhodou něco potřebuju, osobní support tu je kdykoli k dispozici a nemusím se nervovat s robotama.  Vytvoření dvou webů se Šimonem byl splněnej sen. Díky a doporučuju.',
  author: {
    name: 'Bára Ungerová',
    project: 'DVA a mœtïvï',
    imageUrl: '/image/testimonial/bara_ungerova.webp',
  },
}

const { locale, t } = useI18n({
  useScope: 'local',
})

const testimonials = [
  [
    [
      {
        "id": "kska",
        "body": "Spolupráce se Šimonem byla od samého začátku bezproblémová a příjemná. Oceňujeme jeho profesionalitu, vstřícnost a ochotu vždy nám vyjít vstříc. Dokázal nám naslouchat a naše požadavky kreativně a inovativně zpracovat.",
        "author": {
          "name": "Milan Durňak",
          "project": "KSKA",
          "imageUrl": "/image/testimonial/milan.webp"
        }
      },
      {
        "id": "dominika",
        "body": "Se Šimonem jsme prošli celým procesem tvorby online portfolia. Moc oceňuji jeho pomoc při designu stránek i při tvorbě a editaci obsahu.",
        "author": {
          "name": "Dominika Špalková",
          "project": "",
          "imageUrl": "/image/testimonial/dominika.webp"
        }
      }
    ],
    [
      {
        "id": "kontrapunkt",
        "body": "Jednoduchý a čistý design, snadná a přímočará struktura a hlavně skvělá a flexibilní komunikace! Děkujeme.",
        "author": {
          "name": "Barbora Hodonická",
          "project": "Kontrapunkt",
          "imageUrl": "/image/testimonial/bara.webp"
        }
      }
    ]
  ],
  [
    [
      {
        "id": "animato",
        "body": "Šimon je zkušený, spolehlivý a precizní v detailech. S takovým člověkem prostě chcete spolupracovat.",
        "author": {
          "name": "Štěpán Rambousek",
          "project": "Animato",
          "imageUrl": "/image/testimonial/stepan.webp"
        }
      }
    ],
    [
      {
        "id": "ekoloko",
        "body": "Šimona jsme poprosili o tvorbu webových stránek, které by prezentovaly aktivity naší neziskové organizace. Spolupráce byla velmi příjemná, komunikace rychlá. Šimon nám ve všem vyšel vstříc a dotvořil web podle našich představ. Děkujeme!",
        "author": {
          "name": "Vanda Paulíčková",
          "project": "Ekoloko",
          "imageUrl": "/image/testimonial/vanda.webp"
        }
      }
    ]
  ]
]
</script>

<i18n lang="json">
{
  "cs": {
    "highlight": "Od těch, kdo do toho se mnou šli",
    "title": "Reference od mého klientstva"
  },
  "en": {
    "highlight": "What do others say?",
    "title": "Testimonials and ratings from my clients"
  }
}
</i18n>
