<template>
  <section id="education" class="py-28 lg:py-36 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 -z-10 bg-cream-100/60 dark:bg-ink-800/30 transition-colors duration-500" />

    <!-- Ornament -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gold-400/5 pointer-events-none" />

    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-20">
        <div ref="eyebrowEl" class="opacity-0 translate-y-4 mb-3">
          <span class="section-eyebrow">{{ $t('education.eyebrow') }}</span>
        </div>
        <div ref="headingEl" class="opacity-0 translate-y-4">
          <h2 class="section-heading">{{ $t('education.heading') }}</h2>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-ink-200 dark:bg-cream-100/10 md:-translate-x-px" />
        <!-- Animated line overlay -->
        <div
          ref="timelineLineEl"
          class="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold-400 to-gold-600 md:-translate-x-px origin-top"
          style="height: 0%"
        />

        <!-- Timeline items -->
        <div class="space-y-12 md:space-y-16">
          <div
            v-for="(item, index) in education"
            :key="item.year"
            ref="itemEls"
            class="relative flex flex-col md:flex-row gap-8 md:gap-0 opacity-0 translate-y-8"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Content card -->
            <div
              class="ml-16 md:ml-0 md:w-[calc(50%-2rem)]"
              :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'"
            >
              <div class="glass-card rounded-2xl p-6 group hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-ink-700/50">
                <!-- Year badge -->
                <div class="inline-flex items-center gap-2 mb-3">
                  <span class="font-sans text-xs font-bold tracking-widest text-gold-500 dark:text-gold-400">{{ item.year }}</span>
                  <span class="h-px w-8 bg-gold-400/40" />
                </div>

                <h3 class="font-serif text-lg font-semibold text-ink-900 dark:text-cream-50 mb-1 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                  {{ item.degree }}
                </h3>
                <p class="font-sans text-sm font-medium text-ink-600 dark:text-cream-200/60 mb-3">
                  {{ item.school }}
                </p>
                <p class="font-sans text-sm text-ink-500 dark:text-cream-200/50 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <!-- Center dot -->
            <div
              class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 z-10"
            >
              <div class="w-5 h-5 rounded-full border-2 border-gold-400 bg-cream-50 dark:bg-ink-900 flex items-center justify-center shadow-lg shadow-gold-400/20">
                <div class="w-2 h-2 rounded-full bg-gold-400" />
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const eyebrowEl = ref(null)
const headingEl = ref(null)
const timelineLineEl = ref(null)
const itemEls = ref([])

const education = [
  {
    year: '2025 – Sekarang',
    degree: 'Informatika (S1)',
    school: 'Universitas Satya Terra Bhinneka',
    description: 'Mempelajari fondasi pengembangan perangkat lunak, basis data, dan desain UX. Saat ini sedang menempuh studi untuk memperluas pemahaman dalam bidang teknologi informasi dan inovasi digital.',
  },
  {
    year: '2022 – 2025',
    degree: 'Teknik Komputer dan Jaringan',
    school: 'SMK Swasta RA Kartini',
    description: 'Memulai perjalanan pendidikan di bidang teknologi dengan fokus pada pengembangan perangkat keras dan jaringan komputer. Aktif dalam proyek-proyek praktis yang melibatkan instalasi dan konfigurasi jaringan serta pemrograman dasar.',
  },
  {
    year: '2019 – 2022',
    degree: 'Sekolah Menengah Pertama',
    school: 'SMP N 1 Sipispis',
    description: 'Aktif dalam organisasi OSIS dan berbagai kegiatan ekstrakurikuler, mengembangkan keterampilan kepemimpinan dan kerja sama tim. Mencapai prestasi akademik yang baik.',
  },
]

onMounted(() => {
  // Eyebrow & heading
  [eyebrowEl.value, headingEl.value].forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    })
  })

  // Timeline line
  gsap.to(timelineLineEl.value, {
    height: '100%',
    duration: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: timelineLineEl.value,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    }
  })

  // Items
  itemEls.value.forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      }
    })
  })
})
</script>
