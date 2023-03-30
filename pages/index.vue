<template>
  <div
    class="bg-purple-800 p-4 md:px-8 min-h-screen overflow-hidden flex flex-col items-center justify-start gap-4"
  >
    <div class="w-full flex flex-row h-10 min-w-10 min-h-10"></div>
    <div
      class="columns-2 sm:columns-3 md:columns-4 grid-flow-col gap-5 w-full max-w-[800px]"
    >
      <NuxtLink
        :to="`${category + 9}`"
        v-for="(category, index) in 20"
        :key="index"
        :id="category"
        @click.prevent="loadQuizByCategory(category + 9)"
        class="transform transition duration-250 hover:scale-110 my-4 px-4 font-extrabold text-sm quiz-card w-full inline-flex flex-col gap-2 items-center justify-center text-center aspect-square cursor-pointer z-10 relative bg-white rounded-3xl shadow-xl hover:shadow-2xl"
      >
      <div class="text-lg text-purple-500" v-html="getTopicIcon(category + 9)"></div>
        {{ getTopicName(category + 9) }}
      </NuxtLink>
      <!-- ... -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.quiz-card {
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    bottom: -0.5rem;
    top: 0;
    opacity: 0.5;
    background-color: white;
    border-radius: 1.25rem;
  }
}
</style>
<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { quizagaStore } from "@/stores/store";
import { useRouter } from "vue-router";
import { getTopicName, getTopicIcon } from "@/services/utils.js";

const store = quizagaStore();

const loadQuizByCategory = (category) => {
  store.category = category;
  console.log(`catogory selected is: ${category}`);
  const router = useRouter();
};
</script>
