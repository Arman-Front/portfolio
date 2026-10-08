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
import ImageLightbox from './components/ImageLightbox.vue'
import { SITE_URL, site } from './data/site.js'
import { contactByKey, contacts } from './data/contacts.js'

const { title, description, ogImage } = site

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.jobTitle,
  url: SITE_URL,
  email: contactByKey.email.label,
  sameAs: contacts.filter((c) => c.href.startsWith('http')).map((c) => c.href),
  knowsAbout: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'Frontend'],
}

useHead({
  title,
  link: [{ rel: 'canonical', href: SITE_URL }],
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'profile' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:url', content: SITE_URL },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(person) }],
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
  <ImageLightbox />
</template>
