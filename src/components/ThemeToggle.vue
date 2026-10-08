<script setup>
import { useTheme } from '../composables/useTheme.js'

const { isLight, toggleTheme } = useTheme()
</script>

<template>
  <button
    id="themeToggle"
    class="theme-switch"
    type="button"
    aria-label="Светлая тема"
    :aria-pressed="isLight"
    @click="toggleTheme"
  >
    <span class="knob" aria-hidden="true">
      <svg
        class="icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path
          d="M12 3v2.2M12 18.8V21M4.5 4.5l1.6 1.6M17.9 17.9l1.6 1.6M3 12h2.2M18.8 12H21M4.5 19.5l1.6-1.6M17.9 6.1l1.6-1.6"
        />
      </svg>
      <svg
        class="icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
      </svg>
    </span>
  </button>
</template>
