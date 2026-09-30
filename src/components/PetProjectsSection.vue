<script setup>
import CommitEntry from './CommitEntry.vue'
import { petProjects } from '../data/petProjects.js'
</script>

<template>
  <section id="pet-projects">
    <h2><span class="path">~/</span><span class="fname">pet-projects.log</span></h2>
    <CommitEntry v-for="item in petProjects" :key="item.hash" :item="item" />
  </section>
</template>
