<script setup>
import { useHead } from '@unhead/vue'
import TabBar from './components/TabBar.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import PetProjectsSection from './components/PetProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import Lightbox from './components/Lightbox.vue'

const title = 'Арман Хачатрян — Frontend-разработчик'
const description = 'Разработка frontend на Vue.js и Nuxt.js: SaaS-продукты, веб-приложения, real-time и интеграции. Арман Хачатрян, frontend-разработчик.'

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
    <ServicesSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <PetProjectsSection />
    <ContactSection />
  </main>

  <AppFooter />
  <Lightbox />
</template>
