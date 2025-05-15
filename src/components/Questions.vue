<script setup>
import { ref } from 'vue'
const activeQuestIds = ref([])

const question = [
  {
    title: 'Aliquet lectus urna viverra in odio?',
    text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
  },
  {
    title: 'Orci commodo, viverra orci mollis ut euismod?',
    text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
  },
  {
    title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?',
    text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
  },
  {
    title: 'In id dolor quis nunc, urna hendrerit pharetra?',
    text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
  },
]

function toggleQuest(index) {
  const idx = activeQuestIds.value.indexOf(index)
  if (idx !== -1) {
    activeQuestIds.value.splice(idx, 1)
  } else {
    activeQuestIds.value.push(index)
  }
}

function isActive(index) {
  return activeQuestIds.value.includes(index)
}
</script>

<template>
  <section class="my-20">
    <div class="contain">
      <div class="flex justify-between items-start gap-10 md:flex-row flex-col-reverse">
        <div class="md:w-1/2 w-full flex flex-col mb-6">
          <h1 class="font-black text-5xl mb-10">Frequently Asked Questions</h1>
          <div v-for="(quest, index) in question" :key="index" class="my-2.5">
            <h3
              @click="toggleQuest(index)"
              class="flex items-center cursor-pointer font-semibold text-xl text-gray-800"
            >
              <div class="h-5 w-5 relative mt-5 mr-3.5">
                <span
                  class="h-0.5 bg-primary w-5 block absolute transition"
                  :style="{ rotate: isActive(index) ? '180deg' : '90deg' }"
                ></span>
                <span
                  class="h-0.5 bg-primary w-5 block transition"
                  :style="{ opacity: isActive(index) ? '0' : '1' }"
                ></span>
              </div>
              <span>{{ quest.title }}</span>
            </h3>
            <div
              class="ml-8.5 overflow-hidden flex h-full transition delay-70"
              :style="{
                maxHeight: isActive(index) ? '500px' : '0px',
                opacity: isActive(index) ? '1' : '0',
              }"
            >
              <p class="text-gray-700 bg-gray-50 rounded-md mt-2 h-full">
                {{ quest.text }}
              </p>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 w-full mt-5">
          <img src="/home/Question.png" alt="question illustration" class="w-full max-w-96" />
        </div>
      </div>
    </div>
  </section>
</template>

