<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useLightbox } from '../composables/useLightbox.js'

const { state, closeLightbox, next, prev, goTo } = useLightbox()
const stageEl = ref(null)

let touchStartX = 0
let touchStartY = 0
let touching = false

function onStageClick(e) {
  if (e.target === e.currentTarget) closeLightbox()
}

function onKeydown(e) {
  if (!state.open) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

function onTouchStart(e) {
  if (e.touches.length !== 1) return
  touching = true
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

function onTouchEnd(e) {
  if (!touching) return
  touching = false
  const dx = e.changedTouches[0].clientX - touchStartX
  const dy = e.changedTouches[0].clientY - touchStartY
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) && state.images.length > 1) {
    if (dx < 0) next()
    else prev()
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div v-if="state.open" class="lightbox" @click="onStageClick">
    <button
      v-if="state.images.length > 1"
      class="lightbox-prev"
      aria-label="Предыдущее"
      @click.stop="prev"
    >&#8249;</button>

    <div class="lightbox-stage" ref="stageEl" @click="onStageClick" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <img
        :key="state.index"
        :src="state.images[state.index]"
        alt=""
        :class="state.dir === 'next' ? 'lb-anim-right' : state.dir === 'prev' ? 'lb-anim-left' : ''"
      />
    </div>

    <button
      v-if="state.images.length > 1"
      class="lightbox-next"
      aria-label="Следующее"
      @click.stop="next"
    >&#8250;</button>

    <div v-if="state.images.length > 1" class="lightbox-dots">
      <button
        v-for="(img, i) in state.images"
        :key="i"
        class="lightbox-dot"
        :class="{ active: i === state.index }"
        :aria-label="`Показать изображение ${i + 1}`"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>
