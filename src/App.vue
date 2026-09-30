<script setup>
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
