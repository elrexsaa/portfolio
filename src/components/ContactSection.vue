<template>
  <section id="contact" class="py-28 lg:py-36 relative overflow-hidden">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-cream-50 dark:bg-ink-900 transition-colors duration-500" />
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <div>
          <div class="mb-3">
            <span class="section-eyebrow">{{ $t('contact.eyebrow') }}</span>
          </div>
          <div class="mb-5">
            <h2 class="section-heading">{{ $t('contact.heading') }}</h2>
          </div>
          <div class="mb-12">
            <p class="font-sans text-base text-ink-600 dark:text-cream-200/60 leading-relaxed max-w-md">
              {{ $t('contact.subtitle') }}
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="info in contactInfo" :key="info.label"
              class="flex items-center gap-4 p-4 rounded-xl border border-ink-800/5 dark:border-cream-100/5 hover:border-gold-400/30 dark:hover:border-gold-400/20 transition-all duration-300 group"
            >
              <div class="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-500 dark:text-gold-400 group-hover:bg-gold-400/20 transition-colors">
                <component :is="'span'" v-html="info.icon" class="w-5 h-5" />
              </div>
              <div>
                <p class="font-sans text-xs text-ink-400 dark:text-cream-200/40 mb-0.5">{{ info.label }}</p>
                <p class="font-sans text-sm font-medium text-ink-800 dark:text-cream-100">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block font-sans text-xs font-medium tracking-wider uppercase text-ink-500 dark:text-cream-200/50 mb-2">
                {{ $t('contact.name_label') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="$t('contact.name_placeholder')"
                class="w-full px-4 py-3.5 rounded-xl border border-ink-800/10 dark:border-cream-100/10 bg-white dark:bg-ink-800/50 text-ink-900 dark:text-cream-50 placeholder:text-ink-300 dark:placeholder:text-cream-200/20 focus:outline-none focus:border-gold-400 dark:focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all font-sans text-sm"
              />
            </div>

            <div>
              <label class="block font-sans text-xs font-medium tracking-wider uppercase text-ink-500 dark:text-cream-200/50 mb-2">
                {{ $t('contact.email_label') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                :placeholder="$t('contact.email_placeholder')"
                class="w-full px-4 py-3.5 rounded-xl border border-ink-800/10 dark:border-cream-100/10 bg-white dark:bg-ink-800/50 text-ink-900 dark:text-cream-50 placeholder:text-ink-300 dark:placeholder:text-cream-200/20 focus:outline-none focus:border-gold-400 dark:focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all font-sans text-sm"
              />
            </div>

            <div>
              <label class="block font-sans text-xs font-medium tracking-wider uppercase text-ink-500 dark:text-cream-200/50 mb-2">
                {{ $t('contact.message_label') }}
              </label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                :placeholder="$t('contact.message_placeholder')"
                class="w-full px-4 py-3.5 rounded-xl border border-ink-800/10 dark:border-cream-100/10 bg-white dark:bg-ink-800/50 text-ink-900 dark:text-cream-50 placeholder:text-ink-300 dark:placeholder:text-cream-200/20 focus:outline-none focus:border-gold-400 dark:focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all font-sans text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="sending || sent"
              class="w-full relative overflow-hidden btn-primary justify-center py-4 text-base font-semibold group"
              :class="{ 'opacity-70': sending }"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                <template v-if="sent">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ $t('contact.success') }}</span>
                </template>
                <template v-else-if="sending">
                  <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {{ $t('contact.sending') }}
                </template>
                <template v-else>
                  {{ $t('contact.send') }}
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </template>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 -z-0" />
            </button>

            <transition name="fade">
              <p v-if="sent" class="text-center font-sans text-sm text-emerald-600 dark:text-emerald-400">
                {{ $t('contact.success') }}
              </p>
            </transition>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const contactInfo = [
  {
    label: 'Email',
    value: 'rexsaelga@gmail.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
  },
  {
    label: 'Instagram',
    value: 'https://instagram.com/elgarexsaa',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/elrexsaa',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>',
  },
]

async function handleSubmit() {
  sending.value = true
  await new Promise(r => setTimeout(r, 1800))
  sending.value = false
  sent.value = true
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => { sent.value = false }, 5000)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
