<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-blue-600">{{ t('highlight') }}</h2>
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">{{ t('title') }}</p>
        <p class="mt-6 text-lg/8 text-gray-600">{{ t('description') }}</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
              <span class="size-6 flex-none text-red-600" aria-hidden="true" v-html="feature.icon"></span>
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <!-- <p class="mt-6">
                <a :href="feature.href" class="text-sm/6 font-semibold text-blue-600 hover:text-blue-500">Learn more <span aria-hidden="true">→</span></a>
              </p> -->
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
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local',
})

const features = [
  {
    name: 'Jsi na začátku',
    description:
      'Ještě web nemáš a moc nevíš, kde začít. Víš co se ti líbí, ale času je málo a nejlepší by bylo, kdyby to za tebe dal někdo dohromady.',
    href: '#',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-full max-w-full" viewBox="0 0 32 32"><path fill="currentColor" d="M14.465 2.811q.742-.06 1.535-.061q.793 0 1.535.061a.75.75 0 0 0 .123-1.495A20 20 0 0 0 16 1.25q-.851 0-1.658.066a.75.75 0 0 0 .123 1.495m7.544-.561a.75.75 0 0 0-.52 1.407c.982.364 1.867.829 2.657 1.379a.75.75 0 0 0 .857-1.23A13.3 13.3 0 0 0 22.01 2.25M10.512 3.657a.75.75 0 1 0-.52-1.406c-1.1.406-2.098.93-2.995 1.554a.75.75 0 0 0 .857 1.231a11.8 11.8 0 0 1 2.658-1.379M5.06 7.852a.75.75 0 1 0-1.236-.85a13.8 13.8 0 0 0-1.546 2.993a.75.75 0 1 0 1.405.525A12.3 12.3 0 0 1 5.06 7.852m23.116-.85a.75.75 0 1 0-1.236.85c.56.815 1.02 1.709 1.377 2.668a.75.75 0 0 0 1.405-.525a13.8 13.8 0 0 0-1.546-2.993M2.815 14.469a.75.75 0 1 0-1.494-.13a19 19 0 0 0 0 3.322a.75.75 0 1 0 1.494-.13a17.7 17.7 0 0 1 0-3.062m27.864-.129a.75.75 0 1 0-1.494.129a17.7 17.7 0 0 1 0 3.062a.75.75 0 0 0 1.494.13a19 19 0 0 0 0-3.322m-.957 7.666a.75.75 0 1 0-1.405-.525c-.358.96-.817 1.854-1.377 2.668a.75.75 0 0 0 1.236.85a13.8 13.8 0 0 0 1.546-2.994M3.683 21.48a.75.75 0 1 0-1.405.524a13.8 13.8 0 0 0 1.546 2.994a.75.75 0 0 0 1.236-.85a12.3 12.3 0 0 1-1.377-2.668m4.171 5.484a.75.75 0 0 0-.857 1.23A13.3 13.3 0 0 0 9.99 29.75a.75.75 0 1 0 .52-1.406a11.8 11.8 0 0 1-2.657-1.379m17.15 1.23a.75.75 0 1 0-.857-1.231a11.8 11.8 0 0 1-2.658 1.379a.75.75 0 1 0 .52 1.406a13.3 13.3 0 0 0 2.995-1.554m-10.538.994a.75.75 0 0 0-.123 1.495q.806.066 1.658.066t1.658-.066a.75.75 0 0 0-.123-1.495q-.742.06-1.535.061q-.793 0-1.535-.061m-.135-17.708a3.21 3.21 0 1 1-6.42 0a3.21 3.21 0 0 1 6.42 0m3.337 0a3.21 3.21 0 1 0 6.42 0a3.21 3.21 0 0 0-6.42 0m-6.924 8.021a.75.75 0 0 1 .75-.75h9.012a.75.75 0 0 1 0 1.5h-9.012a.75.75 0 0 1-.75-.75"/></svg>',
  },
  {
    name: 'Jsi na Wixu',
    description:
      'Máš stránky na Wixu, ale nevypadají nebo nefungují úplně tak jak chceš. Taky za ně musíš platit dost peněz a stojí dost práce je udržovat.',
    href: '#',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-full max-w-full" viewBox="0 0 512 512"><path fill="currentColor" d="M507.522 65.853c5.526-9.86 7.72-17.573-4.068-16.272h-74.24c-20.53-1.15-49.286 26.22-77.29 58.985c-11.51-31.249-26.467-57.09-57.968-56.951H208.84s-26.848-.405-48.217 56.03c-7.647-16.704-52.62-52.708-67.475-58.056C78.292 44.24 16.975 45.62 6.15 48.564c-10.825 2.942-4.068 12.204-4.068 12.204c19.053 21.696 77.883 164.908 150.38 199.372l-99.53 185.045c-7.272 9.95-5.462 16.918 5.593 20.848l88.986-1.525c20.259-2.739 34.608-12.946 44.747-28.476l64.466-97.164l73.844 106.826c10.762 11.672 30.48 16.656 39.153 16.78h80.85c11.961-.67 14.82-2.606 12.204-13.22L360.845 260.18C440.91 218.4 478.504 102.013 507.522 65.853M294.758 98.315l28.763-.277c-7.049 9.271-16.897 13.633-29.593 12.999zm13.305 21.085c11.607 2.177 14.879 7.432 12.22 30.842s-29.56 15.072-30.82 1.856c-1.258-13.215 6.992-34.876 18.6-32.698m-30.819 45.197c-.92 9.755-1.746 20.173-21.531 21.92c-22.242 1.962-23.472-20.174-23.472-20.174c20.368 14.16 32.214 11.364 45.003-1.746m-61.57-66.282l.83 12.722c-12.697.634-22.544-3.728-29.593-12.999zm5.294 53.783c-1.259 13.216-28.161 21.554-30.82-1.856s.613-28.665 12.22-30.842c11.608-2.178 19.859 19.483 18.6 32.698m112.907 103.759s94.59 164.705 99.408 179.16c-30.51 11.525-78.774 9.214-97.08-9.092c-18.305-18.305-75.807-124.133-75.807-124.133l-84.114 124.133c-9.62 14.734-18.818 15.283-35.92 17.689l-66.416-.03l59.048-106.99c65.765-93.562 123.377-116.585 191.591-140.341c48.039-16.73 85.923-30.016 130.535-71.979c-19.322 38.137-73.772 106.81-121.245 131.583"/></svg>',
  },
  {
    name: 'Značka antikvariát',
    description:
      'Web je, ale dávno se na něj nikdo nepodíval. Původní vývojář už nemá čas, ty potřebuješ opravit zastaralé údaje a texty ale nikdo neví jak do toho.',
    href: '#',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-full max-w-full" viewBox="0 0 12 12"><path fill="currentColor" d="M1 12h9V9H9v2H7v-1H6V8H5v2H4v1H2V9H1Zm1-3h1V8H2Zm1-1h1V7H3ZM2 5h1V4H2Zm1 1h1V5H3Zm1 1h1V6H4Zm2 0h1V6H6Zm1 1h1V7H7Zm1 1h1V8H8ZM5 6h1V5h1V4h1V3H3v1h1v1h1Zm2 0h1V5H7ZM1 4h1V2h7v2h1V1H1Zm7 1h1V4H8Zm0 0"/></svg>',
  },
]
</script>

<i18n lang="json">
{
  "en": {
    "highlight": "Deploy faster",
    "title": "Everything you need to deploy your app",
    "description": "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
    "learnMore": "Learn more",
    "contact": "Message me"
  },
  "cs": {
    "highlight": "Jsi tu správně?",
    "title": "Komu umím pomoct",
    "description": "Třeba jsi v téhle situaci, anebo v hodně podobné. Jesti jo, dej vědět - tyhle problémy znám a umím je vyřešit rychleji a levněji než si myslíš.",
    "learnMore": "Zjistit více",
    "contact": "Poslat zprávu"
  }
}
</i18n>
