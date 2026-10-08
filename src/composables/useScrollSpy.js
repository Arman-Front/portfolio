import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollSpy(sectionIds) {
  const activeId = ref(sectionIds[0])
  let ticking = false

  function updateActive() {
    ticking = false
    const tabbar = document.querySelector('.tabbar')
    if (!tabbar) return
    const line = tabbar.getBoundingClientRect().bottom + 4
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    let current = sections[0]
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) {
        current = section
      }
    }
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (atBottom) current = sections[sections.length - 1]
    activeId.value = current.id
  }

  function onScroll() {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(updateActive)
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    updateActive()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { activeId }
}
