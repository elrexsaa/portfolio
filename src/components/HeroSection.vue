<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden pt-16">
    <!-- Background texture -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-white dark:from-ink-900 dark:via-ink-900 dark:to-ink-800 transition-colors duration-500" />
      <!-- Subtle grid -->
      <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.04]" style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;" />
    </div>

    <!-- Floating ornaments -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Gold circle large -->
      <div class="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-gold-400/10 animate-spin-slow" />
      <div class="absolute -top-10 -right-10 w-72 h-72 rounded-full border border-gold-400/15 animate-spin-slow" style="animation-direction:reverse;animation-duration:30s" />
      <!-- Floating squares -->
      <div class="absolute top-32 left-12 w-8 h-8 border border-gold-400/30 rotate-45 animate-float animation-delay-1" />
      <div class="absolute top-64 right-1/4 w-4 h-4 bg-gold-400/20 rotate-45 animate-float-slow animation-delay-2" />
      <div class="absolute bottom-1/3 left-1/4 w-6 h-6 border border-gold-400/20 rounded-full animate-float-fast animation-delay-3" />
      <div class="absolute bottom-48 right-16 w-12 h-12 border border-gold-400/15 rotate-12 animate-float animation-delay-4" />
      <!-- Dots -->
      <div class="absolute top-1/2 left-8 grid grid-cols-3 gap-2 opacity-20">
        <div v-for="i in 9" :key="i" class="w-1 h-1 bg-gold-500 rounded-full" />
      </div>
      <div class="absolute bottom-24 right-8 grid grid-cols-4 gap-2 opacity-10">
        <div v-for="i in 12" :key="i" class="w-1 h-1 bg-ink-900 dark:bg-cream-50 rounded-full" />
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Text side -->
        <div ref="textCol" class="order-2 lg:order-1">
          <div class="overflow-hidden mb-4">
            <p ref="greetEl" class="section-eyebrow translate-y-full opacity-0">
              {{ $t('hero.greeting') }}
            </p>
          </div>

          <div class="overflow-hidden mb-3">
            <h1 ref="nameEl" class="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-900 dark:text-cream-50 leading-none translate-y-full opacity-0">
              {{ $t('hero.name') }}
            </h1>
          </div>

          <div class="overflow-hidden mb-6">
            <p ref="roleEl" class="font-serif text-xl sm:text-2xl italic text-gold-500 dark:text-gold-400 translate-y-full opacity-0">
              {{ $t('hero.role') }}
            </p>
          </div>

          <div class="overflow-hidden mb-10">
            <p ref="subtitleEl" class="font-sans text-base sm:text-lg text-ink-600 dark:text-cream-200/60 max-w-md leading-relaxed translate-y-full opacity-0">
              {{ $t('hero.subtitle') }}
            </p>
          </div>

          <div ref="ctaEl" class="flex flex-wrap gap-4 opacity-0 translate-y-4">
            <a href="#projects" class="btn-primary">
              {{ $t('hero.cta_work') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" class="btn-ghost">
              {{ $t('hero.cta_contact') }}
            </a>
          </div>

          <!-- Scroll hint -->
          <div ref="scrollHintEl" class="mt-16 flex items-center gap-3 opacity-0">
            <div class="w-px h-12 bg-gradient-to-b from-transparent to-gold-400/50" />
            <span class="font-sans text-xs text-ink-400 dark:text-cream-200/30 tracking-widest uppercase">Scroll</span>
          </div>
        </div>

        <!-- Photo side -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div ref="photoCol" class="relative opacity-0 translate-y-8">
            <!-- Decorative frame -->
            <div class="absolute -inset-4 rounded-3xl border border-gold-400/20" />
            <div class="absolute -inset-8 rounded-3xl border border-gold-400/10 rotate-3" />

            <!-- Main photo container -->
            <div
              class="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/20 group"
              @mouseenter="photoHover = true"
              @mouseleave="photoHover = false"
            >
              <img
                src="https://i.ibb.co.com/hxj7C154/IMG-1892.jpg"
                alt="Elgaa"
                class="w-full h-full object-cover object-top transition-all duration-700 ease-in-out"
                :class="photoHover ? 'grayscale-0 scale-105' : 'grayscale scale-100'"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
              <!-- Hover label -->
              <div
                class="absolute bottom-4 left-4 right-4 text-center transition-all duration-500"
                :class="photoHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
              >
                <span class="font-sans text-xs text-white/90 bg-gold-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {{ $t('hero.name') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const greetEl = ref(null)
const nameEl = ref(null)
const roleEl = ref(null)
const subtitleEl = ref(null)
const ctaEl = ref(null)
const scrollHintEl = ref(null)
const photoCol = ref(null)
const photoHover = ref(false)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })

  const textEls = [greetEl.value, nameEl.value, roleEl.value, subtitleEl.value]
  tl.to(textEls, {
    y: 0,
    opacity: 1,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power4.out',
  })
  .to(ctaEl.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.4')
  .to(scrollHintEl.value, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, '-=0.2')
  .to(photoCol.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.out',
  }, '-=1.2')
})
</script>
