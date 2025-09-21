<template>
  <div class="isolate overflow-hidden pt-14">
    <!-- Animation: Lightbulb -->
    <NuxtImg src="/image/star.png" alt="" class="absolute w-24 xl:w-64 left-[calc(10%-9px)] top-[calc(12%-22px)] object-contain -z-10 animate-spin-custom xl:top-[calc(20%-72px)] xl:left-[calc(10%-46px)]" />
    <!-- Lightbulb -->
    <NuxtImg src="/image/lightbulb.webp" alt="" class="absolute w-20 xl:w-40 left-[10%] top-[12%] xl:top-[20%] object-contain -z-10" />

    <!-- Animation: Hands clap -->
    <!-- Hand 1 (back hand) -->
    <NuxtImg id="hand1" src="/image/hand-clap-2.png" alt="" class="hidden xl:inline-block absolute w-40 right-[calc(10%-50px)] top-[calc(50%-50px)] object-contain hand-animation" />
    <!-- Clap -->
    <NuxtImg id="clap" src="/image/clap.png" alt="" class="hidden xl:inline-block absolute w-48 right-[calc(10%-50px)] top-[calc(50%-70px)] object-contain hand-animation" />
    <!-- Hand 2 (front hand) -->
    <NuxtImg id="hand2" src="/image/hand-clap-1.png" alt="" class="hidden xl:inline-block absolute w-40 right-[calc(10%)] top-[calc(50%-60px)] object-contain hand-animation" />

    <!-- Content -->
    <div class="mx-auto max-w-3xl px-4 pt-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-snug text-balance text-gray-900 sm:text-6xl">
          <span v-html="t('highlight')"></span><br />
          <span v-html="t('title')"></span>
        </h1>
        <p class="max-w-xl mx-auto mt-6 text-balance text-lg leading-8 text-gray-700 xl:mt-12 xl:text-xl/relaxed">
          {{ t('description') }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:mt-16 xl:mt-20">
          <a href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 lg:px-5 lg:py-3 lg:text-base"  @click.prevent="toggle()">
            {{ t('buttonContact') }}
          </a>
          <a href="/#projects" class="text-sm font-semibold leading-6 text-gray-900 lg:text-base">
            {{ t('buttonLearn') }}
          </a>
        </div>
      </div>
    </div>

    <div aria-hidden="true" class="absolute inset-x-0 -top-8 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const { t } = useI18n({
  useScope: 'local'
})

const { toggle } = useDialogContact()

