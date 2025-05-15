<script setup>
import { RouterView } from 'vue-router'
import Header from '@/composables/Header.vue'
import Footer from './composables/Footer.vue'
</script>

<template>
  <Header />
  <main class="pt-17">
    <RouterView />
  </main>
  <Footer />
</template>
