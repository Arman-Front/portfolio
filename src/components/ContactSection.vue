<script setup>
import { contacts, linkAttrs } from '../data/contacts.js'
</script>

<template>
  <section id="contact">
    <h2><span class="path">~/</span><span class="fname">contact.json</span></h2>
    <div class="json">
      {<br />
      <template v-for="c in contacts" :key="c.key">
        &nbsp;&nbsp;<span class="k">"{{ c.key }}"</span>:
        <a class="v" :href="c.href" v-bind="linkAttrs(c.href)">"{{ c.label }}"</a>,<br />
      </template>
      &nbsp;&nbsp;<span class="k">"status"</span>: <span class="v">"open to work"</span>,<br />
      }
    </div>
  </section>
</template>
