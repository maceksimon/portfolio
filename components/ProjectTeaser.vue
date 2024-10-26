<template>
  <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Section: heading -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-blue-200">
        {{ t('highlight') }}
      </h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {{ t('title') }}
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-300 text-balance">
        {{ t('perex') }}
      </p>
    </div>

    <div class="flex justify-center mt-16 sm:mt-20 lg:mt-24">
      <RadioGroup v-model="selectedProject" class="sm:col-span-2">
        <RadioGroupLabel class="sr-only">{{ t('projectList') }}</RadioGroupLabel>
        <div class="flex flex-wrap justify-center gap-2 p-1 bg-gray-950 border border-gray-700 rounded-xl">
          <RadioGroupOption
            as="template"
            v-for="project in projects"
            :key="project.id"
            :value="project.id"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                'relative shrink-0 flex cursor-pointer rounded-lg px-3 py-2 focus:outline-none border border-transparent',
                active ? 'bg-gray-800 border-gray-700 text-white' : '',
                checked ? 'bg-gray-800 border-gray-700 text-white' : '',
              ]"
            >
              <span class="flex flex-1 sm:justify-center">
                <span class="flex flex-col">
                  <RadioGroupLabel
                    as="span"
                    class="block text-sm font-medium"
                    :class="[checked ? 'text-white' : 'text-gray-200']"
                  >
                    {{ project.title }}
                  </RadioGroupLabel>
                </span>
              </span>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-6 mt-8 sm:mt-12 lg:mt-16">
      <div class="relative sm:col-span-4">
        <!-- Mockup mobile -->
        <div
          class="sm:absolute right-[20%] bottom-0 mx-auto pointer-events-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[12rem] max-w-full drop-shadow-xl">
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect width="316" height="684" rx="36"></rect>
              </clipPath>
            </defs>
            <path
              fill="#4B5563"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
            ></path>
            <path
              fill="#343E4E"
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
            ></path>
            <foreignObject
              width="316"
              height="684"
              transform="translate(24 24)"
              clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
              <img :src="imageMobile" alt="" />
            </foreignObject>
          </svg>
        </div>
        <!-- Mockup desktop -->
        <div class="hidden sm:block">
          <svg
            width="600"
            height="482"
            viewBox="0 0 1442 1281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect x="553" y="1223" width="44" height="7" rx="1" fill="url(#paint0_linear_7_520)" />
            <rect x="843" y="1223" width="44" height="7" rx="1" fill="url(#paint1_linear_7_520)" />
            <rect
              width="346"
              height="223"
              transform="matrix(-1 0 0 1 893 993)"
              fill="url(#paint2_linear_7_520)"
            />
            <rect
              width="1440"
              height="997"
              rx="24"
              transform="matrix(-1 0 0 1 1442 1)"
              fill="#505254"
            />
            <rect
              width="1440"
              height="999"
              rx="24"
              transform="matrix(-1 0 0 1 1440 0)"
              fill="url(#paint3_linear_7_520)"
            />
            <path
              d="M1440 851H0V975C0 988.255 10.7451 999 24 999H1416C1429.25 999 1440 988.255 1440 975V851Z"
              fill="url(#paint4_linear_7_520)"
            />
            <circle cx="8" cy="8" r="8" transform="matrix(-1 0 0 1 752 9)" fill="#343747" />
            <g filter="url(#filter3_i_7_520)">
              <circle
                cx="4"
                cy="4"
                r="4"
                transform="matrix(-1 0 0 1 748 13)"
                fill="url(#paint5_radial_7_520)"
              />
            </g>
            <rect
              width="346"
              height="15"
              transform="matrix(-1 0 0 1 893 1212)"
              fill="url(#paint6_linear_7_520)"
            />
            <rect width="1372" height="783" transform="matrix(-1 0 0 1 1406 34)" fill="#C4C4C4" />
            <rect
              width="1372"
              height="783"
              transform="matrix(-1 0 0 1 1406 34)"
              id="2ade4387-9c63-4fc4-b754-10e687a0d333"
            />
            <foreignObject
              width="1372"
              height="783"
              transform="translate(34 34)"
              clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d333)"
            >
              <img :src="imageDesktop" alt="" />
            </foreignObject>
            <path
              d="M84 851L918 0H1416C1429.25 0 1440 10.7452 1440 24V851H84Z"
              fill="url(#paint7_linear_7_520)"
            />
            <defs>
              <filter
                id="filter0_f_7_520"
                x="42"
                y="1188"
                width="1356.49"
                height="62.4758"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_7_520" />
              </filter>
              <filter
                id="filter1_f_7_520"
                x="231"
                y="1197"
                width="977.311"
                height="62.4758"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_7_520" />
              </filter>
              <filter
                id="filter2_f_7_520"
                x="523"
                y="1219"
                width="395"
                height="62"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_7_520" />
              </filter>
              <filter
                id="filter3_i_7_520"
                x="740"
                y="12"
                width="8"
                height="9"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-1" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0392157 0 0 0 0 0.0431373 0 0 0 0 0.0509804 0 0 0 1 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_520" />
              </filter>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                  xlink:href="#image0_7_520"
                  transform="matrix(0.0004 0 0 0.000700894 0 -0.0845456)"
                />
              </pattern>
              <linearGradient
                id="paint0_linear_7_520"
                x1="575"
                y1="1223"
                x2="575"
                y2="1230"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#19191A" />
                <stop offset="1" stop-color="#636569" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_7_520"
                x1="865"
                y1="1223"
                x2="865"
                y2="1230"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#19191A" />
                <stop offset="1" stop-color="#636569" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_7_520"
                x1="173"
                y1="0"
                x2="173"
                y2="223"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#303236" />
                <stop offset="0.873392" stop-color="#8C8F93" />
                <stop offset="0.924622" stop-color="#BABABA" />
                <stop offset="0.957999" stop-color="#999B9E" />
                <stop offset="0.992152" stop-color="#4D4D4D" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_7_520"
                x1="1399.5"
                y1="-0.000109302"
                x2="483"
                y2="862.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#28282A" />
                <stop offset="1" stop-color="#18191B" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_7_520"
                x1="720"
                y1="851"
                x2="720"
                y2="999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#535457" />
                <stop offset="1" stop-color="#43464C" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_7_520"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(4 4) rotate(90) scale(4)"
              >
                <stop stop-color="#55A0FF" />
                <stop offset="0.513343" stop-color="#214D89" />
                <stop offset="1" stop-color="#10182A" />
              </radialGradient>
              <linearGradient
                id="paint6_linear_7_520"
                x1="346"
                y1="15.0001"
                x2="-1.64163e-05"
                y2="16.0001"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#727476" />
                <stop offset="0.0196622" stop-color="#B6B6B9" />
                <stop offset="0.0393102" stop-color="#66696D" />
                <stop offset="0.0913451" stop-color="#898A8F" />
                <stop offset="0.948172" stop-color="#898A8F" />
                <stop offset="0.977921" stop-color="#66696D" />
                <stop offset="0.991869" stop-color="#B6B6B9" />
                <stop offset="1" stop-color="#727476" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_7_520"
                x1="853.213"
                y1="34"
                x2="853.213"
                y2="820"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.16" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const { t } = useI18n({
  useScope: 'local',
})

