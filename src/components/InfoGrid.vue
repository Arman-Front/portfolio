<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="integr-grid">
    <div v-for="item in items" :key="item.title" class="integr-item">
      {{ item.title }}<span>{{ item.desc }}</span>
    </div>
  </div>
</template>
