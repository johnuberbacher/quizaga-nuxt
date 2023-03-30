import { defineStore } from "pinia";

export const quizagaStore = defineStore("quizaga", {
  state: () => ({
    trivia: [],
    category: 14,
    questionCount: 10,
    currentQuestion: 0,
    quizAnswers: [],
    quizCorrectAnswer: '',
    userScore: 0,
    userCredits: 0,
  }),
  actions: {
    async getTriviaByCategory(category:Number) {
      const result = await fetch('https://opentdb.com/api.php?amount=' + this.questionCount + '&category=' + category);
      const data = await result.json();
      this.trivia = data['results'];
    },
  },
  getters: { 
    // BEWARE: getter names cannot be same as state props!
    triviaAPI(state) {
      return state.trivia.length;
    },
    adpsFilteredLength(state) {
      return (query: string) => state.trivia.filter((triviaItem) => triviaItem.estado_cd === query).length;
    }
  },
});