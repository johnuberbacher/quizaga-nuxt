<template>
    
    <div
        class="transition-opacity duration-1000 w-full flex flex-col items-center justify-center gap-4"
      >
        <div
          v-if="currentQuestion"
          class="text-xs text-gray-700 font-medium"
        >
          {{ currentQuestion.category }}
        </div>
        <div
          v-if="!currentQuestion"
          class="w-2/4 h-6 bg-gray-200 rounded-full animate-pulse"
        ></div>
        <div
          v-if="currentQuestion"
          v-html="currentQuestion.question"
          class="text-xl md:text-2xl font-bold"
        ></div>
        <div
          v-if="!currentQuestion"
          class="w-full animate-pulse flex flex-col items-center justify-center gap-2"
        >
          <div class="w-full h-8 bg-gray-200 rounded-full"></div>
          <div class="w-10/12 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
</template>
<script setup>

const props = defineProps(["currentQuestion"]);
</script>