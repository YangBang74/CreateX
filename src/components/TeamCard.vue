<script setup>
import { defineProps } from 'vue'
import Facebook from '@/components/Icons/Facebook.vue'
import Instagram from '@/components/Icons/Instagram.vue'
import Linkedin from '@/components/Icons/Linkedin.vue'

const props = defineProps({
  img: { type: String },
  name: { type: String },
  job: { type: String },
})
</script>

<template>
  <div class="w-71 text-center">
    <div class="relative">
      <img :src="img" class="w-71 h-85 object-cover card-img" :alt="name" />
      <nav
        class="card-links flex items-end justify-end gap-3 h-full w-full z-10 absolute top-0 transition opacity-0 hover:opacity-100 text-white/60 text-end p-5"
      >
        <a href="#" class="hover:text-white transition">
          <Facebook />
        </a>
        <a href="#" class="hover:text-white transition">
          <Instagram />
        </a>
        <a href="#" class="hover:text-white transition">
          <Linkedin />
        </a>
      </nav>
    </div>
    <h3 class="font-bold text-xl mt-3 mb-px">{{ name }}</h3>
    <p class="text-gray-700">{{ job }}</p>
  </div>
</template>
<style scoped>
.card-links {
  background: linear-gradient(
    180deg,
    rgba(30, 33, 44, 0) 43.9%,
    rgba(30, 33, 44, 0.03) 55.21%,
    rgba(30, 33, 44, 0.33) 68.73%,
    rgba(30, 33, 44, 0.56) 76.17%,
    rgba(30, 33, 44, 0.768225) 83.75%,
    rgba(30, 33, 44, 0.92) 91.49%,
    #1e212c 100%
  );
}
</style>
