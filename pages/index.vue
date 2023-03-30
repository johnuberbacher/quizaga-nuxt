<template>
  <div class="w-full max-w-[500px] flex flex-col gap-4">
    <div
      class="w-full flex flex-row h-12 items-center justify-center text-white gap-3"
    >
      <i
        class="ri-flashlight-fill rounded-full text-xs h-5 w-5 bg-transparent text-white ring-[3px] ring-white flex items-center justify-center"
      ></i>
      <span class="font-semibold text-2xl">Quizaga</span>
    </div>
    <div class="columns-2 sm:columns-3 md:columns-3 grid-flow-col gap-5 w-full">
      <NuxtLink
        :to="`${category + 9}`"
        v-for="(category, index) in 23"
        :key="index"
        :id="category"
        @click.prevent="loadQuizByCategory(category + 9)"
        class="transform transition duration-250 hover:scale-110 mb-6 px-4 quiz-card w-full inline-flex flex-col gap-2 items-center justify-center text-center aspect-[4/3] cursor-pointer z-10 relative bg-white rounded-3xl shadow-xl hover:shadow-2xl"
      >
        <div
          class="text-3xl text-purple-500"
          v-html="getTopicIcon(category + 9)"
        ></div>

        <div class="font-extrabold text-sm">
          {{ getTopicName(category + 9) }}
        </div>
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
  const router = useRouter();
};
</script>
