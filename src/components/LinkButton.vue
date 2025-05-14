<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  link: { type: String, default: '/' },
  text: { type: String, default: 'submit' },
})
</script>

<template>
  <a :src="link" class="px-12 py-3 bg-primary rounded-sm text-white"> {{ text }} </a>
</template>
