<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import CirculeProgress from './CirculeProgress.vue'
import LinkButton from './LinkButton.vue'

const glide = ref(null)
let glideInstance = null

onMounted(() => {
  glideInstance = new Glide(glide.value, {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 20,
    autoplay: 2000,
  })
  glideInstance.mount()
})

onBeforeUnmount(() => {
  if (glideInstance) {
    glideInstance.destroy()
  }
})

const info = [
  {
    title: 'Charity organisation',
    text: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
    img: '/home/client-logo-1.png',
    c1Color: '#F89828',
    c1Bg: '#F8982890',
    c1Title: '90%',
    c1Text: 'Engagment',
    c1Progress: 90,
    c2Color: '#03CEA4',
    c2Bg: '#03CEA490',
    c2Title: '100%',
    c2Progress: 100,
    c2Text: 'Deliverabilty',
  },
  {
    title: 'Oil and natural resources',
    text: 'With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate.',
    img: '/home/client-logo-2.png',
    c1Color: '#5A87FC',
    c1Bg: '#5A87FC90',
    c1Title: '200%',
    c1Text: 'Growth in sales',
    c1Progress: 100,
    c2Title: '1,400',
    c2Text: 'Target investors',
  },
  {
    title: 'Personal care',
    text: "We helped Sunset company break through a noisy industry and better understand their buyer's journey.",
    img: '/home/client-logo-3.png',
    c1Color: '#F52F6E',
    c1Bg: '#F52F6E90',
    c1Title: '70%',
    c1Text: 'Open Rate',
    c1Progress: 70,
    c2Color: '#F89828',
    c2Bg: '#F8982890',
    c2Title: '200%',
    c2Progress: 100,
    c2Text: 'Growth in sales',
  },
  {
    title: 'Charity organisation',
    text: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
    img: '/home/client-logo-1.png',
    c1Color: '#F89828',
    c1Bg: '#F8982890',
    c1Title: '90%',
    c1Text: 'Engagment',
    c1Progress: 90,
    c2Color: '#03CEA4',
    c2Bg: '#03CEA490',
    c2Title: '100%',
    c2Progress: 100,
    c2Text: 'Deliverabilty',
  },
  {
    title: 'Oil and natural resources',
    text: 'With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate.',
    img: '/home/client-logo-2.png',
    c1Color: '#5A87FC',
    c1Bg: '#5A87FC90',
    c1Title: '200%',
    c1Text: 'Growth in sales',
    c1Progress: 100,
    c2Title: '1,400',
    c2Text: 'Target investors',
  },
  {
    title: 'Personal care',
    text: "We helped Sunset company break through a noisy industry and better understand their buyer's journey.",
    img: '/home/client-logo-3.png',
    c1Color: '#F52F6E',
    c1Bg: '#F52F6E90',
    c1Title: '70%',
    c1Text: 'Open Rate',
    c1Progress: 70,
    c2Color: '#F89828',
    c2Bg: '#F8982890',
    c2Title: '200%',
    c2Progress: 100,
    c2Text: 'Growth in sales',
  },
]
</script>

<template>
  <section class="my-20">
    <div class="contain">
      <h1 class="font-black text-4xl">Read our clients' case studios</h1>
      <div class="glide relative" ref="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              class="glide__slide shadow-lg border border-gray-300 rounded-sm hover:bg-gray-900 hover:text-white transition my-10"
              v-for="card in info"
              :key="card.key"
            >
              <div class="px-10 pt-10 pb-4 border-b">
                <img :src="card.img" :alt="card.title" />
                <h2 class="text-sm">{{ card.title }}</h2>
              </div>
              <div class="px-10 pt-4 pb-10 flex flex-col justify-between h-55">
                <p class="text-gray-700">{{ card.text }}</p>
                <div class="flex gap-3 justify-between">
                  <div class="flex gap-3">
                    <div>
                      <CirculeProgress
                        :size="40"
                        stroke="4"
                        :progress="card.c1Progress"
                        :bgColor="card.c1BgColor"
                        :color="card.c1Color"
                        :showText="false"
                      />
                    </div>
                    <div>
                      <p class="text-xl font-bold">{{ card.c1Title }}</p>
                      <p class="text-[12px]">{{ card.c1Text }}</p>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <div>
                      <CirculeProgress
                        v-if="card.c2Progress"
                        :size="40"
                        stroke="4"
                        :progress="card.c2Progress"
                        :bgColor="card.c2BgColor"
                        :color="card.c2Color"
                        :showText="false"
                      />
                    </div>
                    <div>
                      <p class="text-xl font-bold">{{ card.c2Title }}</p>
                      <p class="text-[12px]">{{ card.c2Text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div data-glide-el="controls" class="absolute top-[-20px] right-0 flex">
          <button
            data-glide-dir="<"
            class="hover-bg-primary hover:text-white h-12 w-12 rounded-full justify-center flex items-center"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            data-glide-dir=">"
            class="hover-bg-primary hover:text-white h-12 w-12 rounded-full justify-center flex items-center"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center gap-10">
        <span class="font-bold text-2xl">Explore more case studies</span>
        <LinkButton text="View all case studies" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.border-b {
  border-bottom: 1px solid;
  border-image-source: linear-gradient(
    270.01deg,
    rgba(218, 219, 221, 0) 0%,
    rgba(218, 219, 221, 0.5) 12.33%,
    #dadbdd 51.91%,
    rgba(218, 219, 221, 0.5) 87.85%,
    rgba(218, 219, 221, 0) 100%
  );
  border-image-slice: 1;
}
</style>
