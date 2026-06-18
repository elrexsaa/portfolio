<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'nav-glass' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="group flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-full border border-gold-500 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
          <span class="font-serif text-base font-bold text-gold-500 group-hover:text-white transition-colors duration-300">eR</span>
        </div>
        <span class="font-serif text-base font-semibold text-ink-900 dark:text-cream-50 hidden sm:block">Elga Rexsa</span>
      </a>

      <!-- Desktop menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="'#' + item.id"
            class="font-sans text-sm font-medium text-ink-600 dark:text-cream-200/70 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300 relative group py-1"
          >
            {{ $t('nav.' + item.key) }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
          </a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <!-- Language Toggle -->
        <button
          @click="$emit('toggle-locale')"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-800/10 dark:border-cream-100/10 hover:border-gold-500 dark:hover:border-gold-400 text-xs font-medium font-sans text-ink-600 dark:text-cream-200/70 hover:text-gold-500 dark:hover:text-gold-400 transition-all duration-300"
          :title="locale === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
          {{ locale === 'id' ? 'ID' : 'EN' }}
        </button>

        <!-- Dark/Light Toggle -->
        <button
          @click="$emit('toggle-dark')"
          class="w-9 h-9 rounded-full border border-ink-800/10 dark:border-cream-100/10 hover:border-gold-500 dark:hover:border-gold-400 flex items-center justify-center text-ink-600 dark:text-cream-200/70 hover:text-gold-500 dark:hover:text-gold-400 transition-all duration-300 hover:rotate-12"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <svg v-if="!isDark" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Mobile menu button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden w-9 h-9 rounded-full border border-ink-800/10 dark:border-cream-100/10 flex items-center justify-center text-ink-600 dark:text-cream-200/70 hover:border-gold-500 dark:hover:border-gold-400 hover:text-gold-500 dark:hover:text-gold-400 transition-all"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden nav-glass border-t border-ink-800/5 dark:border-cream-100/5 px-6 py-4">
        <ul class="flex flex-col gap-4">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="'#' + item.id"
              @click="mobileOpen = false"
              class="font-sans text-sm font-medium text-ink-600 dark:text-cream-200/70 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
            >
              {{ $t('nav.' + item.key) }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({ isDark: Boolean, locale: String })
defineEmits(['toggle-dark', 'toggle-locale'])

const { locale } = useI18n()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { id: 'about', key: 'about' },
  { id: 'projects', key: 'projects' },
  { id: 'education', key: 'education' },
  { id: 'contact', key: 'contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
