<template>
  <section id="projects" class="relative">
    <!-- Section label (sticky) -->
    <div class="sticky top-16 z-20 flex justify-between items-center px-6 lg:px-8 py-4 bg-cream-50/80 dark:bg-ink-900/80 backdrop-blur-md border-y border-ink-800/5 dark:border-cream-100/5">
      <span class="section-eyebrow">{{ $t('projects.eyebrow') }}</span>
      <div class="flex items-center gap-3">
        <span class="font-sans text-xs text-ink-400 dark:text-cream-200/40">
          {{ currentIndex + 1 }} / {{ projects.length }}
        </span>
        <div class="flex gap-1">
          <div
            v-for="(_, i) in projects"
            :key="i"
            class="h-0.5 rounded-full transition-all duration-500"
            :class="i === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-ink-200 dark:bg-cream-100/20'"
          />
        </div>
      </div>
    </div>

    <!-- Snap scroll container -->
    <div
      ref="snapContainer"
      class="snap-mandatory-y"
      style="height:100vh; overflow-y:scroll; scroll-snap-type: y mandatory;"
      @scroll.passive="onScroll"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="snap-start-child relative flex items-center"
        style="height:100vh; scroll-snap-align: start;"
      >
        <!-- Background image -->
        <div class="absolute inset-0 overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-700 scale-105"
            :class="currentIndex === index ? 'scale-100' : 'scale-105'"
          />
          <div class="absolute inset-0" :style="{ background: project.overlay }" />
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div class="max-w-xl">
            <!-- Tag -->
            <transition name="slide-up">
              <span
                v-if="currentIndex === index"
                class="inline-block font-sans text-xs font-medium tracking-widest uppercase text-white/60 border border-white/20 px-3 py-1 rounded-full mb-6"
              >
                {{ project.tag }}
              </span>
            </transition>

            <!-- Title -->
            <transition name="slide-up-delay">
              <h2
                v-if="currentIndex === index"
                class="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-5"
              >
                {{ project.title }}
              </h2>
            </transition>

            <!-- Description -->
            <transition name="slide-up-delay2">
              <p
                v-if="currentIndex === index"
                class="font-sans text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-md"
              >
                {{ project.description }}
              </p>
            </transition>

            <!-- Tech stack -->
            <transition name="slide-up-delay3">
              <div v-if="currentIndex === index" class="flex flex-wrap gap-2 mb-8">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="font-sans text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                >
                  {{ tech }}
                </span>
              </div>
            </transition>

            <!-- CTA -->
            <transition name="slide-up-delay4">
              <a
                v-if="currentIndex === index"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary shadow-xl"
              >
                {{ $t('projects.visit') }}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </transition>
          </div>
        </div>

        <!-- Navigation arrows -->
        <div class="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          <button
            v-if="index > 0"
            @click="scrollToProject(index - 1)"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            v-if="index < projects.length - 1"
            @click="scrollToProject(index + 1)"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Project number -->
        <div class="absolute bottom-12 right-8 font-serif text-8xl font-bold text-white/5 pointer-events-none select-none">
          {{ String(index + 1).padStart(2, '0') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const snapContainer = ref(null)

const projects = [
  {
    title: 'Undangan Ulang Tahun Digital',
    tag: 'Digital Invitation',
    description: 'Undangan digital interaktif yang memadukan animasi, musik, dan pengalaman pengguna yang menarik untuk merayakan momen spesial dengan cara yang unik dan modern.',
    image: 'https://cdn.phototourl.com/free/2026-06-18-90ff1e7e-580c-429d-8260-80b3327a9c3e.png',
    overlay: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(201,168,76,0.2) 100%)',
    tech: ['HTML, TailwindCSS', 'JavaScript', 'GSAP'],
    url: 'https://eundangansenzyavaleksta.vercel.app/',
  },
  {
    title: 'Puisiku - Platform Puisi Digital',
    tag: 'Digital Literature',
    description: 'Platform digital yang memungkinkan pengguna untuk menulis, berbagi, dan menemukan puisi dari berbagai penulis, dengan fitur interaktif dan komunitas yang mendukung kreativitas sastra.',
    image: 'https://i.ibb.co.com/vCLxjVVN/Screenshot-2026-06-19-025408.png',
    overlay: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(59,130,246,0.25) 100%)',
    tech: ['Vue.js', 'TailwindCSS', 'JavaScript', 'Supabase'],
    url: 'https://quoterex.dpdns.org/',
  },
  {
    title: 'OrangUtan Haven - Website Biodata Orangutan',
    tag: 'Educational Website',
    description: 'Website edukatif yang menyajikan informasi lengkap tentang spesies orangutan, habitatnya, dan upaya konservasi, dengan tujuan meningkatkan kesadaran dan pendidikan tentang pelestarian satwa langka ini.',
    image: 'https://i.ibb.co.com/tTNWpWWr/Screenshot-2026-06-19-025958.png',
    overlay: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(168,85,247,0.25) 100%)',
    tech: ['PHP', 'TailwindCSS', 'JavaScript', 'MySQL'],
    url: 'https://orangutanhaven.byethost7.com/',
  },
  {
    title: 'Platform Freelance - CU4NNN',
    tag: 'FinTech Platform',
    description: 'Platform freelance untuk menghasilkan uang tambahan, menghubungkan pekerja lepas dengan klien yang membutuhkan layanan mereka, dengan fitur manajemen proyek dan pembayaran yang aman.',
    image: 'https://i.ibb.co.com/jkvTNDMZ/Screenshot-2026-06-19-030209.png',
    overlay: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(6,182,212,0.25) 100%)',
    tech: ['PHP', 'TailwindCSS', 'JavaScript', 'MySQL'],
    url: 'https://cu4nnn.22web.org/',
  },
  {
    title: 'Birthday Gift - Website Ucapan Ulang Tahun',
    tag: 'Birthday Greeting Website',
    description: 'Website interaktif yang memungkinkan pengguna untuk mengirim ucapan ulang tahun yang dipersonalisasi, lengkap dengan animasi dan musik, untuk memberikan pengalaman yang menyenangkan dan berkesan bagi penerima.',
    image: 'https://i.ibb.co.com/7tgSVXRz/Screenshot-2026-06-19-030409.png',
    overlay: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(6,182,212,0.25) 100%)',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://elgaaa.github.io/',
  },
]

function onScroll() {
  if (!snapContainer.value) return
  const scrollTop = snapContainer.value.scrollTop
  const height = snapContainer.value.clientHeight
  currentIndex.value = Math.round(scrollTop / height)
}

function scrollToProject(index) {
  if (!snapContainer.value) return
  snapContainer.value.scrollTo({ top: index * snapContainer.value.clientHeight, behavior: 'smooth' })
}
</script>

<style scoped>
.slide-up-enter-active { transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1); }
.slide-up-enter-from { opacity: 0; transform: translateY(30px); }

.slide-up-delay-enter-active { transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s; }
.slide-up-delay-enter-from { opacity: 0; transform: translateY(30px); }

.slide-up-delay2-enter-active { transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s; }
.slide-up-delay2-enter-from { opacity: 0; transform: translateY(30px); }

.slide-up-delay3-enter-active { transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s; }
.slide-up-delay3-enter-from { opacity: 0; transform: translateY(30px); }

.slide-up-delay4-enter-active { transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s; }
.slide-up-delay4-enter-from { opacity: 0; transform: translateY(30px); }
</style>
