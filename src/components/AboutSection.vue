<template>
  <section id="about" class="py-28 lg:py-36 relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-cream-100/60 dark:bg-ink-800/30 transition-colors duration-500" />

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <div ref="photoEl" class="relative opacity-0 translate-y-8 order-2 lg:order-1">
          <div class="relative w-full max-w-sm mx-auto">
            <div class="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border border-gold-400/20" />
            <div class="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-gold-400/15 animate-spin-slow" />

            <div class="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-ink-900/15">
              <transition-group name="cross-fade" tag="div" class="relative w-full h-full">
                <img
                  v-for="(photo, index) in photos"
                  :key="photo"
                  v-show="currentPhoto === index"
                  :src="photo"
                  alt="About photo"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </transition-group>

              <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                <button
                  v-for="(_, i) in photos"
                  :key="i"
                  @click="currentPhoto = i"
                  class="transition-all duration-300"
                  :class="currentPhoto === i
                    ? 'w-5 h-1.5 bg-gold-400 rounded-full'
                    : 'w-1.5 h-1.5 bg-white/50 rounded-full hover:bg-white/80'"
                />
              </div>

              <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div ref="eyebrowEl" class="opacity-0 translate-y-4 mb-3">
            <span class="section-eyebrow">{{ $t('about.eyebrow') }}</span>
          </div>

          <div ref="headingEl" class="opacity-0 translate-y-4 mb-8">
            <h2 class="section-heading">{{ $t('about.heading') }}</h2>
          </div>

          <div ref="textEl" class="opacity-0 translate-y-4 mb-10 space-y-5">
            <p class="font-sans text-base text-ink-600 dark:text-cream-200/60 leading-relaxed">
              {{ $t('about.p1') }}
            </p>
            <p class="font-sans text-base text-ink-600 dark:text-cream-200/60 leading-relaxed">
              {{ $t('about.p2') }}
            </p>
          </div>

          <div ref="skillsEl" class="opacity-0 translate-y-4">
            <p class="font-sans text-xs font-semibold tracking-widest uppercase text-ink-400 dark:text-cream-200/40 mb-5">
              {{ $t('about.skill_label') }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="font-sans text-xs font-medium px-4 py-2 rounded-full border border-ink-800/10 dark:border-cream-100/10 text-ink-700 dark:text-cream-200/70 hover:border-gold-500 hover:text-gold-500 dark:hover:border-gold-400 dark:hover:text-gold-400 transition-all duration-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const currentPhoto = ref(0)
const photoEl = ref(null)
const eyebrowEl = ref(null)
const headingEl = ref(null)
const textEl = ref(null)
const skillsEl = ref(null)

const photos = [
  'https://i.ibb.co.com/8HkkBRT/IMG-1901.jpg',
  'https://i.ibb.co.com/1Y61TgYW/IMG-9584.jpg',
  'https://i.ibb.co.com/mVVg9ZdN/IMG-6690.jpg',
]

const skills = ['HTML', 'Tailwind CSS', 'JavaScript', 'Python', 'PHP', 'MySQL', 'Node.js', 'Git']

let sliderInterval = null

onMounted(() => {
  sliderInterval = setInterval(() => {
    currentPhoto.value = (currentPhoto.value + 1) % photos.length
  }, 5000)

  const targets = [
    { el: photoEl.value, delay: 0 },
    { el: eyebrowEl.value, delay: 0.1 },
    { el: headingEl.value, delay: 0.2 },
    { el: textEl.value, delay: 0.3 },
    { el: skillsEl.value, delay: 0.4 },
  ]

  targets.forEach(({ el, delay }) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      }
    })
  })
})

onBeforeUnmount(() => {
  clearInterval(sliderInterval)
})
</script>

<style scoped>
.cross-fade-enter-active,
.cross-fade-leave-active {
  transition: opacity 1.2s ease;
}
.cross-fade-enter-from,
.cross-fade-leave-to {
  opacity: 0;
}
</style>
