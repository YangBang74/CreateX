<script setup>
import Coments from '@/components/Coments.vue'
import Blogs from '@/components/Blogs.vue'
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
          Case Studies
        </p>
      </div>
      <h1 class="xl:text-7xl text-center lg:text-6xl text-5xl text-white font-black mt-7 mb-4">
        Case Studies
      </h1>
      <p class="text-center text-white max-w-200 mx-auto text-xl">
        We help our clients get better results with our creative and data-driven approach to online
        advertising. View our case study portfolio and learn more about the process that sets us
        apart.
      </p>
      <form class="justify-center items-center gap-8 my-14 sm:w-1/2 mx-auto">
        <label for="mail" class="mt-10 text-white">Email</label>
        <div class="flex flex-row mt-3">
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Your working email"
            class="py-3 px-4 rounded-l-sm w-full bg-white/12 border border-white/20 text-white"
          />
          <button
            type="submit"
            class="px-4 py-3 bg-primary w-1/2 border border-primary rounded-r-sm text-white"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
  <Coments />
  <Blogs />
</template>
<style scoped>
.hero {
  background: url('/Case/background.png') no-repeat center center / cover;
}
</style>
