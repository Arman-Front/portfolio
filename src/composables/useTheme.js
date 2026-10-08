import { onMounted, onUnmounted, ref } from 'vue'
import { prefersReducedMotion } from './motion.js'

// Начальная тема выставляется inline-скриптом в index.html до отрисовки,
// чтобы не было вспышки тёмной темы. Здесь — только переключение и синхронизация.
const STORAGE_KEY = 'theme'
const THEME_COLORS = { dark: '#10151f', light: '#ffffff' }

const isLight = ref(false)

function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

function applyTheme(theme, { animate = true } = {}) {
  const root = document.documentElement
  if (animate && !prefersReducedMotion()) {
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 400)
  }
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
  } else {
    root.removeAttribute('data-theme')
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  isLight.value = theme === 'light'
}

function savedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function useTheme() {
  let media = null

  // Следуем за системной темой, пока пользователь не выбрал свою
  function onSystemChange(e) {
    if (!savedTheme()) applyTheme(e.matches ? 'light' : 'dark')
  }

  function toggleTheme() {
    const theme = readTheme() === 'light' ? 'dark' : 'light'
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // приватный режим — тема просто не запомнится
    }
  }

  onMounted(() => {
    isLight.value = readTheme() === 'light'
    media = window.matchMedia('(prefers-color-scheme: light)')
    media.addEventListener('change', onSystemChange)
  })

  onUnmounted(() => {
    media?.removeEventListener('change', onSystemChange)
  })

  return { isLight, toggleTheme }
}
