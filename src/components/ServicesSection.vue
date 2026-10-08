<script setup>
import InfoGrid from './InfoGrid.vue'
import { services } from '../data/services.js'
</script>

<template>
  <section id="services">
    <h2><span class="path">~/</span><span class="fname">services.md</span></h2>
    <InfoGrid :items="services" />
  </section>
</template>