const projects = [
  {
    id: 1,
    title: 'MKS Jaroměř',
    description: 'Informační web kulturního střediska',
    imageMobile: '/image/portfolio/jaromer-homepage-mobile.png',
    imageDesktop: '/image/portfolio/jaromer-homepage-desktop.png',
    urlPortfolio: '/portfolio/mks-jaromer',
    urlWeb: 'https://divadlojaromer.cz',
  },
  {
    id: 2,
    title: 'Ekoloko',
    description: 'Stránky kulturní neziskové organizace',
    imageMobile: '/image/portfolio/ekoloko-homepage-mobile.png',
    imageDesktop: '/image/portfolio/ekoloko-homepage-desktop.png',
    urlPortfolio: '/portfolio/ekoloko',
    urlWeb: 'https://eko-loko.cz',
  },
  {
    id: 3,
    title: 'KSKA',
    description: 'Web Katedry sociální a kulturní antropologie UPCE',
    imageMobile: '/image/portfolio/kska-homepage-mobile.png',
    imageDesktop: '/image/portfolio/kska-homepage-desktop.png',
    urlPortfolio: '/portfolio/kska',
    urlWeb: 'https://kska.upce.cz',
  },
  {
    id: 4,
    title: 'DVA',
    description: 'Stránky kapely DVA',
    imageMobile: '/image/portfolio/dva-homepage-mobile.png',
    imageDesktop: '/image/portfolio/dva-homepage-desktop.png',
    urlPortfolio: '',
    urlWeb: 'https://2dva.cz',
  },
  {
    id: 5,
    title: 'Brno čte Bruna',
    description: 'Web brněnského literárního festivalu',
    imageMobile: '/image/portfolio/brno-cte-bruna-homepage-mobile.png',
    imageDesktop: '/image/portfolio/brno-cte-bruna-homepage-desktop.png',
    urlPortfolio: '/portfolio/brno-cte-bruna',
    urlWeb: 'https://brnoctebruna.cz',
  },
  {
    id: 6,
    title: 'Fellow Creatures',
    description: 'E-shop s veganskou čokoládou',
    imageMobile: '/image/portfolio/fellow-creatures-homepage-mobile.png',
    imageDesktop: '/image/portfolio/fellow-creatures-homepage-desktop.png',
    urlPortfolio: '/portfolio/fellow-creatures',
    urlWeb: 'https://fellowcreatures.co.uk',
  },
]

const selectedProject = ref(projects[0].id)

const imageDesktop = computed(() => {
  return projects.find(project => project.id === selectedProject.value)?.imageDesktop
})
const imageMobile = computed(() => {
  return projects.find(project => project.id === selectedProject.value)?.imageMobile
})
</script>

<i18n lang="json">
{
  "en": {
    "projectList": "Project list",
    "highlight": "What is already online",
    "title": "Browse the completed projects",
    "perex": "Each website has their own characteristics and requirements. With this approach I have created a whole range of different realizations from presentation websites to e-commerce."
  },
  "cs": {
    "projectList": "Seznam projektů",
    "highlight": "Co už je online",
    "title": "Prohlédněte si dokončené projekty",
    "perex": "Každý projekt má svoje charakteristiky a potřeby. Na základě toho už vznikla spousta různých realizací od prezentačních webů po eshopy."
  }
}
</i18n>
