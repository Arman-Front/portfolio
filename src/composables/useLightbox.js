import { reactive } from 'vue'

const state = reactive({
  open: false,
  images: [],
  index: 0,
  dir: null,
})

function openLightbox(images, index) {
  state.images = images
  state.index = index
  state.dir = null
  state.open = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  state.open = false
  document.body.style.overflow = ''
}

function next() {
  state.index = (state.index + 1) % state.images.length
  state.dir = 'next'
}

function prev() {
  state.index = (state.index - 1 + state.images.length) % state.images.length
  state.dir = 'prev'
}

function goTo(i) {
  state.dir = i > state.index ? 'next' : i < state.index ? 'prev' : null
  state.index = i
}

export function useLightbox() {
  return { state, openLightbox, closeLightbox, next, prev, goTo }
}
