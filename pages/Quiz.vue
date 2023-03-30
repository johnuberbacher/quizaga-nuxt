<template>
    <div
      class="p-4 md:px-8 bg-purple-800 min-h-screen flex flex-col items-center justify-start gap-4"
    >
      <div class="w-full flex flex-row">
        <button
          class="rounded-full w-10 h-10 min-w-10 min-h-10 flex items-center justify-center hover:bg-purple-600 "
        >
          <i class="ri-arrow-left-line text-white"></i>
        </button>
      </div>
      <div
        class="quiz-card z-10 relative w-full max-w-[500px] bg-white rounded-3xl p-8 text-center flex flex-col items-center justify-center gap-8 shadow-xl hover:shadow-2xl"
      >
        <div class="w-full flex flex-row items-center justify-between text-sm">
          <div class="flex flex-row items-center justify-center gap-2">
            <i class="ri-question-fill text-gray-600 -mt-[2px]"></i
            ><span class="text-gray-600 font-semibold">4/10</span>
          </div>
          <div class="flex flex-row items-center justify-center gap-2 bg-yellow-500 rounded-full px-2 h-[24px]">
            <i class="ri-copper-diamond-fill text-white -mt-[1px]"></i
            ><span class="text-white font-semibold">100</span>
          </div>
          <div class="flex flex-row items-center justify-center gap-2">
            <i class="ri-star-fill text-purple-500 -mt-[2px]"></i
            ><span class="text-gray-600 font-semibold">1,337</span>
          </div>
        </div>
        <div
          class="flex items-center justify-center text-xl font-bold rounded-full border-4 border-blue-500 w-14 min-w-18 h-14 min-h-14"
        >
          10
        </div>
        <div class="w-full flex flex-col items-center justify-center gap-2">
          <div class="text-xs text-gray-700 font-medium">Technology</div>
          <div class="font-sans question text-2xl font-bold">
            What was the first product launched by Apple?
          </div>
        </div>
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <QuizMultipleChoiceButton>iPhone</QuizMultipleChoiceButton>
          <QuizMultipleChoiceButton>iPad</QuizMultipleChoiceButton>
          <QuizMultipleChoiceButton>Apple I</QuizMultipleChoiceButton>
          <QuizMultipleChoiceButton>iPod</QuizMultipleChoiceButton>
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
  <script setup></script>
  