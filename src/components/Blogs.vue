<script setup>
import { blogs } from '@/dates/blogs'
import LinkButton from './UI/LinkButton.vue'

const blog = blogs
console.log(blog)
</script>
<template>
  <section class="my-20">
    <div class="contain">
      <div class="flex md:flex-row flex-col justify-between gap-10">
        <div class="mb-10 w-1/2">
          <h1 class="font-black text-4xl">Last news</h1>
          <p class="text-xl mt-10 mb-14">
            Check more posts in our blog for featured news and advertising insights
          </p>
          <LinkButton text="Go to blogs" link="/" />
        </div>
        <div class="flex sm:flex-row flex-col gap-5 w-full">
          <div v-for="blogs in blog.slice(0, 2)" class="flex flex-col justify-between min-h-115">
            <div>
              <div>
                <img
                  :src="blogs.img"
                  :alt="blogs.title"
                  class="w-full object-cover h-60 rounded-lg"
                />
              </div>
              <div class="text-gray-700 flex items-center gap-2.5 text-sm my-1">
                <span>{{ blogs.genre }}</span>
                <span>|</span>
                <span class="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66699 3.83268C8.66699 3.46449 8.36851 3.16602 8.00033 3.16602C7.63213 3.16602 7.33366 3.46449 7.33366 3.83268V7.49935C7.33366 7.67616 7.4039 7.84573 7.52892 7.97075L9.52892 9.97075C9.78927 10.2311 10.2114 10.2311 10.4717 9.97075C10.7321 9.7104 10.7321 9.28829 10.4717 9.02794L8.66699 7.22321V3.83268Z"
                      fill="#787A80"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.00033 0.166016C3.95024 0.166016 0.666992 3.44926 0.666992 7.49935C0.666992 11.5494 3.95024 14.8327 8.00033 14.8327C12.0504 14.8327 15.3337 11.5494 15.3337 7.49935C15.3337 3.44926 12.0504 0.166016 8.00033 0.166016ZM2.00033 7.49935C2.00033 4.18564 4.68662 1.49935 8.00033 1.49935C11.314 1.49935 14.0003 4.18564 14.0003 7.49935C14.0003 10.8131 11.314 13.4993 8.00033 13.4993C4.68662 13.4993 2.00033 10.8131 2.00033 7.49935Z"
                      fill="#787A80"
                    />
                  </svg>
                  {{ blogs.date }}
                </span>
                <span>|</span>
                <span class="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.00055 1.66732C5.71188 1.66732 4.66721 2.71199 4.66721 4.00065C4.66721 5.28932 5.71188 6.33398 7.00055 6.33398C8.28921 6.33398 9.33388 5.28932 9.33388 4.00065C9.33388 2.71199 8.28921 1.66732 7.00055 1.66732ZM3.33388 4.00065C3.33388 1.97561 4.9755 0.333984 7.00055 0.333984C9.02559 0.333984 10.6672 1.97561 10.6672 4.00065C10.6672 6.0257 9.02559 7.66732 7.00055 7.66732C4.9755 7.66732 3.33388 6.0257 3.33388 4.00065Z"
                      fill="#787A80"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.06992 9.66732C2.60771 9.66732 2.24643 9.89238 2.09979 10.2157C1.89681 10.6633 1.71301 11.1961 1.66964 11.7014C1.65025 11.9273 1.74444 12.0938 1.87423 12.1744C2.56033 12.6006 4.15014 13.334 7.00055 13.334C9.85095 13.334 11.4408 12.6006 12.1269 12.1744C12.2567 12.0938 12.3508 11.9273 12.3315 11.7014C12.2881 11.1961 12.1043 10.6633 11.9013 10.2157C11.7547 9.89238 11.3934 9.66732 10.9312 9.66732H3.06992ZM0.885499 9.66502C1.2908 8.77136 2.19582 8.33398 3.06992 8.33398H10.9312C11.8053 8.33398 12.7103 8.77136 13.1156 9.66502C13.3484 10.1783 13.5982 10.8683 13.6599 11.5874C13.7161 12.2422 13.4439 12.9259 12.8304 13.307C11.9281 13.8676 10.0936 14.6673 7.00055 14.6673C3.90748 14.6673 2.07301 13.8676 1.17066 13.307C0.557149 12.9259 0.284988 12.2422 0.341191 11.5874C0.40291 10.8683 0.652708 10.1783 0.885499 9.66502Z"
                      fill="#787A80"
                    />
                  </svg>
                  {{ blogs.author }}
                </span>
              </div>
              <p class="font-bold text-xl my-2">{{ blogs.title }}</p>
              <p>{{ blogs.about }}</p>
            </div>
            <div class="mt-auto">
              <a href="/blogs" class="font-bold flex items-center gap-2 hover-text-primary"
                >Read more
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-0.5"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
                    fill="#7772F1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
