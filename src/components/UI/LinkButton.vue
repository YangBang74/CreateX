<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  link: { type: String, default: '/' },
  text: { type: String, default: 'submit' },
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="px-12 py-3 bg-primary rounded-sm text-white cursor-pointer"
  >
    {{ text }}
  </a>
</template>
