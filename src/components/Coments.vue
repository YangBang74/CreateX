<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

const glide = ref(null)
let glideInstance = null

onMounted(() => {
  glideInstance = new Glide(glide.value, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 20,
    autoplay: 5000,
  })
  glideInstance.mount()
})

onBeforeUnmount(() => {
  if (glideInstance) {
    glideInstance.destroy()
  }
})

const coments = [
  {
    img: '/user.png',
    name: 'Courtney Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
  },
  {
    img: '/user.png',
    name: 'Courtney Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
  },
  {
    img: '/user.png',
    name: 'Courtney Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
  },
  {
    img: '/user.png',
    name: 'Courtney Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
  },
  {
    img: '/user.png',
    name: 'Courtney Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
  },
]
</script>
<template>
  <section class="my-20">
    <div class="contain">
      <h1 class="font-black text-4xl text-center">What our clients say</h1>
      <div class="glide relative mt-10" ref="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide" v-for="com in coments" :key="com.key">
              <div
                class="py-16 md:px-20 px-12 flex flex-col max-w-4xl mx-auto justify-center rounded-xl border border-gray-200 shadow-4xl"
              >
                <p class="text-xl max-w-3xl relative">
                  {{ com.text }}
                  <svg
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute top-2 left-[-40px] z-10 md:block hidden"
                  >
                    <path
                      d="M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z"
                      fill="#7772F1"
                    />
                    <path
                      d="M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z"
                      fill="#7772F1"
                    />
                  </svg>
                </p>
                <div class="flex items-center gap-2.5 mt-6">
                  <img class="w-10" :src="com.img" :alt="com.name" />
                  <p class="font-bold">{{ com.name }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div
          data-glide-el="controls"
          class="absolute top-1/2 w-full right-0 md:flex hidden justify-between"
        >
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
    </div>
  </section>
</template>
