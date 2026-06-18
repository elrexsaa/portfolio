<template>
  <transition name="preloader-slide">
    <div
      v-if="visible"
      class="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-ink-900 overflow-hidden"
    >
      <!-- Background ornament -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-400/5 animate-spin-slow" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-400/10 animate-spin-slow" style="animation-direction:reverse;animation-duration:14s" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-gold-400/20" />
      </div>

      <!-- Logo mark -->
      <div ref="logoEl" class="relative z-10 mb-8 opacity-0">
        <div class="w-16 h-16 rounded-full border-2 border-gold-400 flex items-center justify-center">
          <span class="font-serif text-3xl font-bold text-gold-400">E</span>
        </div>
      </div>

      <!-- Loading text -->
      <div ref="textEl" class="relative z-10 opacity-0">
        <div class="flex items-center gap-3">
          <span class="font-serif text-2xl italic text-cream-50/70">{{ $t('preloader.loading') }}</span>
          <span class="flex gap-1">
            <span v-for="i in 3" :key="i"
              class="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce"
              :style="{ animationDelay: (i * 0.15) + 's' }"
            />
          </span>
        </div>
      </div>

      <!-- Progress bar -->
      <div ref="barWrap" class="relative z-10 mt-10 w-48 h-px bg-white/10 overflow-hidden opacity-0">
        <div
          class="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-100 ease-linear"
          :style="{ width: progress + '%' }"
        />
      </div>

      <!-- Progress number -->
      <div ref="numEl" class="relative z-10 mt-3 font-sans text-xs text-cream-50/30 tabular-nums opacity-0">
        {{ Math.round(progress) }}%
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['done'])
const visible = ref(true)
const progress = ref(0)
const logoEl = ref(null)
const textEl = ref(null)
const barWrap = ref(null)
const numEl = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.to([logoEl.value, textEl.value, barWrap.value, numEl.value], {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2,
  })

  // Simulate loading progress
  tl.to(progress, {
    value: 100,
    duration: 2.2,
    ease: 'power2.inOut',
    onComplete: () => {
      gsap.to([logoEl.value, textEl.value, barWrap.value, numEl.value], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.in',
        onComplete: () => {
          visible.value = false
          emit('done')
        }
      })
    }
  }, '-=0.2')
})
</script>

<style scoped>
.preloader-slide-leave-active {
  transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
}
.preloader-slide-leave-to {
  transform: translateY(-100%);
}
</style>
