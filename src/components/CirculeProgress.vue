<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: Number, default: 120 },
  stroke: { type: Number, default: 6 },
  progress: { type: String, default: 0 },
  color: { type: String, default: '#4caf50' },
  bgColor: { type: String, default: '#ddd' },
  textColor: { type: String, default: '#333' },
  showText: { type: Boolean, default: true },
  string: { type: String, default: 0 },
})

const radius = computed(() => (props.size - props.stroke) / 2)
const center = computed(() => props.size / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashOffset = computed(() => circumference.value * (1 - props.progress / 100))
</script>

<template>
  <svg :width="size" :height="size" class="circular-progress">
    <circle
      class="bg"
      :cx="center"
      :cy="center"
      :r="radius"
      fill="transparent"
      :stroke="bgColor"
      :stroke-width="stroke"
    />
    <circle
      class="progress"
      :cx="center"
      :cy="center"
      :r="radius"
      fill="transparent"
      :stroke="color"
      :stroke-width="stroke"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="dashOffset"
      :transform="`rotate(-90 ${center} ${center})`"
    />
    <text
      v-if="showText"
      :x="center"
      :y="center"
      text-anchor="middle"
      dominant-baseline="central"
      font-family="Lato, sans-serif"
      font-weight="900"
      font-size="32px"
      :fill="textColor"
    >
      {{ string }}
    </text>
  </svg>
</template>

<style scoped>
.circular-progress {
  display: block;
}
.bg {
  opacity: 0.3;
}
.progress {
  transition: stroke-dashoffset 0.4s ease;
}
</style>
