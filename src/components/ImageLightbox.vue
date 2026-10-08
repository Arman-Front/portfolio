<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useLightbox } from '../composables/useLightbox.js'

const { state, closeLightbox, next, prev, goTo } = useLightbox()
const dialogEl = ref(null)
const closeEl = ref(null)

const current = computed(() => state.images[state.index])

let touchStartX = 0
let touchStartY = 0
let touching = false

function onStageClick(e) {
  if (e.target === e.currentTarget) closeLightbox()
}

// Удерживаем Tab внутри диалога
function trapFocus(e) {
  const focusable = dialogEl.value?.querySelectorAll('button')
  if (!focusable?.length) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

function onKeydown(e) {
  if (!state.open) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'Tab') trapFocus(e)
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

watch(
  () => state.open,
  (open) => {
    if (open) nextTick(() => closeEl.value?.focus())
  },
)

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div
    v-if="state.open"
    ref="dialogEl"
    class="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Просмотр изображения"
    @click="onStageClick"
  >
    <button
      ref="closeEl"
      class="lightbox-close"
      type="button"
      aria-label="Закрыть"
      @click.stop="closeLightbox"
    >
      &#10005;
    </button>

    <button
      v-if="state.images.length > 1"
      class="lightbox-prev"
      type="button"
      aria-label="Предыдущее"
      @click.stop="prev"
    >
      &#8249;
    </button>

    <div
      class="lightbox-stage"
      @click="onStageClick"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <img
        :key="state.index"
        :src="current.src"
        :alt="current.alt"
        :class="state.dir === 'next' ? 'lb-anim-right' : state.dir === 'prev' ? 'lb-anim-left' : ''"
      />
    </div>

    <button
      v-if="state.images.length > 1"
      class="lightbox-next"
      type="button"
      aria-label="Следующее"
      @click.stop="next"
    >
      &#8250;
    </button>

    <div v-if="state.images.length > 1" class="lightbox-dots">
      <button
        v-for="(img, i) in state.images"
        :key="i"
        class="lightbox-dot"
        type="button"
        :class="{ active: i === state.index }"
        :aria-label="`Показать изображение ${i + 1} из ${state.images.length}`"
        :aria-current="i === state.index ? 'true' : undefined"
        @click.stop="goTo(i)"
      ></button>
    </div>
  </div>
</template>
