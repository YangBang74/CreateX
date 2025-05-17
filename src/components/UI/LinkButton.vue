<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  link: { type: String, default: '/' },
  text: { type: String, default: 'submit' },
  target: { type: String, default: '_blank' },
})
</script>

<template>
  <a
    :href="link"
    :target="target"
    class="px-12 py-3 bg-primary rounded-sm text-white cursor-pointer"
  >
    {{ text }}
  </a>
</template>
