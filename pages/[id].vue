<template>
  <div class="w-full max-w-[500px] flex flex-col gap-4">
    <div class="w-full flex flex-row h-12 items-center justify-start">
      <NuxtLink
        to="/"
        class="rounded-full w-10 h-10 min-w-10 min-h-10 flex items-center justify-center hover:bg-purple-600"
      >
        <i class="ri-arrow-left-line text-white"></i>
      </NuxtLink>
    </div>
    <GameOver
      v-if="gameover"
      :category="store.category"
      :userScore="store.userScore"
    ></GameOver>
    <div
      v-if="!gameover"
      class="quiz-card z-10 relative w-full max-w-[500px] bg-white rounded-3xl p-8 mb-6 text-center flex flex-col items-center justify-center gap-8 shadow-xl hover:shadow-2xl"
    >
      <div class="w-full flex flex-row items-center justify-between">
        <div
          class="flex flex-row items-center justify-start gap-2 min-w-[75px] w-[75px]"
        >
          <i class="ri-question-fill text-gray-600 -mt-[2px]"></i
          ><span class="text-gray-600"
            >{{ store.currentQuestion + 1 }}/{{ store.questionCount }}</span
          >
        </div>
        <div
          class="flex flex-row items-center justify-center gap-2 bg-yellow-500 rounded-full px-2 h-[24px]"
        >
          <i class="ri-vip-diamond-fill text-white -mt-[1px]"></i
          ><span class="text-white">{{ store.userCredits }}</span>
        </div>
        <div
          class="flex flex-row items-center justify-end gap-2 min-w-[75px] w-[75px]"
        >
          <i class="ri-star-fill text-purple-500 -mt-[2px]"></i
          ><span class="text-gray-600">{{ store.userScore }}</span>
        </div>
      </div>
      <QuizTimer :countdown="countdown"></QuizTimer>
      <QuizQuestionTitle
        :currentQuestion="store.trivia[store.currentQuestion]"
      ></QuizQuestionTitle>
      <div
        :class="{
          'pointer-events-none': pauseControls,
        }"
        class="w-full flex flex-col items-center justify-center gap-4"
      >
        <QuizMultipleChoiceButton
          :item="item"
          v-for="(item, index) in store.quizAnswers ? store.quizAnswers : 4"
          :key="index"
          :id="item"
          @click="evaluateAnswer(item)"
        ></QuizMultipleChoiceButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.quiz-card {
  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 1.5rem;
    right: 1.5rem;
    bottom: -1.5rem;
    top: 0;
    opacity: 0.25;
    background-color: white;
    border-radius: 1.5rem;
  }
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0.75rem;
    right: 0.75rem;
    bottom: -0.75rem;
    top: 0;
    opacity: 0.5;
    background-color: white;
    border-radius: 1.5rem;
  }
}
</style>
<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { getTopicName } from "@/services/utils.js";
import { quizagaStore } from "@/stores/store";
import { useRouter, useRoute } from "vue-router";
import confetti from "canvas-confetti";

const store = quizagaStore();
const route = useRoute();

// Reactives
const loading = ref(false);
const pauseControls = ref(false);
const countdown = ref(10);
const selectedAnswer = ref(null);
const gameover = ref(false);

let timer = null;

const startTimer = () => {
  timer = setInterval(() => {
    countdown.value--;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
};

const restartTimer = () => {
  countdown.value = 10;
  startTimer();
};

const updateProgress = () => {
  const circle = document.querySelector(".progress-ring__circle");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (countdown.value / 10) * circumference;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = offset;
};

const loadNextQuestion = () => {
  // Check for Game Over
  if (store.currentQuestion === store.questionCount - 1) {
    // Finished all questions
    stopTimer();
    pauseControls.value = true;
    gameover.value = true;
  } else {
    // Prepare then Load next question
    store.currentQuestion++;
    bundleAnswers();
  }
};

const bundleAnswers = () => {
  // Fetch, merge and shuffle the answers
  const quizShuffledAnswers = store.trivia[
    store.currentQuestion
  ].incorrect_answers.concat(
    store.trivia[store.currentQuestion].correct_answer
  );
  quizShuffledAnswers.sort(() => Math.random() - 0.5);
  store.quizAnswers = quizShuffledAnswers;

  // Assign the correct answer to a reactive state
  store.quizCorrectAnswer = store.trivia[store.currentQuestion].correct_answer;

  loading.value = false;
  pauseControls.value = false;

  // Begin playing
  restartTimer();
};

const evaluateAnswer = async (item) => {
  if (!pauseControls.value) {
    // Pause Game
    stopTimer();
    selectedAnswer.value = item;
    pauseControls.value = true;

    // Check the Answer
    const selectedButton = document.getElementById(item);
    if (selectedAnswer.value == store.quizCorrectAnswer) {
      // Correct Answer
      selectedButton.classList.add("correct");
      confetti({
        particleCount: 150,
        spread: 360,
        ticks: 60,
        zIndex: 10,
        startVelocity: 30,
      });
      store.userScore++;
      setTimeout(() => {
        selectedButton.classList.remove("correct");
      }, 3000);
    } else {
      // Wrong Answer
      selectedButton.classList.add("incorrect");
      setTimeout(() => {
        selectedButton.classList.remove("incorrect");
      }, 3000);
    }

    // Load Next Question
    setTimeout(() => {
      // Prepare then Load next question
      loadNextQuestion();
    }, 3000);
  }
};

onMounted(async () => {
  await store
    .getTriviaByCategory(route.params.id)
    .then(bundleAnswers)
    .catch(() => {
      const router = useRouter();
      navigateTo("/");
    });
});

onBeforeRouteLeave(() => {
  store.quizCorrectAnswer = "";
  store.quizAnswers = [];
  store.currentQuestion = 0;
});

onUnmounted(stopTimer);

watch(countdown, (newVal) => {
  if (newVal < 0) {
    stopTimer();
    // Ran out of time on a question!
    // TO-DO blink/pulse the correct answer
    loadNextQuestion();
  }
  // Keep the timer element updated and in-sync with the countdown
  updateProgress();
});
</script>
