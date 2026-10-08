<script setup>
import MediaRow from './MediaRow.vue'
import { linkAttrs } from '../data/contacts.js'

defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <div class="commit">
    <div class="hash">{{ item.hash }}</div>
    <div class="commit-body">
      <h3>
        {{ item.title }}<span v-if="item.badge" class="status-badge">{{ item.badge }}</span>
      </h3>
      <div v-if="item.metaHtml" class="commit-meta" v-html="item.metaHtml"></div>
      <div v-else class="commit-meta">{{ item.meta }}</div>
      <div v-if="item.link" class="proj-link">
        <a :href="item.link.href" v-bind="linkAttrs(item.link.href)">{{ item.link.label }}</a>
      </div>
      <p v-if="item.desc">{{ item.desc }}</p>
      <div v-if="item.stack" class="stack-line">{{ item.stack }}</div>
      <MediaRow :items="item.media" />
    </div>
  </div>
</template>
