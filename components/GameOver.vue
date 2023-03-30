<template>
  <div
    class="quiz-card z-10 relative w-full max-w-[500px] bg-white rounded-3xl p-8 mb-6 text-center flex flex-col items-center justify-center gap-8 shadow-xl hover:shadow-2xl"
  >
    <div class="flex flex-col items-center justify-center gap-4 min-h-[50vh]">
      <div class="font-semibold text-sm">Congratulations!!!</div>
      <div
        class="text-3xl font-bold inline-flex flex-row items-center justify-center flex-wrap gap-2"
      >
        You won 
        <span
          class="text-yellow-500 inline-flex flex-row items-center justify-center gap-1"
          ><i class="ri-vip-diamond-fill -mt-[1px]"></i
          >{{ props.userScore * 10 }}</span
        >
      </div>
      <div class="font-semibold text-sm text-gray-500">Category: {{ getTopicName(props.category) }}</div>
    </div>
  </div>
  <NuxtLink
    to="/"
    class="w-full max-w-[250px] text-sm font-semibold flex flex-col items-center justify-center self-center min-h-[50px] rounded-full px-4 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 shadow-xl hover:shadow-2xl"
  >
    Play Again
  </NuxtLink>
</template>
<script setup>
import { onMounted } from "vue";
import { quizagaStore } from "@/stores/store";
import { getTopicName, getTopicIcon } from "@/services/utils.js";
import confetti from "canvas-confetti";
const store = quizagaStore();
const props = defineProps(["userScore", "category"]);

onMounted(() => {
  store.userCredits += props.userScore * 10;
  var duration = 3 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
});
</script>
