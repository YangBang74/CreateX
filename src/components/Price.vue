<script setup>
import { ref } from 'vue'

const year = ref(false)
</script>

<template>
  <section class="my-20">
    <div class="contain">
      <h1 class="font-black text-4xl text-center">Flexible pricing plans</h1>
      <div class="flex justify-center items-center my-12">
        <div class="border border-primary rounded-4xl font-bold">
          <button
            type="button"
            class="px-10 md:px-14 rounded-4xl py-3 relative cursor-pointer"
            :class="
              !year ? 'text-white bg-primary border border-primary' : 'text-primary bg-transparent'
            "
            @click="year = false"
          >
            Monthly
          </button>
          <button
            type="button"
            class="px-5 md:px-9 rounded-4xl py-3 cursor-pointer"
            :class="
              year ? 'text-white bg-primary border border-primary' : 'text-primary bg-transparent'
            "
            @click="year = true"
          >
            Yearly <span class="text-[12px]"> -12% Off</span>
          </button>
        </div>
      </div>
      <div class="flex justify-evenly flex-wrap gap-6">
        <div class="card shadow-sm hover:shadow-2xl transition border border-primary/40 rounded-sm">
          <div class="pt-10 px-6 pb-4 border-b">
            <p class="font-bold text-3xl text-center mb-3">Basic</p>
            <div class="text-center text-primary">
              <div class="text-4xl font-bold">
                <span class="text-5xl">
                  <span v-if="!year">$24</span>
                  <span v-if="year">$253</span>
                </span>
                <span class="text-xl align-top">
                  <span v-if="year">/year</span>
                  <span v-if="!year">/mon</span>
                </span>
              </div>
            </div>
          </div>
          <div class="mx-15 mb-10 my-6 content-center">
            <ul class="flex flex-col gap-3">
              <li class="list">Advanced Analytics</li>
              <li class="list">Change Management</li>
              <li class="list">Corporate Finance</li>
              <li class="list">One Way Link Building</li>
              <li class="list">Social Media Marketing</li>
              <li class="no text-gray-600">Strategy & Marketing</li>
              <li class="no text-gray-600 mb-7">Information Technology</li>
            </ul>
            <div class="text-center">
              <a href="/" class="px-8 py-2 border border-primary rounded-sm font-bold text-primary"
                >Choose plan</a
              >
            </div>
          </div>
        </div>
        <div class="card shadow-sm hover:shadow-2xl border border-primary/40 transition rounded-sm">
          <div class="pt-10 px-6 pb-4 border-b">
            <p class="font-bold text-3xl text-center mb-3">Optimal</p>
            <div class="text-center text-primary">
              <div class="text-4xl font-bold">
                <span class="text-5xl">
                  <span v-if="!year">$64</span>
                  <span v-if="year">$675</span>
                </span>
                <span class="text-xl align-top">
                  <span v-if="year">/year</span>
                  <span v-if="!year">/mon</span>
                </span>
              </div>
            </div>
          </div>
          <div class="mx-15 mb-10 my-6 content-center">
            <ul class="flex flex-col gap-3">
              <li class="list">Advanced Analytics</li>
              <li class="list">Change Management</li>
              <li class="list">Corporate Finance</li>
              <li class="list">One Way Link Building</li>
              <li class="list">Social Media Marketing</li>
              <li class="list">Strategy & Marketing</li>
              <li class="no text-gray-600 mb-7">Information Technology</li>
            </ul>
            <div class="text-center">
              <a href="/" class="px-8 py-2 border border-primary rounded-sm font-bold text-primary"
                >Choose plan</a
              >
            </div>
          </div>
        </div>
        <div class="card shadow-sm hover:shadow-2xl border border-primary/40 rounded-sm transition">
          <div class="pt-10 px-6 pb-4 border-b">
            <p class="font-bold text-3xl text-center mb-3">Premium</p>
            <div class="text-center text-primary">
              <div class="text-4xl font-bold">
                <span class="text-5xl">
                  <span v-if="!year">$98</span>s
                  <span v-if="year">$1034</span>
                </span>
                <span class="text-xl align-top">
                  <span v-if="year">/year</span>
                  <span v-if="!year">/mon</span>
                </span>
              </div>
            </div>
          </div>
          <div class="mx-15 mb-10 my-6 content-center">
            <ul class="flex flex-col gap-3">
              <li class="list">Advanced Analytics</li>
              <li class="list">Change Management</li>
              <li class="list">Corporate Finance</li>
              <li class="list">One Way Link Building</li>
              <li class="list">Social Media Marketing</li>
              <li class="list">Strategy & Marketing</li>
              <li class="list mb-7">Information Technology</li>
            </ul>
            <div class="text-center">
              <a href="/" class="px-8 py-2 border border-primary rounded-sm font-bold text-primary"
                >Choose plan</a
              >
            </div>
          </div>
        </div>
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

.card:hover {
  background-color: #1e212c;
  color: #fff;
  .text-primary {
    color: #03cea4;
  }
}

.list::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url('/ok.svg') no-repeat center 4px / contain;
  margin-right: 8px;
}

.no::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url('/no.svg') no-repeat center 1px / contain;
  margin-right: 8px;
}
</style>
