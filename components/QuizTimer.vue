<template>
  <div class="flex flex-col items-center justify-center">
    <svg class="progress-ring" width="100" height="100">
      <circle
        class=""
        stroke="rgb(229 231 235 / 1)"
        stroke-width="12"
        stroke-dashoffset="0"
        fill="transparent"
        r="42"
        cx="50"
        cy="50"
      />
      <circle
        class="progress-ring__circle"
        stroke="rgb(37 99 235 / 1)"
        stroke-linecap="round"
        stroke-width="12"
        fill="transparent"
        r="42"
        cx="50"
        cy="50"
      />
    </svg>
    <div
      class="absolute w-12 h-12 flex items-center justify-center text-xl font-bold"
    >
      <span class="relative"
        >{{ props.countdown
        }}<span class="absolute opacity-50 text-sm ml-1">s</span></span
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["countdown"]);
</script>
<style lang="scss" scoped>
.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform-origin: center;
}
</style>
