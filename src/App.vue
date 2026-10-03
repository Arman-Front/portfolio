<script setup>
import { useHead } from '@unhead/vue'
import TabBar from './components/TabBar.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import PetProjectsSection from './components/PetProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import Lightbox from './components/Lightbox.vue'

const title = 'Арман Хачатрян — Frontend-разработчик'
const description = 'Frontend-разработчик (Vue.js/Nuxt.js). Опыт коммерческой разработки SaaS-продуктов, CMS и real-time функциональности.'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:locale', content: 'ru_RU' },
  ],
})
</script>

<template>
  <TabBar />
  <ThemeToggle />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <PetProjectsSection />
    <ContactSection />
  </main>

  <AppFooter />
  <Lightbox />
</template>