// GSAP Timeline Animation for hand clapping
onMounted(() => {
  // Animation settings - easily tweakable
  const animationConfig = {
    // Initial positions (how far apart they start)
    startOffsetX: 60, // pixels apart horizontally
    startOffsetY: 20, // pixels apart vertically

    // Movement speeds (duration in seconds)
    togetherDuration: 0.5, // how long to move together
    apartDuration: 0.4, // how long to move apart

    // Rotation amounts (in degrees)
    maxRotation: 15, // maximum rotation angle

    // Easing
    togetherEase: "power2.in", // accelerating towards each other
    apartEase: "power2.out" // decelerating away from each other
  }

  // Set initial positions (hands apart and angled away from each other)
  gsap.set("#hand1", {
    x: animationConfig.startOffsetX/2,
    y: animationConfig.startOffsetY/2,
    rotation: 15 // clockwise (away from hand2)
  })
  gsap.set("#hand2", {
    x: -animationConfig.startOffsetX/2,
    y: -animationConfig.startOffsetY/2,
    rotation: -15 // counterclockwise (away from hand1)
  })

  // Hide clap effect initially
  gsap.set("#clap", {
    opacity: 0,
    scale: 0.9
  })

  // Initial fade-in (happens only once)
  gsap.to(["#hand1", "#hand2"], {
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
    delay: 0.2 // small delay to ensure everything is ready
  })

  // Looping animation timeline (starts after fade-in)
  const tl = gsap.timeline({
    repeat: -1, // infinite loop
    repeatDelay: 0, // no pause - filled with hovering animation
    yoyo: false, // don't reverse, just repeat
    delay: 0.8 // wait for fade-in to complete
  })


  // Animation sequence
  tl
    // Anticipation: Small wind-up in opposite direction
    .to("#hand1", {
      x: animationConfig.startOffsetX * 0.65, // pull back slightly more
      y: animationConfig.startOffsetY * 0.65,
      rotation: 20, // pull back even more clockwise
      duration: 0.2,
      ease: "power2.out"
    }, 0)
    .to("#hand2", {
      x: -animationConfig.startOffsetX * 0.65, // pull back slightly more
      y: -animationConfig.startOffsetY * 0.65,
      rotation: -20, // pull back even more counterclockwise
      duration: 0.2,
      ease: "power2.out"
    }, 0)

    // Phase 1: Move hands together with rotation
    .to("#hand1", {
      x: -animationConfig.startOffsetX/4,
      y: -animationConfig.startOffsetY/4,
      rotation: -animationConfig.maxRotation,
      duration: animationConfig.togetherDuration,
      ease: animationConfig.togetherEase
    }, 0.2)
    .to("#hand2", {
      x: animationConfig.startOffsetX/2, // travel further to the right
      y: animationConfig.startOffsetY/4,
      rotation: animationConfig.maxRotation,
      duration: animationConfig.togetherDuration,
      ease: animationConfig.togetherEase
    }, 0.2)

    // Clap effect: Show briefly when hands meet
    .to("#clap", {
      opacity: 1,
      scale: 1,
      duration: 0.1,
      ease: "power2.out"
    }, 0.2 + animationConfig.togetherDuration - 0.05)
    .to("#clap", {
      opacity: 0,
      scale: 0.9,
      duration: 0.15,
      ease: "power2.in"
    }, 0.2 + animationConfig.togetherDuration + 0.05)

    // Phase 2: Move hands apart with counter-rotation (return to initial positions)
    .to("#hand1", {
      x: animationConfig.startOffsetX/2,
      y: animationConfig.startOffsetY/2,
      rotation: 15, // return to initial clockwise position
      duration: animationConfig.apartDuration,
      ease: animationConfig.apartEase
    }, 0.2 + animationConfig.togetherDuration)
    .to("#hand2", {
      x: -animationConfig.startOffsetX/2,
      y: -animationConfig.startOffsetY/2,
      rotation: -15, // return to initial counterclockwise position
      duration: animationConfig.apartDuration,
      ease: animationConfig.apartEase
    }, 0.2 + animationConfig.togetherDuration)

    // Add independent hovering animations to fill the time until next cycle
    // Hand 1: Slower, larger movements
    .to("#hand1", {
      y: `+=${4}`,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: 2
    }, 0.2 + animationConfig.togetherDuration + animationConfig.apartDuration)

    // Hand 2: Faster, smaller movements with offset timing
    .to("#hand2", {
      y: `+=${3}`,
      duration: 1.3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: 3
    }, 0.2 + animationConfig.togetherDuration + animationConfig.apartDuration + 0.7)

    // Add subtle rotation variation for hand 1
    .to("#hand1", {
      rotation: `+=${2}`,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: 1
    }, 0.2 + animationConfig.togetherDuration + animationConfig.apartDuration + 0.5)

    // Add subtle rotation variation for hand 2 (opposite direction)
    .to("#hand2", {
      rotation: `+=${-1.5}`,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: 1
    }, 0.2 + animationConfig.togetherDuration + animationConfig.apartDuration + 1)

})
</script>

<i18n lang="json">
  {
    "cs": {
      "buttonContact": "Kontaktovat",
      "buttonLearn": "Ukázky práce",
      "description": "Protože fajn projekty a podniky si zaslouží profesionální web na míru.",
      "highlight": "",
      "title": "Šimon má web a ty ho můžeš mít taky"
    },
    "en": {
      "buttonContact": "Contact",
      "buttonLearn": "Browse",
      "description": "I create digital projects to dazzle.",
      "highlight": "Websites that let you",
      "title": "Shine online"
    }
  }
</i18n>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-custom {
  animation: spin 16000ms linear infinite;
}

/* Hide animated elements until GSAP is ready */
.hand-animation {
  opacity: 0;
}
</style>
