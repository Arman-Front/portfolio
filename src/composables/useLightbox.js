import { reactive } from 'vue'

// images: массив { src, alt }
const state = reactive({
  open: false,
  images: [],
  index: 0,
  dir: null,
})

// Элемент, на который вернётся фокус после закрытия
let returnFocusEl = null

function openLightbox(images, index) {
  returnFocusEl = document.activeElement
  state.images = images
  state.index = index
  state.dir = null
  state.open = true
  // Блокируем прокрутку на <html>: вместе с scrollbar-gutter: stable вёрстка не сдвигается
  document.documentElement.style.overflow = 'hidden'
}

function closeLightbox() {
  state.open = false
  document.documentElement.style.overflow = ''
  returnFocusEl?.focus()
  returnFocusEl = null
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
