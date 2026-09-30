<script setup>
import { ref, watch, nextTick } from 'vue'
import { useScrollSpy } from '../composables/useScrollSpy.js'

const tabs = [
  { id: 'about', label: 'about.md' },
  { id: 'skills', label: 'skills.js' },
  { id: 'experience', label: 'experience.log' },
  { id: 'pet-projects', label: 'pet-projects.log' },
  { id: 'contact', label: 'contact.json' },
]

const { activeId } = useScrollSpy(tabs.map((t) => t.id))
const tabbarEl = ref(null)
const tabRefs = ref({})

function setTabRef(id, el) {
  if (el) tabRefs.value[id] = el
}

function centerTab(id) {
  const tab = tabRefs.value[id]
  const bar = tabbarEl.value
  if (!tab || !bar) return
  const tabRect = tab.getBoundingClientRect()
  const barRect = bar.getBoundingClientRect()
  const delta = tabRect.left + tabRect.width / 2 - (barRect.left + barRect.width / 2)
  bar.scrollTo({ left: bar.scrollLeft + delta, behavior: 'smooth' })
}

watch(activeId, (id) => {
  nextTick(() => centerTab(id))
})
</script>

<template>
  <nav class="tabbar" ref="tabbarEl">
    <div class="tabbar-inner">
      <a
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeId === tab.id }"
        :href="`#${tab.id}`"
        :ref="(el) => setTabRef(tab.id, el)"
      >
        <span class="dot">●</span>{{ tab.label }}
      </a>
    </div>
  </nav>
</template>
