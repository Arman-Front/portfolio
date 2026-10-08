<script setup>
import InfoGrid from './InfoGrid.vue'
import { integrations } from '../data/services.js'
</script>

<template>
  <section id="skills">
    <h2><span class="path">~/</span><span class="fname">skills.js</span></h2>
    <div class="codeblock">
      <div class="row"
        ><span class="kw">const</span> <span class="fn">stack</span> = {<br
        />&nbsp;&nbsp;core: [<span class="str">'Vue.js'</span>, <span class="str">'Nuxt.js'</span>, <span class="str">'JavaScript'</span>, <span class="str">'TypeScript'</span>],<br
        />&nbsp;&nbsp;state: [<span class="str">'Pinia'</span>],<br
        />&nbsp;&nbsp;styling: [<span class="str">'SCSS'</span>],<br
        />&nbsp;&nbsp;legacy: [<span class="str">'Vite'</span>, <span class="str">'jQuery'</span>, <span class="cm">// native JS</span>],<br
        />};</div
      >
    </div>
    <div class="tag-row">
      <span class="tag">Vue.js</span><span class="tag">Nuxt.js</span><span class="tag">TypeScript</span>
      <span class="tag">Pinia</span><span class="tag">SCSS</span><span class="tag">PWA</span>
    </div>

    <InfoGrid :items="integrations" style="margin-top: 28px" />
  </section>
</template>
