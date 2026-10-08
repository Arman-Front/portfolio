<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const gutterEl = ref(null)
const contentEl = ref(null)
const linenumsEl = ref(null)

function renumber() {
  const content = contentEl.value
  const linenums = linenumsEl.value
  if (!content || !linenums) return

  linenums.innerHTML = ''
  const containerTop = content.getBoundingClientRect().top
  let counter = 1
  let maxBottom = 0

  const paras = Array.from(content.querySelectorAll('p'))
  paras.forEach((p) => {
    const range = document.createRange()
    range.selectNodeContents(p)
    const rects = range.getClientRects()
    for (let i = 0; i < rects.length; i++) {
      const r = rects[i]
      if (r.height === 0) continue
      const span = document.createElement('span')
      span.textContent = counter++
      span.style.top = r.top - containerTop + 'px'
      span.style.height = r.height + 'px'
      span.style.lineHeight = r.height + 'px'
      linenums.appendChild(span)
      maxBottom = Math.max(maxBottom, r.bottom - containerTop)
    }
  })
  linenums.style.height = maxBottom + 'px'
}

onMounted(() => {
  nextTick(renumber)
  window.addEventListener('resize', renumber)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(renumber)
  }
})
onUnmounted(() => {
  window.removeEventListener('resize', renumber)
})
</script>

<template>
  <section id="about">
    <h2><span class="path">~/</span><span class="fname">about.md</span></h2>
    <div ref="gutterEl" class="gutter">
      <div ref="linenumsEl" class="linenums"></div>
      <div ref="contentEl" class="content">
        <p>
          Frontend-разработчик с опытом коммерческой разработки SaaS-продуктов и веб-сервисов.
          Большую часть карьеры работал в небольших командах, самостоятельно отвечая за
          frontend-разработку, архитектуру и реализацию ключевых пользовательских сценариев.
        </p>
        <p>&nbsp;</p>
        <p>
          Помимо коммерческой разработки, периодически делаю собственные небольшие проекты и
          экспериментирую с AI и новыми технологиями.
        </p>
      </div>
    </div>
  </section>
</template>
