<script setup>
import { RouterLink } from 'vue-router'

import { ref } from 'vue'
const activeQuestIds = ref([])

const question = [
  {
    title: 'Digital Marketing Strategist',
    text: 'Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu. <br /> Requirements: <br /> Vitae luctus et arcu vitae eu tellus orci. <br /> Vel morbi nunc ullamcorper nisl, quis varius ultricies blandit. <br /> Purus cursus nascetur leo diam. <br /> Nascetur id turpis facilisis faucibus vel, iaculis etiam. <br /> Responsibilities: <br />Dui, lectus at dui magna vitae vitae egestas sed. <br /> Vulputate placerat amet pulvinar lorem nisl. <br /> Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed. <br/> Etiam duis lobortis in fames ultrices commodo nibh.',
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
  <section class="hero py-20">
    <div class="contain">
      <div class="flex items-center justify-center gap-2">
        <a href="/" class="text-white/60 hover:text-white">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.52347 3.28077C8.18117 3.18809 7.82039 3.18809 7.47809 3.28077C7.12173 3.37726 6.77613 3.63005 5.7906 4.39657L4.05726 5.74472C3.42297 6.23806 3.21001 6.41103 3.05947 6.61456C2.91481 6.81015 2.80705 7.03049 2.74148 7.26476C2.67324 7.50853 2.66745 7.78283 2.66745 8.58639V12.9996C2.66745 13.5133 2.67468 13.6224 2.69615 13.6932C2.76079 13.9062 2.92752 14.073 3.14059 14.1376C3.21137 14.1591 3.32042 14.1663 3.83411 14.1663H4.25078C4.33608 14.1663 4.3546 14.1661 4.36683 14.1655C4.7093 14.1487 4.98315 13.8748 4.99998 13.5323C5.00058 13.5201 5.00078 13.5016 5.00078 13.4163V11.4996C5.00078 9.84278 6.34393 8.49963 8.00078 8.49963C9.65763 8.49963 11.0008 9.84278 11.0008 11.4996V13.4163C11.0008 13.5016 11.001 13.5201 11.0016 13.5323C11.0184 13.8748 11.2923 14.1487 11.6347 14.1655C11.647 14.1661 11.6655 14.1663 11.7508 14.1663H12.1674C12.6811 14.1663 12.7902 14.1591 12.861 14.1376C13.074 14.073 13.2408 13.9062 13.3054 13.6932C13.3269 13.6224 13.3341 13.5133 13.3341 12.9996V8.58639C13.3341 7.78283 13.3283 7.50853 13.2601 7.26476C13.1945 7.03049 13.0867 6.81015 12.9421 6.61456C12.7916 6.41103 12.5786 6.23806 11.9443 5.74472L10.211 4.39657C9.22543 3.63005 8.87984 3.37726 8.52347 3.28077ZM7.12962 1.99378C7.70013 1.83931 8.30144 1.83931 8.87194 1.99378C9.52079 2.16946 10.0901 2.61272 10.9161 3.25581C10.9534 3.28484 10.9912 3.31427 11.0296 3.3441L12.7629 4.69225C12.7868 4.71089 12.8105 4.72926 12.8338 4.74739C13.37 5.16417 13.741 5.45248 14.0141 5.8217C14.2552 6.14768 14.4348 6.51491 14.5441 6.90536C14.6679 7.34759 14.6677 7.81741 14.6675 8.49656C14.6675 8.5261 14.6674 8.55604 14.6674 8.58639V12.9996C14.6674 13.0279 14.6675 13.0558 14.6675 13.0835C14.668 13.4644 14.6684 13.7933 14.5813 14.0802C14.3874 14.7194 13.8872 15.2196 13.248 15.4135C12.9611 15.5005 12.6322 15.5002 12.2513 15.4997C12.2236 15.4997 12.1957 15.4996 12.1674 15.4996L11.7368 15.4996C11.6734 15.4996 11.6189 15.4997 11.5693 15.4972C10.5419 15.4468 9.72033 14.6252 9.66986 13.5978C9.66742 13.5482 9.66743 13.4937 9.66745 13.4303L9.66745 11.4996C9.66745 10.5792 8.92126 9.83297 8.00078 9.83297C7.08031 9.83297 6.33411 10.5792 6.33411 11.4996L6.33412 13.4303C6.33413 13.4937 6.33414 13.5482 6.33171 13.5978C6.28123 14.6252 5.45966 15.4468 4.43225 15.4972C4.38269 15.4997 4.32818 15.4996 4.26475 15.4996L3.83411 15.4996C3.80588 15.4996 3.77792 15.4997 3.75023 15.4997C3.36938 15.5002 3.04044 15.5005 2.75355 15.4135C2.11434 15.2196 1.61413 14.7194 1.42023 14.0802C1.3332 13.7933 1.3336 13.4644 1.33405 13.0835C1.33408 13.0558 1.33411 13.0279 1.33411 12.9996V8.58639C1.33411 8.55604 1.3341 8.5261 1.33409 8.49655C1.33387 7.81741 1.33371 7.34759 1.45749 6.90536C1.56678 6.51491 1.74639 6.14768 1.98749 5.8217C2.26057 5.45248 2.63153 5.16416 3.16775 4.74739C3.19108 4.72926 3.21472 4.71089 3.23867 4.69225L4.97201 3.3441C5.01037 3.31427 5.04817 3.28483 5.08545 3.25581C5.91144 2.61272 6.48077 2.16946 7.12962 1.99378Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <p class="flex text-white items-center gap-1">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.52925 3.36225C5.7896 3.1019 6.21171 3.1019 6.47206 3.36225L11.1387 8.02892C11.3991 8.28927 11.3991 8.71138 11.1387 8.97173L6.47206 13.6384C6.21171 13.8987 5.7896 13.8987 5.52925 13.6384C5.2689 13.378 5.2689 12.9559 5.52925 12.6956L9.72451 8.50033L5.52925 4.30506C5.2689 4.04471 5.2689 3.6226 5.52925 3.36225Z"
                fill="white"
              />
            </g>
          </svg>
          <RouterLink to="/about-us" class="text-white/60 hover:text-white">About us</RouterLink>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.52925 3.36225C5.7896 3.1019 6.21171 3.1019 6.47206 3.36225L11.1387 8.02892C11.3991 8.28927 11.3991 8.71138 11.1387 8.97173L6.47206 13.6384C6.21171 13.8987 5.7896 13.8987 5.52925 13.6384C5.2689 13.378 5.2689 12.9559 5.52925 12.6956L9.72451 8.50033L5.52925 4.30506C5.2689 4.04471 5.2689 3.6226 5.52925 3.36225Z"
                fill="white"
              />
            </g>
          </svg>
          <RouterLink to="/careers">Careers at Createx Agency</RouterLink>
        </p>
      </div>
      <h1 class="xl:text-7xl text-center lg:text-6xl text-5xl text-white font-black mt-7 mb-4">
        Careers at Createx Agency
      </h1>
      <p class="text-center text-white max-w-200 mx-auto text-xl">
        We’re looking for extraordinary talents! If you're passionate about SEO and digital
        marketing, we want to hear from you.
      </p>
      <div
        class="flex sm:flex-row flex-col mx-auto sm:gap-0 gap-10 w-full justify-center mt-20 text-white font-bold"
      >
        <div class="relative flex items-center gap-3 border-gradient-r pr-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.5384 17.612C36.301 19.2565 35.7384 20.8196 34.9047 22.2569C34.9672 22.6128 34.9992 22.9725 34.9992 23.3338C34.9992 24.5885 34.6357 25.7893 33.9623 26.8803C33.6261 27.4249 33.5396 28.063 33.5063 28.4846C33.4682 28.9677 33.481 29.4964 33.5155 30.0043C33.5542 30.5741 33.6243 31.1723 33.7045 31.7366C33.054 31.547 32.3489 31.3564 31.676 31.2046C31.1163 31.0784 30.5436 30.9708 30.0249 30.9172C29.5724 30.8704 28.9185 30.8342 28.3338 31.0233C27.0553 31.4366 25.6485 31.6671 24.1659 31.6671C22.4027 31.6671 20.7834 31.3541 19.364 30.8104C19.0226 30.8259 18.6787 30.8338 18.3325 30.8338C16.3248 30.8338 14.3925 30.5697 12.5846 30.0818C15.2129 33.1215 19.5457 35.0004 24.1659 35.0004C25.9708 35.0004 27.7031 34.7233 29.2996 34.2141C29.3023 34.2142 29.3074 34.2141 29.315 34.214C29.356 34.2132 29.4698 34.2109 29.6824 34.2329C30.0167 34.2674 30.4466 34.3444 30.9425 34.4563C31.9297 34.679 33.0391 35.0076 33.9038 35.2821C35.7374 35.8641 37.514 34.264 37.1863 32.4034C37.0452 31.6026 36.8987 30.6252 36.8412 29.7785C36.8123 29.3527 36.8091 29.0033 36.8293 28.7468C36.8377 28.6406 36.8485 28.5739 36.8553 28.5385C37.793 26.9852 38.3326 25.2167 38.3326 23.3338C38.3326 21.2112 37.6733 19.2729 36.5384 17.612Z"
              fill="#7772F1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.32773 9.49661C7.08113 11.2146 5.83266 13.4698 5.83266 15.833C5.83266 17.0114 6.13943 18.1463 6.71496 19.2017C6.93417 19.6037 6.99636 20.0183 7.0186 20.2991C7.04285 20.6051 7.03076 20.9197 7.00414 21.2139C6.95085 21.8028 6.82372 22.4701 6.67124 23.1274C6.49287 23.8962 6.26431 24.7162 6.03239 25.486C6.91281 25.166 7.87508 24.8381 8.78733 24.5719C9.52461 24.3568 10.2692 24.1702 10.9318 24.0654C11.5027 23.9752 12.3311 23.8864 13.0443 24.1332C14.6448 24.6869 16.4353 24.9997 18.3327 24.9997C21.9113 24.9997 25.0895 23.8886 27.3376 22.1694C29.5842 20.4514 30.8327 18.1962 30.8327 15.833C30.8327 13.4698 29.5842 11.2146 27.3376 9.49661C25.0895 7.77745 21.9113 6.66634 18.3327 6.66634C14.754 6.66634 11.5759 7.77745 9.32773 9.49661ZM7.30289 6.84875C10.1821 4.64702 14.0872 3.33301 18.3327 3.33301C22.5781 3.33301 26.4832 4.64702 29.3624 6.84875C32.2432 9.05167 34.166 12.2131 34.166 15.833C34.166 19.4529 32.2432 22.6144 29.3624 24.8173C26.4832 27.019 22.5781 28.333 18.3327 28.333C16.0942 28.333 13.9561 27.9681 12.0148 27.3041C12.0128 27.3095 11.8554 27.2941 11.4525 27.3578C10.988 27.4313 10.3952 27.5751 9.72089 27.7719C8.37845 28.1635 6.87087 28.7176 5.72255 29.1645C3.73317 29.9387 1.70658 28.0281 2.37685 25.9929C2.7321 24.9142 3.15108 23.5511 3.42414 22.3741C3.5617 21.7812 3.65096 21.2827 3.68437 20.9135C3.69596 20.7853 3.69896 20.6919 3.69829 20.6288C2.93115 19.1629 2.49932 17.5417 2.49932 15.833C2.49932 12.2131 4.42216 9.05167 7.30289 6.84875Z"
              fill="#7772F1"
            />
          </svg>
          <div>
            <p class="text-sm text-white/60">Talk to us</p>
            <a href="mailto:hello@createx.com">hello@createx.com</a>
          </div>
        </div>
        <div class="relative flex items-center gap-3 md:pl-10 pl-0">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.1673 4.86947C12.7866 4.86947 11.6673 5.98875 11.6673 7.36947V32.6299C11.6673 34.0106 12.7866 35.1299 14.1673 35.1299H25.834C27.2147 35.1299 28.334 34.0106 28.334 32.6299V7.36947C28.334 5.98875 27.2147 4.86947 25.834 4.86947H25.695L25.2891 5.84355C25.0303 6.46458 24.4234 6.86909 23.7507 6.86909H16.2507C15.5779 6.86909 14.971 6.46458 14.7122 5.84355L14.3063 4.86947H14.1673ZM8.33398 7.36947C8.33398 4.1478 10.9457 1.53613 14.1673 1.53613H25.834C29.0556 1.53613 31.6673 4.1478 31.6673 7.36947V32.6299C31.6673 35.8515 29.0556 38.4632 25.834 38.4632H14.1673C10.9457 38.4632 8.33398 35.8515 8.33398 32.6299V7.36947Z"
              fill="#7772F1"
            />
          </svg>
          <div>
            <p class="text-sm text-white/60">Call us</p>
            <a href="tel:+4055550128">(405) 555-0128</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 quest">
    <div class="contain">
      <div class="flex justify-between items-start gap-10 md:flex-row flex-col-reverse">
        <div class="w-full flex flex-col mb-6">
          <div v-for="(quest, index) in question" :key="index" class="my-2.5">
            <h3
              @click="toggleQuest(index)"
              class="flex items-center cursor-pointer justify-between font-semibold text-xl text-gray-800"
            >
              <div class="flex items-center">
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
              </div>
              <a
                href="/"
                class="px-13 py-2 hover-bg-primary transition text-base font-normal whitespace-nowrap text-primary border border-primary rounded-sm"
                >Apply now</a
              >
            </h3>
            <div
              class="ml-8.5 overflow-hidden flex h-full transition delay-70"
              :style="{
                maxHeight: isActive(index) ? '500px' : '0px',
                opacity: isActive(index) ? '1' : '0',
              }"
            >
              <p class="text-gray-700 rounded-md mt-2 h-full max-w-200" v-html="quest.text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="my-20">
    <div class="contain">
      <div class="flex md:flex-row flex-col items-start">
        <div>
          <h1 class="font-black text-4xl">Didn’t find what you were looking for?</h1>
          <p class="my-10 text-xl text-gray-800">
            Send your CV or subscribe to our newsletter to receive information about new vacancies.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  background: url('/careers/careers.png') no-repeat center center / cover;
}

.border-gradient-r::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(218, 219, 221, 0) 0%,
    rgba(218, 219, 221, 0.5) 12.33%,
    #dadbdd 51.91%,
    rgba(218, 219, 221, 0.5) 87.85%,
    rgba(218, 219, 221, 0) 100%
  );
}

.quest {
  background: url('/careers/background.png') no-repeat center center / cover;
}

@media (max-width: 640px) {
  .border-gradient-r::after {
    width: 0;
  }
}
</style>
