<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useLightbox } from '../composables/useLightbox.js'

// items: array of { src, alt } for real screenshots,
// or { placeholder: '+ скриншот' } / { nda: true } for empty slots
const props = defineProps({
  items: { type: Array, required: true },
})

const rowEl = ref(null)
const fadeLeft = ref(false)
const fadeRight = ref(false)
const { openLightbox } = useLightbox()

const images = props.items.filter((i) => i.src)

function update() {
  const row = rowEl.value
  if (!row) return
  const max = row.scrollWidth - row.clientWidth
  if (max <= 1) {
    fadeLeft.value = false
    fadeRight.value = false
    return
  }
  fadeLeft.value = row.scrollLeft > 1
  fadeRight.value = row.scrollLeft < max - 1
}

function onImgClick(item) {
  const srcs = images.map((i) => i.src)
  const idx = images.indexOf(item)
  openLightbox(srcs, idx)
}

onMounted(() => {
  nextTick(update)
  rowEl.value?.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})
onUnmounted(() => {
  rowEl.value?.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div class="media-row" ref="rowEl">
    <div class="media-fade left" :class="{ visible: fadeLeft }"></div>

    <div
      v-for="(item, i) in items"
      :key="i"
      class="media-slot"
      :class="{ 'has-media': !!item.src }"
    >
      <img v-if="item.src" :src="item.src" :alt="item.alt" loading="lazy" @click="onImgClick(item)" />
      <span v-else-if="item.nda" class="hint nda">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>NDA
      </span>
      <span v-else class="hint">{{ item.placeholder }}</span>
    </div>

    <div class="media-fade right" :class="{ visible: fadeRight }"></div>
  </div>
</template>
