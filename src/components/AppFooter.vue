<script setup>
import { contactByKey, linkAttrs } from '../data/contacts.js'

const telegram = contactByKey.telegram
</script>

<template>
  <footer>
    <span>Арман Хачатрян · Frontend-разработчик</span>
    <a
      class="footer-tg"
      :href="telegram.href"
      aria-label="Telegram"
      v-bind="linkAttrs(telegram.href)"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M21.05 3.77 2.9 10.82c-1.23.5-1.22 1.19-.22 1.5l4.65 1.45 1.8 5.5c.22.6.37.84.76.84.33 0 .48-.15.67-.34l1.6-1.56 4.68 3.45c.86.48 1.48.23 1.7-.8L22.83 5.1c.32-1.27-.48-1.85-1.78-1.33Zm-2.37 3.26-6.9 6.25-.28 3-1.34-4.02 8.02-5.68c.38-.26.73-.12.44.17Z"
        />
      </svg>
    </a>
  </footer>
</template>
