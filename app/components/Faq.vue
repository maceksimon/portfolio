<template>
  <div class="isolate relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-2 text-lg font-semibold leading-8 tracking-tight text-blue-600">
        {{ t("highlight") }}
      </div>
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ t('title') }}</h2>
      <div class="mt-20">
        <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-base font-semibold leading-7 text-gray-900">{{ faq.question }}</dt>
            <dd class="mt-2 text-base leading-7 text-gray-700">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
      <p class="mt-8 max-w-2xl text-base leading-7 text-gray-700 text-balance lg:pt-10">{{ t('perex') }} <a href="#"
          class="font-medium text-blue-600 hover:text-blue-800 underline underline-offset-2 hover:no-underline transition-colors"
          @click.prevent="toggle()">
          {{ t('linkContact') }}
        </a> {{ t('perex2') }}</p>
    </div>
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
  </div>
</template>

<script setup>
const { toggle } = useDialogContact()
const { locale, t } = useI18n({
  useScope: 'local'
})

const faqs = [
  {
    "question": "Kolik stojí web?",
    "answer": "To je individuální. Cena se mění s rozsahem a složitostí projektu. Jestli chceš vědět kolik by stál tvůj vysněný web, napiš mi. Probereme pár detailů a já ti nachystám přibližnou kalkulaci, zdarma a nezávazně."
  },
  {
    "question": "Jak probíhá platba?",
    "answer": "Ideálně se domlouvám na platbě ve dvou částech: první polovina při zadání, druhá po dokončení práce. Když ale bude potřeba, můžeme se domluvit i jinak."
  },
  {
    "question": "Bavíme se nezávazně?",
    "answer": "Ano. Až napíšeš, co nejdřív se ti ozvu a domluvíme si schůzku, kde probereme tvůj projekt. Pak ti připravím nabídku, podle které se rozhodneš, jestli chceš web ode mě."
  },
  {
    "question": "Co budu potřebovat?",
    "answer": "Určitě pár informací o projektu. Jestli máš vlastní texty, grafický design nebo logo, bude fajn, když mi je pošleš co nejdřív. Před samotnou realizací se domluvíme na obsahu webu, rád s tím pomůžu, pokud ještě nemáš přesnou představu. Fotografie můžeš dodat vlastní, nebo ti zařídím spolupráci s profesionální fotografkou."
  },
  {
    "question": "Dostanu grafický návrh webu?",
    "answer": "Ano. Jestli nemáš vlastní grafiku, připravím návrh jako součást zakázky. Podle předchozí domluvy navrhnu design, který si budeš moct projít a upravit, aby odpovídal tvojí představě. Pak se dohodneme na finálním návrhu, podle kterého udělám web."
  },
  {
    "question": "Kdo napíše a zadá obsah?",
    "answer": "Na tom se dohodneme. Někdo si rád tvoří a spravuje obsah sám - to pak projdeme možnosti editace webu a je to. Pokud texty nejsou tvůj oblíbený žánr, dá se tenhle úkol delegovat. Rád to zajistím jako součást zakázky."
  },
  {
    "question": "Bude můj web na první stránce Googlu?",
    "answer": "Jo, ale ne hned. Tohle je záležitost optimalizace pro vyhledávače (SEO), a to je dlouhodobý a postupný proces. Záleží na kvalitě obsahu, důvěryhodnosti webu a na tom, jak je propojený s jinými stránkami. Weby, které stavím, mají pro dobré umístění všechny potřebné předpoklady: rychlost, technickou čistotu i dobře strukturovaný kód."
  },
  {
    "question": "Můžu si nechat upravit už existující web?",
    "answer": "Záleží na domluvě. Nejdřív budu potřebovat víc informací o tvém webu a o tom, co přesně chceš upravit. Ozvi se a můžeme to probrat."
  }
]
</script>


<i18n lang="json">{
  "cs": {
    "title": "Odpovědi na nejčastější otázky",
    "highlight": "Co by tě mohlo zajímat",
    "linkContact": "kontaktní formulář",
    "perex": "Pokud se chceš zeptat na cokoliv dalšího, napiš mi přes ",
    "perex2": " a já se ti ozvu."
  },
  "en": {
    "title": "Frequently asked questions",
    "highlight": "What you might want to know",
    "linkContact": "the contact form",
    "perex": "If there is something else you would like to know, message me via ",
    "perex2": " and I will get back to you."
  }
}</i18n>
