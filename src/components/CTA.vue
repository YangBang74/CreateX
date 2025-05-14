<script setup>
import { ref } from 'vue'

const checked = ref(false)

const toggle = () => {
  checked.value = !checked.value
}
</script>

<template>
  <section class="my-20">
    <div class="contain">
      <div class="flex items-center justify-evenly py-20 gap-10">
        <div class="md:block lg:w-1/2 w-1/3 hidden">
          <img src="/form/illustration.png" alt="Form illustration" class="w-full lg:max-w-1/2" />
        </div>
        <form class="md:w-1/2 w-full text-white block justif-start">
          <h1 class="font-black text-5xl mb-10">Get a Free SEO Analysis!</h1>
          <div class="flex lg:flex-row flex-col justify-between gap-x-2.5 lg:gap-x-7.5">
            <div class="flex flex-col gap-y-2 w-full">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                class="py-3 px-4 bg-white/12 rounded-sm border border-white/20"
              />
            </div>
            <div class="flex flex-col gap-y-2 w-full lg:mt-0 mt-6">
              <label for="mail">Email</label>
              <input
                type="mail"
                name="mail"
                id="mail"
                placeholder="Your mail"
                class="py-3 px-4 bg-white/12 rounded-sm border border-white/20"
              />
            </div>
          </div>
          <div class="flex flex-col gap-y-2 w-full mt-6">
            <label for="web">Your website URL</label>
            <input
              type="url"
              name="web"
              id="web"
              placeholder="http://yoursite.com"
              class="py-3 px-4 bg-white/12 rounded-sm border border-white/20"
            />
          </div>
          <div
            class="flex justify-between lg:items-center items-start gap-10 mt-9 lg:flex-row flex-col"
          >
            <div class="items-start flex gap-3 lg:mt-7">
              <div class="h-5 cursor-pointer min-w-5" @click="toggle">
                <input type="checkbox" id="check" v-model="checked" class="hidden" />
                <div
                  class="w-full mt-1 h-full flex items-center justify-center border-1 rounded-sm transition-colors duration-200"
                  :class="checked ? 'bg-[#7772f1] border-[#7772f1]' : 'bg-white border-[#7772f1]'"
                >
                  <svg
                    v-if="checked"
                    width="12"
                    height="12"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-0.5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.82771 0.195262C10.0574 0.455612 10.0574 0.877722 9.82771 1.13807L3.94536 7.80474C3.71564 8.06509 3.34319 8.06509 3.11347 7.80474L0.17229 4.4714C-0.05743 4.21105 -0.05743 3.78894 0.17229 3.5286C0.40201 3.26825 0.77446 3.26825 1.00418 3.5286L3.52941 6.39052L8.99582 0.195262C9.22554 -0.0650874 9.59799 -0.0650874 9.82771 0.195262Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <label for="check"> I agree to receive communications from Createx SEO Agency </label>
            </div>
            <button
              type="button"
              class="px-12 py-3 bg-primary text-white whitespace-nowrap rounded-sm mt-7"
            >
              Get a free analysis
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  background: url('/form/background.png') no-repeat center center / cover;
}
</style>
