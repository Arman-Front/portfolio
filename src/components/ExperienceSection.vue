<script setup>
import CommitEntry from './CommitEntry.vue'
import { experience } from '../data/experience.js'
</script>

<template>
  <section id="experience">
    <h2><span class="path">~/</span><span class="fname">experience.log</span></h2>
    <CommitEntry v-for="item in experience" :key="item.hash" :item="item" />
  </section>
</template>
