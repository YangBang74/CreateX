<script setup>


import CircularProgress from '@/components/CirculeProgress.vue'
</script>
<template>
  <section class="my-20">
    <div class="contain">
      <div class="flex justify-center items-center gap-12 flex-wrap">
        <div class="text-center">
          <CircularProgress
            progress="87"
            string="10"
            :size="148"
            color="#F89828"
            bg-color="#F8982890"
            :fontSize="32"
          />
          <p class="text-gray-800 mt-5">Years of experience</p>
        </div>
        <div class="text-center">
          <CircularProgress
            progress="75"
            string="45"
            :size="148"
            color="#F52F6E"
            bg-color="#F52F6E90"
            :fontSize="32"
          />
          <p class="text-gray-800 mt-5">Awards</p>
        </div>
        <div class="text-center">
          <CircularProgress
            progress="83"
            string="540+"
            :size="148"
            color="#5A87FC"
            bg-color="#5A87FC90"
            :fontSize="32"
          />
          <p class="text-gray-800 mt-5">Projects</p>
        </div>
        <div class="text-center">
          <CircularProgress
            progress="100"
            string="100%"
            :size="148"
            color="#03CEA4"
            bg-color="#03CEA490"
            :fontSize="32"
          />
          <p class="text-gray-800 mt-5">Happy clients</p>
        </div>
      </div>
    </div>
  </section>
</template>
