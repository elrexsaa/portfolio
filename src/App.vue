<template>
  <div :class="{ dark: isDark }" class="relative">
    <!-- Custom Cursor -->
    <CustomCursor />

    <!-- Preloader -->
    <Preloader @done="preloaderDone" />

    <!-- Main App -->
    <transition name="fade-app">
      <div v-if="appReady" class="bg-cream-50 dark:bg-ink-900 transition-colors duration-500 min-h-screen">
        <Navbar
          :is-dark="isDark"
          :locale="locale"
          @toggle-dark="toggleDark"
          @toggle-locale="toggleLocale"
        />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <FooterSection />
      </main>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CustomCursor from './components/CustomCursor.vue'
import Preloader from './components/Preloader.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const { locale } = useI18n()
const isDark = ref(false)
const appReady = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
}

function toggleLocale() {
  locale.value = locale.value === 'id' ? 'en' : 'id'
}

function preloaderDone() {
  appReady.value = true
}
</script>

<style>
.fade-app-enter-active {
  transition: opacity 0.8s ease 0.1s;
}
.fade-app-enter-from {
  opacity: 0;
}
.fade-app-enter-to {
  opacity: 1;
}
</style>
