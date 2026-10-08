<script setup>
import { contactByKey, linkAttrs } from '../data/contacts.js'

const heroLinks = ['telegram', 'email', 'whatsapp'].map((key) => contactByKey[key])
</script>

<template>
  <section id="hero">
    <div class="hero-line">~/portfolio $ whoami</div>
    <h1>Арман Хачатрян</h1>
    <div class="role">Frontend-разработчик — Vue.js / Nuxt.js</div>
    <p class="pitch">
      Разрабатываю frontend для SaaS-продуктов: от архитектуры до сложных пользовательских
      сценариев, CMS и real-time функциональности. Несколько лет самостоятельно вёл frontend
      небольших продуктовых команд.
    </p>
    <div class="links">
      <a v-for="c in heroLinks" :key="c.key" class="chip" :href="c.href" v-bind="linkAttrs(c.href)">
        {{ c.name }}
      </a>
    </div>
  </section>
</template>
