<template>
  <div>
    <div
      ref="dotEl"
      class="fixed top-0 left-0 w-2 h-2 bg-gold-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75"
      :style="{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }"
    />
    <!-- Ring cursor -->
    <div
      ref="ringEl"
      class="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-gold-500/60 transition-all"
      :style="{
        width: isHover ? '48px' : '24px',
        height: isHover ? '48px' : '24px',
        transform: `translate(${ring.x - (isHover ? 24 : 12)}px, ${ring.y - (isHover ? 24 : 12)}px)`,
        transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
        backgroundColor: isHover ? 'rgba(201,168,76,0.08)' : 'transparent',
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pos = ref({ x: -100, y: -100 })
const ring = ref({ x: -100, y: -100 })
const isHover = ref(false)
let ringX = -100, ringY = -100
let animId = null

function onMouseMove(e) {
  pos.value = { x: e.clientX, y: e.clientY }
}

function onMouseOver(e) {
  isHover.value = !!(e.target.closest('a, button, [data-cursor-hover]'))
}

function lerp(start, end, factor) {
  return start + (end - start) * factor
}

function animateRing() {
  ringX = lerp(ringX, pos.value.x, 0.12)
  ringY = lerp(ringY, pos.value.y, 0.12)
  ring.value = { x: ringX, y: ringY }
  animId = requestAnimationFrame(animateRing)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseover', onMouseOver, { passive: true })
  animateRing()
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  cancelAnimationFrame(animId)
})
</script>
